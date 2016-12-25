import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayPickerComponent extends Component {
    static propTypes = {}

    state = {
        selectedDay: new Date()
    }

    handleDayClick(e, day, {selected, disabled}) {
        if (disabled) {
            return
        }

        if (selected) {
            this.setState({selectedDay: null})
        } else {
            this.setState({selectedDay: day})
        }
    }

    printDate() {
        return this.state.selectedDay && this.state.selectedDay.toString() || 'nada'
    }

    render() {
        return (
            <div>
                <DayPicker
                    initialMonth={new Date(this.state.selectedDay)}
                    selectedDays={day => DateUtils.isSameDay(this.state.selectedDay, day)}
                    onDayClick={this.handleDayClick.bind(this)}
                />

                <div>
                    You have selected: {this.printDate()}
                </div>
            </div>
        )
    }
}

export default DayPickerComponent
