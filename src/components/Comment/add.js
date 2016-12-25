import React, {Component} from 'react'

class AddComment extends Component {
    static propTypes = {
        saveComment: React.PropTypes.func.isRequired
    }

    state = {
        text: '',
        user: ''
    }

    render() {
        return (
            <form className="comment-section" onSubmit={this.handleSubmit}>
                <hr/>

                <input
                    type="text"
                    placeholder="Username"
                    value={this.state.user}
                    onChange={this.handleChange('user')}
                    required
                />

                <textarea
                    rows="10"
                    placeholder="Comment"
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    required
                />

                <input type="submit" value="Save"/>
            </form>
        )
    }

    handleChange = stateProp => ev => {
        let partialState = {}

        partialState[stateProp] = ev.target.value

        this.setState(partialState)
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const {user, text} = this.state
        const {saveComment} = this.props

        if (!text || !user) {
            return
        }

        saveComment(user, text)

        this.setState({
            text: '',
            user: ''
        })
    }
}

export default AddComment
