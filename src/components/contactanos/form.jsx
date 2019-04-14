import React from 'react'
import Text from '../text'
import Area from '../textarea'
import Terminos from '../navigation/terminos'

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (!this.isMyScriptLoaded()) {
            const script = document.createElement('script')
            script.src = 'https://www.google.com/recaptcha/api.js'
            script.async = true
            document.body.appendChild(script)
        }
    }
    isMyScriptLoaded() {
        let url = 'https://www.google.com/recaptcha/api.js'
        let scripts = document.getElementsByTagName('script')
        for (let i = scripts.length; i--;) {
            if (scripts[i].src == url) return true
        }
        return false
    }
    render() {
        return (
            <div className="contacto-form">
                <Text
                    oscuro={true}
                    valid={this.props.valid_nombre}
                    message={this.props.message_nombre}
                    value={this.props.nombre_contact}
                    name="Nombre"
                    max={50}
                    onChange={this.props.setNameContact}
                />
                <Text
                    oscuro={true}
                    valid={this.props.valid_surname}
                    message={this.props.message_surname}
                    value={this.props.surname}
                    name="Apellido"
                    max={30}
                    onChange={this.props.setSurnameContact}
                />
                <Text
                    oscuro={true}
                    valid={this.props.valid_email}
                    message={this.props.message_email}
                    value={this.props.email}
                    name="Correo electrónico"
                    max={50}
                    onChange={this.props.setEmailContact}
                />
                <Area
                    oscuro={true}
                    valid={this.props.valid_mensaje}
                    message={this.props.message_mensaje}
                    value={this.props.mensaje}
                    name="Correo"
                    max={15}
                    onChange={this.props.setMessageContact}
                    name="Mensaje"
                />
                <br />
                <label className="material-checkbox">
                    <input
                        type="radio"
                        checked={this.props.confirm}
                        onClick={this.props.setTerminosContact}
                    />
                    <span>Acepto aviso de privacidad</span>
                </label>
                <Terminos {...this.props} />
                <br />
                <div
                    className="g-recaptcha"
                    data-sitekey="6LcEAIMUAAAAANQ9OMN1VEtkzzzL4F_yGpMqMuzU"
                />
                <button
                    style={{ minWidth: '100%' }}
                    className="btn"
                    onClick={() => this.props.saveContact()}>
                    enviar
                </button>
            </div>
        )
    }
}

export default Form