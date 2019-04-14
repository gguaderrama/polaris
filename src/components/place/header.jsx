import React from 'react'
import moment from 'moment'

export default props => {
    return (
        <div>
            <h3>
                <strong>{props.schedule_item.discipline.name}</strong> con{' '}
                {props.schedule_item.coach.name}{' '}
                {props.schedule_item.coach.surname}
            </h3>
            <p>
                {moment(props.schedule_item.atDay).format('LL')},{' '}
                {props.schedule_item.atTime} hrs
            </p>
        </div>
    )
}
