import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import CoachUnoA from '../../assets/coach1-a.png'
import Alerta from 'components/alerta'
import Loading from 'components/loading'
import moment from 'moment'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            {props.loading ? (
                <Loading />
            ) : (
                <div>
                    <div className="reserva-content">
                        <div className="reserva-foto">
                            <img
                                src={CoachUnoA}
                                className="reserva-coach"
                                alt="instructor"
                            />
                        </div>
                        <div className="reserva-info">
                            <h5>{props.schedule_item.club.name}</h5>
                            <p>
                                <span className="reserva-title">
                                    {props.schedule_item.discipline.name}
                                </span>
                            </p>
                            <div className="reserva-datos">
                                <p className="name">
                                    Con {props.schedule_item.coach.name}{' '}
                                    {props.schedule_item.coach.surname}
                                </p>
                                <p className="position" />
                                <p className="class-sel">
                                    Lugar {props.match.params.lugar}
                                </p>
                            </div>
                            <p className="description">
                                <ul>
                                    <li>
                                        Llega 10 minutos antes de tu clase.{' '}
                                    </li>
                                    <li>
                                        Elige ropa adecuada, los zapatos serán
                                        proporcionados en el estudio.{' '}
                                    </li>
                                    <li>
                                        Recuerda pedir apoyo a los anfitriones
                                        para que te ayuden a acomodar tu bici y
                                        así evitar lesiones y accidentes.{' '}
                                    </li>
                                    <li>
                                        Hidrátate bien antes y durante de la
                                        clase.
                                    </li>
                                    <li>
                                        Evita comer alimentos pesados antes de
                                        tomar la clase.
                                    </li>
                                    <li>
                                        Realiza estiramientos de forma correcta
                                        al terminar la clase.{' '}
                                    </li>
                                </ul>
                                En caso de que reserves tu clase y no puedas
                                asistir, podrás cancelar tu clase con 12 horas
                                de anticipación. En caso de que no sea así se te
                                generará un cargo de $50.00 ya que el hecho
                                de que no asistas evita que algún otro miembro
                                pueda asistir a su clase.
                            </p>
                            <div className="reserva-date">
                                <div className="hours">
                                    {moment(props.schedule_item.atDay).format(
                                        'll'
                                    )}
                                </div>
                                <div className="date">
                                    {props.schedule_item.atTime} hrs
                                </div>
                                <div className="reservar">
                                    <button
                                        className="button-inverse"
                                        onClick={() =>
                                            props.bookingSchedule(
                                                props.match.params.id,
                                                props.match.params.lugar
                                            )
                                        }>
                                        Continuar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}
