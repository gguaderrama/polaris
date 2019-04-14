import React from 'react'
import Text from '../text'

export default props => {
    return (
        <div>
            <h4>iniciar sesión</h4>
            <div className="login-form-inputs">
                <Text
                    valid={props.valid_user_login}
                    message={props.message_user_login}
                    value={props.user}
                    name="Correo electrónico"
                    max={60}
                    auto={true}
                    onChange={props.setUserLogin}
                />
                <Text
                    valid={props.valid_pass_login}
                    message={props.message_pass_login}
                    onKeyPress={props.enterPassLogin}
                    type="password"
                    value={props.pass}
                    name="Contraseña"
                    max={15}
                    auto={true}
                    onChange={props.setPassLogin}
                />
            </div>
            <p
                className="login-form-olvidaste"
                onClick={props.setForgotPassword}
            >
                ¿Olvidaste tu contraseña?
            </p>
        </div>
    )
}
