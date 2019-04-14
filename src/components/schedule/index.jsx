import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Calendario from './calendario'
import Combo from '../combo'

const clase = [{ id: 1, nombre: 'Cycling' }, { id: 2, nombre: 'Workout Bar' }]

const instructor = [
    { id: 1, nombre: 'Coach 1' },
    { id: 2, nombre: 'Coach 2' },
    { id: 3, nombre: 'Coach 3' },
    { id: 4, nombre: 'Coach 4' }
]

const sucursal = [
    { id: 1, nombre: 'Patriotismo' },
    { id: 2, nombre: 'Interlomas' }
]

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="clases">
                <h2>Clases disponibles</h2>
                <div className="filtros">
                    <Combo
                        options={clase}
                        value={props.clase}
                        name="Clase"
                        onChange={props.setClaseReserva}
                    />
                    <Combo
                        options={instructor}
                        value={props.instructor}
                        name="Coach"
                        onChange={props.setInstructorReserva}
                    />
                    <Combo
                        options={sucursal}
                        value={props.sucursal}
                        name="Sucursal"
                        onChange={props.setSucursalReserva}
                    />
                </div>
                <Calendario {...props} />
            </div>
            <Footer />
        </div>
    )
}
