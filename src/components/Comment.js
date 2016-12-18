import React from 'react'

export default function Comment(props) {
    const {comment} = props

    return (
        <div>
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
        </div>
    )
}
