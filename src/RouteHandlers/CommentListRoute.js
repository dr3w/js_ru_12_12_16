import React, { Component, PropTypes } from 'react'
import CommentListAll from '../components/CommentListAll'

class CommentListRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <CommentListAll page={this.props.params.page} key={this.props.params.page} />
                {this.props.children}
            </div>
        )
    }
}

export default CommentListRoute
