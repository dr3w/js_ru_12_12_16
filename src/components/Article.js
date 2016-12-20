import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    render() {
        const { article, onClick } = this.props

        return (
            <div>
                <h3 onClick = {onClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null

        return (
            <section>
                {this.props.article.text}
                <CommentList comments = {this.props.article.comments} />
            </section>
        )
    }
}

Article.propTypes = {
    article: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}
