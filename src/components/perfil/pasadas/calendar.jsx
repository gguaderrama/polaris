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
            fordward: false
        }
        this.setCalendar = this.setCalendar.bind(this)
        this.backCalendar = this.backCalendar.bind(this)
        this.forwardCalendar = this.forwardCalendar.bind(this)
        this.setClassDay = this.setClassDay.bind(this)
    }
    componentDidMount() {
        this.props.setLoadingPasadasPerfil(true)
        interval = setInterval(() => {
            this.props.getPasadasPerfil()
        }, 10000)
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
        let startOfWeek = moment(this.props.datePasadas).startOf('isoWeek')
        let endOfWeek = moment(this.props.datePasadas).endOf('isoWeek')
        let day = startOfWeek
        let days = []
        while (day <= endOfWeek) {
            days.push(day.toDate())
            day = day.clone().add(1, 'd')
        }
        this.setState({ days: days })
        this.props.getPasadasPerfil()
    }
    backCalendar() {
        if (this.state.back) {
            if (!this.props.loadingPasadas) {
                this.setState({ fordward: true })
                this.props.setLoadingPasadasPerfil(true)
                this.props.setDateCalendarPasadas(
                    moment(this.props.datePasadas).subtract(7, 'days')
                )
                setTimeout(() => {
                    if (
                        moment(this.props.datePasadas)
                            .startOf('isoWeek')
                            .isSame(
                                moment()
                                    .subtract(14, 'days')
                                    .startOf('isoWeek')
                            )
                    ) {
                        this.setState({ back: false })
                    }
                    this.setCalendar()
                }, 300)
            }
        }
    }
    forwardCalendar() {
        if (this.state.fordward) {
            if (!this.props.loadingPasadas) {
                this.setState({ back: true })
                this.props.setLoadingPasadasPerfil(true)
                this.props.setDateCalendarPasadas(
                    moment(this.props.datePasadas).add(7, 'days')
                )
                setTimeout(() => {
                    if (
                        moment(this.props.datePasadas)
                            .startOf('isoWeek')
                            .isSame(moment().startOf('isoWeek'))
                    ) {
                        this.setState({ fordward: false })
                    }
                    this.setCalendar()
                }, 300)
            }
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
                    {this.props.datePasadas.locale('es').format('MMMM YYYY')}
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
