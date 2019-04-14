import React from 'react'
import moment from 'moment'

export default props => {
    return (
        <div
            onClick={() => {
                moment(props.schedule.atDay + ' ' + props.schedule.atTime) >
                moment()
                    ? props.schedule.signedUp
                        ? ''
                        : props.logged
                        ? props.history.push(
                            '/reservar/clases/lugares/' + props.schedule.id
                        )
                        : props.history.push('/login')
                    : ''
            }}
            className={
                moment(props.schedule.atDay + ' ' + props.schedule.atTime) <
                moment()
                    ? 'hide'
                    : props.schedule.signedUp
                    ? 'reservado'
                    : ''
            }>
            <h5>{props.schedule.discipline.name}</h5>
            <p>{props.schedule.shortDescription}</p>
            <p>
                con {props.schedule.coach.name} {props.schedule.coach.surname}
            </p>
            <h5>
                {props.schedule.atTime} <span>{'hrs. '}</span>
                <p>{props.schedule.durationTime} mins.</p>
            </h5>
            <p className="club">{props.schedule.club.name}</p>
            {moment(props.schedule.atDay + ' ' + props.schedule.atTime) >
            moment() ? (
                props.schedule.signedUp ? (
                    <button
                        className="btn"
                        onClick={() =>
                            props.setAlertCancelSchedule(
                                props.schedule.signedUp
                            )
                        }>
                        cancelar
                    </button>
                ) : (
                    ''
                )
            ) : (
                ''
            )}
        </div>
    )
}
