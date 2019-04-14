import React from 'react'
import Calendar from './calendar'
import moment from 'moment'
import Loading from 'components/loading'
import Item from './schedule_item'
import Alert from 'components/alerta'

export default props => {
    const dias = [1, 2, 3, 4, 5, 6, 0]
    const horas = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    const clases = [2, 3]
    let cuerpo = horas.map((e, i) => {
        return (
            <tr key={i}>
                {dias.map((el, ix) => {
                    return (
                        <td key={ix}>
                            {props.schedule.map((elem, index) => {
                                if (
                                    moment(elem.atDay).day() == el &&
                                    moment(
                                        elem.atDay + ' ' + elem.atTime
                                    ).hour() == e
                                ) {
                                    return clases.map((value, key) => {
                                        if (elem.discipline.id == value) {
                                            return (
                                                <Item
                                                    {...props}
                                                    key={index}
                                                    schedule={elem}
                                                />
                                            )
                                        }
                                    })
                                }
                            })}
                        </td>
                    )
                })}
            </tr>
        )
    })
    return (
        <div className="calendario">
            <Calendar date={moment()} {...props} />
            <div className="calendar-fix" id="calendar-fix" />
            <table className="calendario-table" id="calendar-items">
                <tbody>{cuerpo}</tbody>
            </table>
            <Alert
                type="question"
                visible={props.alert_cancel_schedule}
                handleAlert={() => props.setAlertCancelSchedule(0)}
                onClick={props.cancelSchedule}
                title="¿Estás seguro?"
                message="Perderás tu lugar en la clase."
            />
        </div>
    )
}
