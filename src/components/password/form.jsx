import React from 'react'
import Text from '../text'
import HeadModal from '../../assets/head-modal.png'
import Alert from 'components/alerta'

export default props => {
    return (
        <div>
            <div className={`modal ${props.modal ? '' : 'hide'}`}>
                <div className="inner-modal">
                    <div className="header-modal">
                        <img
                            src={HeadModal}
                            className="img-head"
                            alt="instructor"
                        />
                    </div>
                    <div className="info-modal">
                        <p>REGISTRO EXITOSO estra aqui</p>
                        <p>
                            Se ha concluido satisfactoriamente tu Registro, te
                            invitamos a accesar a la Aplicación
                        </p>
                        <a
                            onClick={() => props.toggleModalPassword()}
                            className="button-general"
                            type="button"
                        >
                            Continuar
                        </a>
                    </div>
                </div>
            </div>
            <Alert
                type="check"
                visible={props.alert_password_confirm}
                handleAlert={() => props.redirectLogin()}
                title={
                    props.modal_value === '1'
                        ? '¡Registro exitoso!'
                        : ' ¡Actualización exitosa!'
                }
                message={
                    props.modal_value === '1'
                        ? 'Se ha concluido satisfactoriamente tu registro, ' +
                          'te invitamos a accesar a la aplicación'
                        : ' Se ha actualizado tu contraseña satisfactoriamente'
                }
            />
            <div className="login-form pass">
                <h4>Ingresa tu contraseña</h4>
                <div className="login-form-inputs">
                    <Text
                        type="password"
                        valid={props.validcharacters}
                        message={props.message_characters}
                        value={props.pass}
                        name="Contraseña"
                        max={15}
                        onChange={props.setPassPassword}
                    />
                    <Text
                        type="password"
                        value={props.confirmar}
                        valid={props.confirm}
                        message={props.message_confirm}
                        name="Confirmar contraseña"
                        max={15}
                        onChange={props.setConfirmarPassword}
                    />
                </div>
                <ul className="login-form-pass-val">
                    <li>Debe de tener al menos una minúscula</li>
                    <li>Una mayúscula</li>
                    <li>Un número</li>
                    <li>8 caracteres como mínimo</li>
                    <li>15 caracteres como máximo</li>
                </ul>
                <button
                    disabled={props.consulta}
                    onClick={() => props.setEnviar()}
                    className="login-boton"
                >
                    {props.consulta ? 'verificando' : 'enviar'}
                </button>
            </div>
        </div>
    )
}
