import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isShowing: false
    }

    render() {
        const {comments} = this.props

        if (!comments || !comments.length) return null

        return (
            <div>
                <button onClick={this.toggleComments} className="btn btn-primary">
                    {this.state.isShowing ?
                        'Hide comments' :
                        `Show comments (${comments.length})`}
                </button>

                {this.getList()}
            </div>
        )
    }

    toggleComments = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    getList() {
        if (!this.state.isShowing) return null

        const {comments} = this.props
        const commentElements = comments.map(comment => <li key={comment.id} className="list-group-item"><Comment comment={comment}/></li>)

        return (
            <ul className="list-group app-comments">
                {commentElements}
            </ul>
        )
    }
}
