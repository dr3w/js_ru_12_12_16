import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.props.isArticleOpen(article.id)}
                         onClick={this.props.toggleOpenArticle(article.id)}
                />
            </li>)

        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {articleElements}
                </ul>
            </div>
        )
    }
}

export default accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}
