import React from 'react'
import Calendar from './calendar'
import Schendule from './schedule'
import Without from './with_out'
import Alert from 'components/alerta'
import Loading from 'components/loading'

export default props => {
    return (
        <div className="clases">
            <div className="hidden-calendar">
                <div className="calendario">
                    <Calendar {...props} />
                    {props.loadingProximas ? (
                        <Loading />
                    ) : props.proximas.length === 0 ? (
                        <Without {...props} />
                    ) : (
                        <Schendule {...props} />
                    )}
                </div>
            </div>
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
