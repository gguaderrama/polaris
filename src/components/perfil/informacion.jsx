import React from 'react'
import Text from '../text'
import Combo from '../combo'
import Alert from 'components/alerta'

export default props => {
    return (
        <div className="perfil-tabs-contenido">
            <div className="perfil-tabs-contenido-descripcion">
                <div className="contacto-form">
                    <h2>Editar Perfil</h2>
                    <Text
                        oscuro={true}
                        value={props.nombre}
                        onChange={props.setNombrePerfil}
                        disabled={true}
                        name="Nombre"
                    />
                    <Text
                        oscuro={true}
                        value={props.apellidos}
                        onChange={props.setApellidosPerfil}
                        disabled={true}
                        name="Apellidos"
                    />
                    <Text
                        oscuro={true}
                        value={props.rfc}
                        onChange={props.setRfcPerfil}
                        disabled={false}
                        max={13}
                        min={12}
                        name="RFC"
                    />
                    <Text
                        oscuro={true}
                        valid={props.valid_nickname}
                        message={props.message_nickname}
                        value={props.nickname}
                        onChange={props.setNicknamePerfil}
                        max={20}
                        name="Nickname"
                    />
                    <Text
                        oscuro={true}
                        value={props.correo}
                        onChange={props.setCorreoPerfil}
                        disabled={true}
                        name="Correo electrónico"
                    />
                    <Text
                        oscuro={true}
                        valid={props.valid_telefono}
                        message={props.message_telefono}
                        value={props.telefono === '-' ? '' : props.telefono}
                        max={12}
                        min={10}
                        onChange={props.setTelefonoPerfil}
                        name="Teléfono"
                    />
                    <Combo
                        options={props.tallas}
                        value={props.talla}
                        name="Talla de calzado"
                        onChange={props.setTallaPerfil}
                    />
                    <button
                        className="btn"
                        onClick={() => props.editarPerfil()}
                        disabled={props.consulta}
                    >
                        {props.consulta ? 'verificando' : 'actualizar'}
                    </button>
                    <button
                        className="btn"
                        onClick={() => props.setAlertChangePass()}
                        disabled={props.consulta}
                    >
                        {props.consulta ? 'verificando' : 'cambiar contraseña'}
                    </button>
                </div>
                <Alert
                    type="question"
                    visible={props.alert_change_pass}
                    handleAlert={props.setAlertChangePass}
                    onClick={props.recoverPassword}
                    title="¿Estás seguro?"
                    message={
                        'Se te enviará un correo electrónico ' +
                        'para poder modificar tu contraseña.'
                    }
                />
            </div>
        </div>
    )
}
