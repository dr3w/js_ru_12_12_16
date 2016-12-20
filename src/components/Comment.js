import React, {PropTypes} from 'react'

function Comment(props) {
    const {comment: {text, user}} = props
    
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

export default Comment

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
}
