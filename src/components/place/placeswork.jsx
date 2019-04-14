import React from 'react'
import Place from './placework'
import Button from './button'
import Alert from 'components/alerta'

const fuerza = [8, 7, 6, 5, 4, 3, 2, 1]
const funcional = [9, 10, 11, 12]
const funcionalBis = [13, 14, 15, 16]
const cardio = [17, 18, 19, 20, 21]
const cardioBis = [22, 23, 24]
let message = 'Se ha reservado tu lugar en esta clase.'

export default props => {
    return (
        <div className="reserva-selection-work">
            <h2>Selecciona tu lugar</h2>
            <div className="reserva-table">
                <div className="reserva-dis">
                    <span className="indicator3" />
                    <p className="disponible">Disponible</p>
                    <span className="indicator1" />
                    <p className="disponible">Ocupado</p>
                    <span className="indicator2" />
                    <p className="ocupado">Tu lugar seleccionado</p>
                </div>
                <div className="coach-side">
                    <div>
                        <h3>
                            <strong>Workout Bar</strong> con Coach 1
                        </h3>
                        <p>26 de enero de 2019, 06:00 hrs</p>
                    </div>
                </div>
                <div className="hidden-work">
                    <div className="work-container">
                        <div className="col-work-1">
                            <div className="work-margin">
                                {fuerza.map((e, i) => {
                                    return (
                                        <Place
                                            lugar={e}
                                            key={i}
                                            {...props}
                                            type="work-circle"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-work-2">
                            <div className="work-margin">
                                {funcional.map((e, i) => {
                                    return (
                                        <Place
                                            key={i}
                                            lugar={e}
                                            {...props}
                                            type="work-square"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-work-3">
                            <div className="work-margin">
                                {cardio.map((e, i) => {
                                    return (
                                        <Place
                                            key={i}
                                            lugar={e}
                                            {...props}
                                            type="work-square"
                                        />
                                    )
                                })}

                                <div className="inner-cardio">
                                    {cardioBis.map((e, i) => {
                                        return (
                                            <div className="work-inline">
                                                <Place
                                                    key={i}
                                                    lugar={e}
                                                    {...props}
                                                    type="work-square"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-work-4">
                            <div className="work-margin">
                                {funcionalBis.map((e, i) => {
                                    return (
                                        <Place
                                            key={i}
                                            lugar={e}
                                            {...props}
                                            type="work-square"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Button {...props} />
            </div>
            <Alert
                type="check"
                visible={props.alert_place}
                handleAlert={() => props.closeAlertPlace(props.match.params.id)}
                title="¡Felicidades!"
                message={message}
            />
        </div>
    )
}
