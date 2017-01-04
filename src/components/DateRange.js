import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import {connect} from 'react-redux'
import {filterByDate} from '../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (e, day) => {
        this.props.filterByDate(DateUtils.addDayToRange(day, this.props.dateFilter))
    }

    render() {
        const {from, to} = this.props.dateFilter;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick }
                />
                <div>
                    {selectedRange}
                </div>
                <center>
                    <button onClick={this.resetRange}>Reset</button>
                </center>
            </div>
        );
    }

    resetRange = () => {
        this.props.filterByDate({from: null, to: null})
    }

}

export default connect(
    (state) => {
        return {
            dateFilter: state.dateFilter
        }
    }, {filterByDate}
)(DateRange)
