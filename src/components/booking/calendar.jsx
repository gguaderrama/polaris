import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

let interval

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: moment(),
            days: [],
            fixed: false,
            back: true,
            fordward: true
        }
        this.setCalendar = this.setCalendar.bind(this)
        this.backCalendar = this.backCalendar.bind(this)
        this.forwardCalendar = this.forwardCalendar.bind(this)
        this.setClassDay = this.setClassDay.bind(this)
    }
    componentDidMount() {
        interval = setInterval(() => {
            this.props.getSchedule()
        }, 10000)
        if (
            moment(this.props.date)
                .startOf('isoWeek')
                .isSame(moment().startOf('isoWeek'))
        ) {
            this.setState({ back: false })
        }
        if (
            moment(this.props.date)
                .startOf('isoWeek')
                .isSame(
                    moment()
                        .add(14, 'days')
                        .startOf('isoWeek')
                )
        ) {
            this.setState({ fordward: false })
        }
        this.setCalendar()
        window.onscroll = () => {
            let elem = document.getElementById('calendar-items')
            let efix = document.getElementById('calendar-fix')
            if (elem) {
                let rect = elem.getBoundingClientRect()
                if (rect.top <= 212) {
                    efix.style.height = '248px'
                    this.setState({ fixed: true })
                } else {
                    efix.style.height = '0px'
                    this.setState({ fixed: false })
                }
            }
        }
    }
    componentWillUnmount() {
        clearInterval(interval)
    }
    setCalendar() {
        let startOfWeek = moment(this.props.date).startOf('isoWeek')
        let endOfWeek = moment(this.props.date).endOf('isoWeek')
        let day = startOfWeek
        let days = []
        while (day <= endOfWeek) {
            days.push(day.toDate())
            day = day.clone().add(1, 'd')
        }
        this.setState({ days: days })
        this.props.getSchedule()
    }
    backCalendar() {
        if (this.state.back) {
            this.props.setLoadingCalendar(true)
            this.props.setDateCalendar(
                moment(this.props.date).subtract(7, 'days')
            )
            setTimeout(() => {
                this.props.getSchedule()
            }, 100)
        }
    }
    forwardCalendar() {
        if (this.state.fordward) {
            this.props.setLoadingCalendar(true)
            this.props.setDateCalendar(moment(this.props.date).add(7, 'days'))
            setTimeout(() => {
                this.props.getSchedule()
            }, 100)
        }
    }
    setClassDay(e) {
        if (
            moment(e)
                .startOf('day')
                .isSame(moment(this.state.day).startOf('day'))
        ) {
            return 'calendario-table-day selected'
        } else {
            return 'calendario-table-day'
        }
    }
    render() {
        return (
            <div
                className={`calendar ${this.state.fixed ? 'fixed' : ''}`}
                id="calendar">
                <h2 className="calendario-mes">
                    <FontAwesomeIcon
                        icon="chevron-left"
                        className={this.state.back ? '' : 'disabled'}
                        onClick={() => this.backCalendar()}
                    />{' '}
                    {this.props.date.locale('es').format('MMMM YYYY')}
                    <FontAwesomeIcon
                        icon="chevron-right"
                        className={this.state.fordward ? '' : 'disabled'}
                        onClick={() => this.forwardCalendar()}
                    />
                </h2>
                <table className="calendario-table">
                    <thead>
                        <tr>
                            {this.state.days.map((e, i) => {
                                return (
                                    <th key={i}>
                                        <div className={this.setClassDay(e)}>
                                            <h5>{moment(e).format('DD')}</h5>
                                            <h5>{moment(e).format('ddd')}</h5>
                                        </div>
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default Calendar
