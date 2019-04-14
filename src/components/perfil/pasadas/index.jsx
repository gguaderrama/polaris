import React from 'react'
import Calendar from './calendar'
import Schendule from './schedule'
import Without from './with_out'
import Loading from 'components/loading'

export default props => {
    return (
        <div className="clases">
            <div className="hidden-calendar">
                <div className="calendario">
                    <Calendar {...props} />
                    {props.loadingPasadas ? (
                        <Loading />
                    ) : props.pasadas.length === 0 ? (
                        <Without {...props} />
                    ) : (
                        <Schendule {...props} />
                    )}
                </div>
            </div>
        </div>
    )
}
