import React, {Component, PropTypes} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterByInput} from '../AC'
import 'react-select/dist/react-select.css'

class ArticlesSelect extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options={options} value={this.props.inputFilter} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.props.filterByInput(selected)
    }
}

export default connect(
    (state) => {
        return {
            articles: state.articles,
            inputFilter: state.inputFilter
        }
    }, {filterByInput}
)(ArticlesSelect)
