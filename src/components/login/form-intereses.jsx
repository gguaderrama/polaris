import React from 'react'
import Combo from '../combo'
import Interes from './interes'
import Terminos from '../navigation/terminos'

export default props => {
    return (
        <div className="login-form-inputs registro">
            <Combo
                options={props.tallas}
                value={props.talla}
                name="Talla de calzado"
                onChange={props.setTallaRegistro}
            />
            <h4 className="no-padding">Intereses</h4>
            <ul>
                {props.opciones.map((e, i) => {
                    let setvalue = false
                    props.interests.find((o, i) => {
                        if (o.id === e.id) {
                            setvalue = true
                        }
                    })

                    return (
                        <Interes
                            {...props}
                            data={e}
                            key={i}
                            setvalue={setvalue}
                        />
                    )
                })}
            </ul>
            <label className="material-checkbox">
                <input
                    name={props.name}
                    defaultChecked={props.acepto}
                    type="checkbox"
                    onChange={() => props.setAceptoRegistro(!props.acepto)}
                />
                <span>
                    Al crear una cuenta acepto los términos y condiciones, el
                    reglamento y los avisos de privacidad de LOAD
                </span>
            </label>
            <Terminos {...props} />
        </div>
    )
}
