import React, { Component, PropTypes } from 'react'
import CommentList from '../CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import { deleteArticle, loadArticleById } from '../../AC'
import { connect } from 'react-redux'
import './style.css'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        //form connect
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    static contextTypes = {
        router: PropTypes.object,
        //тут и в других местах: лучше сделай вукоратор либо компонент-обертку для локализации, чтоб не обращатся кажды раз к контексту, иначе потом тяжело будет что-либо поменять
        i18n: PropTypes.object
    }

    componentDidMount() {
        if (this.props.isOpen) this.props.loadArticleById(this.props.id)
    }
    /*
     shouldComponentUpdate(nextProps, nextState) {
     return this.props.isOpen != nextProps.isOpen
     }
     */

    componentWillUpdate() {
    }

    render() {
        const { i18n } = this.context
        const { article, onClick } = this.props
        if (!article) return null
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                <div>
                    <a href="#" onClick={this.handleDelete}>{i18n.deleteArticle}</a>
                </div>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <CommentList article = {this.props.article} />
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect((state, props) => ({
    article: state.articles.getIn(['entities', props.id])
}), {deleteArticle, loadArticleById}, null, {pure: false})(Article)
