import React from 'react'
import FormLogin from './form-login'
import FormRegistro from './form-registro'
import FormForgot from './form-forgot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alert from 'components/alerta'

export default props => {
    return (
        <div>
            <Alert
                type="check"
                {...props}
                visible={props.modal}
                handleAlert={() => props.toggleModalRegistro()}
                title="¡Registro exitoso!"
                message={
                    'Felicidades ya eres parte de la familia LOAD. ' +
                    'Revisa tu correo electrónico para continuar tu registro.'
                }
            />
            <Alert
                type="check"
                {...props}
                visible={props.modal_forgot_password}
                handleAlert={() => props.toggleModalForgotPassword()}
                title="¡Envío de correo!"
                message={
                    'Se enviará una liga de recuperación ' +
                    'al correo indicado.'
                }
            />
            <div
                className={
                    props.registrate ? 'login-form registro' : 'login-form'
                }
            >
                {props.registrate ? (
                    <FormRegistro {...props} />
                ) : props.forgot_password ? (
                    <FormForgot {...props} />
                ) : (
                    <FormLogin {...props} />
                )}
                <button
                    disabled={props.consulta}
                    onClick={() => {
                        !props.registrate
                            ? props.forgot_password
                                ? props.sendForgotPassword()
                                : props.login()
                            : props.intereses
                            ? props.registro()
                            : props.changeFormIntereses()
                    }}
                    className={
                        props.registrate
                            ? 'login-boton registrate'
                            : 'login-boton'
                    }
                >
                    {props.registrate
                        ? props.intereses
                            ? props.consulta
                                ? 'verificando'
                                : 'finalizar'
                            : 'siguiente'
                        : props.forgot_password
                        ? props.query_forgot_password
                            ? 'enviando'
                            : 'restablecer'
                        : props.consulta
                        ? 'verificando'
                        : 'inicia sesión'}
                </button>
                <div
                    className={`registro-back ${props.intereses ? '' : 'hide'}`}
                >
                    <FontAwesomeIcon
                        icon={['far', 'arrow-alt-circle-left']}
                        onClick={() => props.changeFormIntereses()}
                    />
                </div>
                <p className="login-form-miembro">
                    {props.registrate
                        ? '¿Ya eres miembro? '
                        : '¿Aún no eres miembro? '}
                    <span onClick={() => props.changeFormLogin()}>
                        {props.registrate ? 'Inicia sesión' : 'Regístrate'}
                    </span>
                </p>
            </div>
        </div>
    )
}
