import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayPickerComponent extends Component {
    static propTypes = {}

    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)

        this.setState(range)
    }

    handleResetClick = ev => {
        ev && ev.preventDefault()

        this.setState({
            from: null,
            to: null
        })
    }

    printDate() {
        const {from, to} = this.state
        let fromStr = from && from.toString()
        let toStr = to && to.toString()

        return from && to && `You have selected: ${fromStr} – ${toStr}`
    }

    render() {
        const {from, to} = this.state

        return (
            <div>
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />

                <div>
                    {this.printDate()}
                </div>

                <div>
                    <a href="#" onClick={ this.handleResetClick }>Reset</a>
                </div>
            </div>
        )
    }
}

export default DayPickerComponent

