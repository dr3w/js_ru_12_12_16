import React, {Component, PropTypes} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import {connect} from 'react-redux'
import {filterByDate} from '../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        dateFilter: PropTypes.object.isRequired,
        filterByDate: PropTypes.func.isRequired
    };

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
        this.props.filterByDate(null)
    }

}

export default connect(
    (state) => {
        return {
            dateFilter: state.filter.date
        }
    }, {filterByDate}
)(DateRange)
