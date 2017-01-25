import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static contextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.object
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (isOpen && !this.props.isOpen &&
            !article.loadedComments && !article.loadingComments) loadArticleComments(article.id)
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        const {i18n} = this.context

        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? i18n.hide : i18n.show} {i18n.comments}
        </a>
    }

    getBody() {
        const { comments, article, isOpen, addComment } = this.props
        if (!isOpen) return null
        if (article.loadingComments || !article.loadedComments) return <Loader />
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <b>User: {this.context.user}</b>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.article.comments.map(id => storeState.comments.getIn(['entities', id]))
    }
}, { addComment, loadArticleComments },
    null,
    {pure: false}
)(toggleOpen(CommentList))
