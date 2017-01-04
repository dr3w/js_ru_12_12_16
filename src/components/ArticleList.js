import React, {PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends React.Component {
    render() {
        const {articles, isOpenItem, toggleOpenItem} = this.props
        const articleElements = articles.map(article => {

            if (!this.isDisplayArticle(article)) return

            return (
                <li key={article.id}>
                    <Article article={article}
                             isOpen={isOpenItem(article.id)}
                             onClick={toggleOpenItem(article.id)}
                             ref={this.getArticleRef}
                    />
                </li>
            )
        })
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
            </div>
        )
    }

    getArticleRef = (article) => {
        this.article = article
    }

    isDisplayArticle = (article) => {
        return this.isFilteredById(article.id) && this.isFilteredByDate(article.date)
    }

    isFilteredById(id) {
        return !this.props.inputFilter.length ||
            this.props.inputFilter.some(article => article.value === id)
    }

    isFilteredByDate(date) {
        const {from, to} = this.props.dateFilter

        const fromDate = from ? new Date(from) : null
        const toDate = to ? new Date(to) : null
        const checkDate = new Date(date)

        return !fromDate || !toDate || (checkDate > fromDate && checkDate < toDate)
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    (state) => {
        return {
            articles: state.articles,
            inputFilter: state.inputFilter,
            dateFilter: state.dateFilter
        }
    }
)(accordion(ArticleList))
