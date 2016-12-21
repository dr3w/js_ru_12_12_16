import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
            openArticleId: null
        }

        toggleOpenArticle = id => ev => {
            ev && ev.preventDefault && ev.preventDefault()

            this.setState({
                openArticleId: this.isArticleOpen(id) ? null : id
            })
        }

        isArticleOpen = id => this.state.openArticleId === id

        render() {
            return <Component
                {...this.props}
                {...this.state}
                toggleOpenArticle={this.toggleOpenArticle}
                isArticleOpen={this.isArticleOpen}
            />
        }
    }
}
