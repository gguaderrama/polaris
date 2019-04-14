import React from 'react'
import Item from './schedule_item'
import moment from 'moment'
const dias = [1, 2, 3, 4, 5, 6, 0]
const horas = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
const clases = [2, 3]

export default props => {
    let cuerpo = horas.map((e, i) => {
        return (
            <tr key={i}>
                {dias.map((el, ix) => {
                    return (
                        <td key={ix}>
                            {props.pasadas.map((elem, index) => {
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
        <table className="calendario-table">
            <tbody>{cuerpo}</tbody>
        </table>
    )
}
