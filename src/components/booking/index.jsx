import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Calendario from './calendario'
import Combo from '../combo'
import Loading from 'components/loading'
import ArrowLeft from '../../assets/arrow_coach_left.png'
import ArrowRight from '../../assets/arrow_coach_right.png'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="clases">
                <h2>Clases disponibles</h2>
                <div className="filtros">
                    <Combo
                        options={props.clases}
                        value={props.clase}
                        name="Clase"
                        onChange={props.setClaseSchedule}
                    />
                    <Combo
                        options={props.instructores}
                        value={props.instructor}
                        name="Coach"
                        onChange={props.setInstructorSchedule}
                    />
                    <Combo
                        options={props.sucursales}
                        value={props.sucursal}
                        name="Sucursal"
                        onChange={props.setSucursalSchedule}
                    />
                </div>
                {props.loadingCalendar ? (
                    <Loading />
                ) : (
                    <div className="hidden-calendar">
                        {/* <div className="arr-right">
                            <img
                                src={ArrowRight}
                                alt="load arrow right"
                                className="arrow"
                            />
                        </div> */}
                        <Calendario {...props} />
                    </div>
                )}
            </div>
            <Footer {...props} />
        </div>
    )
}
