import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'

class Filters extends Component {
    render() {
        return (
            <div>
                <ArticlesSelect/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters
