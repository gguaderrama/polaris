import React from 'react'
import Text from '../text'

export default props => {
    return (
        <div>
            <h4>olvidaste tu contraseña</h4>
            <p
                style={{
                    fontSize: '1em',
                    color: '#979797',
                    padding: '1em 2em'
                }}
            >
                Te volveremos a enviar un correo de confirmación
            </p>
            <div className="login-form-inputs">
                <Text
                    valid={props.valid_user_login}
                    message={props.message_user_login}
                    value={props.user}
                    name="Correo electrónico"
                    max={60}
                    onChange={props.setUserLogin}
                />
            </div>
            <p
                style={{
                    cursor: 'pointer',
                    fontSize: '0.7em',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                className=""
                onClick={props.setForgotPassword}
            >
                Iniciar sesión
            </p>
        </div>
    )
}
