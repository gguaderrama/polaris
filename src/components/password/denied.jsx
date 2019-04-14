import React from 'react'

export default props => {
    return (
        <div>
            <div className="login-form pass">
                <h4>Esta liga ya no es válida</h4>
                <p style={{ padding: '30px 20px' }}>
                    Si necesitas modificar tu contraseña visita la sección de
                    Perfil
                </p>
                <a href="/">
                    <button className="login-boton">dirigete a LOAD</button>
                </a>
            </div>
        </div>
    )
}
