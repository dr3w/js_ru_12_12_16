import React, {Component, PropTypes} from 'react'
import {loadAllComments} from '../AC'
import Comment from './Comment'
import Loader from './Loader'
import Pagination from './Pagination'
import {mapToArray} from '../helpers'
import {connect} from 'react-redux'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    loading: PropTypes.bool
  }

  componentDidMount() {
    !this.props.comments.length && this.props.loadAllComments(this.props.page)
  }

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {comments, loading, page, total} = this.props

    if (loading) return <Loader />
    if (!comments.length) return <div><p>No comments yet</p></div>

    const commentItems = comments.map(comment => <li key={comment.id}>[{comment.id}] <Comment comment={comment}/></li>)
    return (
      <div>
        <ul>{commentItems}</ul>
        <Pagination page={page} total={total} limit="5"/>

      </div>
    )
  }
}

export default connect((storeState, props) => {
  const pagination = storeState.comments.pagination.get(props.page)
  const comments = pagination && mapToArray(pagination.map(id => storeState.comments.getIn(['entities', id]))) || []

  return {
    comments,
    loading: storeState.comments.loading,
    page: +props.page,
    total: storeState.comments.paginationTotal
  }
}, {loadAllComments})(CommentList)
