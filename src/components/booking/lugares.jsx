import React from 'react'
import Navigation from '../../containers/navigation'
import Lugar from './lugar'
import Footer from '../footer'
import Bicycle1 from 'assets/bicycle1.png'

const lugares = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lugaresf2 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const lugaresf3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="reserva-selection">
                <h2>Selecciona tu lugar</h2>
                <h3>
                    <strong>Cycling</strong> con Coach 1
                </h3>
                <p>Jueves 27 de diciembre, 07:00 hrs</p>
                <div className="reserva-table">
                    <div className="reserva-dis">
                        <span className="indicator2">
                            <img
                                src={Bicycle1}
                                alt="bibicleta Load"
                                className="bicycle"
                            />
                        </span>
                        <p className="disponible">Disponible</p>
                        <span className="indicator1">
                            <img
                                src={Bicycle1}
                                alt="bibicleta Load"
                                className="bicycle"
                            />
                        </span>
                        <p className="ocupado">Ocupado</p>
                        <span className="indicator3">
                            <img
                                src={Bicycle1}
                                alt="bibicleta Load"
                                className="bicycle"
                            />
                        </span>
                        <p className="disponible">Tu lugar seleccionado</p>
                    </div>
                    <div className="coach-side">
                        <span>COACH</span>
                    </div>
                    <table>
                        <tbody>
                            <tr className="row1">
                                {lugares.map((e, i) => {
                                    return <Lugar lugar={e} />
                                })}
                            </tr>
                            <tr>
                                {lugaresf2.map((e, i) => {
                                    return <Lugar lugar={e} />
                                })}
                            </tr>
                            <tr>
                                {lugaresf3.map((e, i) => {
                                    return <Lugar lugar={e} />
                                })}
                            </tr>
                        </tbody>
                    </table>
                    <a
                        onClick={() => props.history.push('/reservar/clase')}
                        className="button-general"
                        type="button">
                        Reservar
                    </a>
                </div>
            </div>
            <Footer {...props} />
        </div>
    )
}
