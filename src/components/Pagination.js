import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    limit: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  };

  render() {
    const {total} = this.props
    const limit = +this.props.limit

    let pagination = []

    for (let p = 1; p <= Math.ceil(total/limit); p++) {
      pagination.push(
        <li key={p}>
          <Link to={`/comments/${p}`} activeStyle={{color: 'red'}} >{p}</Link>
        </li>
      )
    }

    return (
      <div>
        <ul>{pagination}</ul>
      </div>
    )
  }
}

export default MenuItem
