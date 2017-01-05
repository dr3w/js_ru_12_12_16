import React, {Component, PropTypes} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterByTitle} from '../AC'
import 'react-select/dist/react-select.css'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array,
        titleFilter: PropTypes.array.isRequired,
        filterByTitle: PropTypes.func.isRequired
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.props.titleFilter} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.props.filterByTitle(selected)
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles,
            titleFilter: state.filter.title
        }
    }, {filterByTitle}
)(ArticlesSelect)
