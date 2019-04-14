import React from 'react'
import Text from '../text'
import Radio from '../radio'
import FormIntereses from './form-intereses'
import Date from '../date'

export default props => {
    return (
        <div>
            <h4>{!props.intereses ? 'Regístrate' : ''}</h4>
            {props.intereses ? (
                <FormIntereses {...props} />
            ) : (
                <div
                    className={
                        props.registrate
                            ? 'login-form-inputs registro'
                            : 'login-form-inputs'
                    }
                >
                    <Text
                        valid={props.valid_nickname_registration}
                        message={props.valid_message_form}
                        value={props.nickname}
                        name="Nickname"
                        onChange={props.setNicknameRegistro}
                        max={20}
                    />
                    <Text
                        valid={props.valid_name_registration}
                        message={props.message_name}
                        value={props.nombre}
                        name="Nombre"
                        onChange={props.setNombreRegistro}
                        max={30}
                    />
                    <Text
                        valid={props.valid_surname_registration}
                        message={props.message_surname}
                        value={props.apellido}
                        name="Apellido"
                        onChange={props.setApellidoRegistro}
                        max={50}
                    />
                    <Text
                        valid={props.valid_email_registration}
                        message={props.valid_message_correo}
                        value={props.correo}
                        name="Correo electrónico"
                        onChange={props.setCorreoRegistro}
                        max={60}
                    />
                    <Date
                        valid={props.valid_birth_registration}
                        message={props.valid_message_form}
                        onChange={props.setFechaRegistro}
                        value={props.fecha}
                    />
                    <div className="radio-valid">
                        <Radio
                            value="MASCULINO"
                            label="Masculino"
                            name="Sexo"
                            valid={props.valid_sexo}
                            checked={props.sexo}
                            message={props.valid_message_sexo}
                            onChange={props.setSexoRegistro}
                        />
                        <Radio
                            value="FEMENINO"
                            valid={props.valid_sexo}
                            label="Femenino"
                            name="Sexo"
                            message={props.valid_message_sexo}
                            checked={props.sexo}
                            onChange={props.setSexoRegistro}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
