import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props

        return (
            <div>
                <h4 onClick={this.toggleOpen} className="app-clickable">{article.title}</h4>

                {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {article} = this.props

        return (
            <div>
                <p>
                    {article.text}
                </p>

                <CommentList comments={article.comments}/>
            </div>
        )
    }
}
