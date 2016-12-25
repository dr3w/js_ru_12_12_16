import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import AddComment from '../Comment/Add'
import toggleOpen from '../../decorators/toggleOpen'

import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    state = {
        comments: this.props.comments
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
        return <a href="#" onClick={this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const {comments} = this.state
        const {isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        return (
            <div>
                <ul>
                    <CSSTransition
                        transitionName="comment-body"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {commentItems}
                    </CSSTransition>
                </ul>
                <AddComment saveComment={this.saveComment}/>
            </div>
        )
    }

    saveComment = (user, text) => {
        this.setState({
            comments: [...this.state.comments, {id: Date.now(), user, text}]
        })
    }
}

export default toggleOpen(CommentList)
