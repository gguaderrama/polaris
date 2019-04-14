import React from 'react'
import Visa from 'assets/visa.png'
import American from 'assets/american_express.png'
import Mastercard from 'assets/mastercard.png'
import generica from 'assets/credit_card.png'
import Text from 'components/text'
import Combo from 'components/combo'
const meses = [
    { id: '', name: '' },
    { id: '01', name: '01' },
    { id: '02', name: '02' },
    { id: '03', name: '03' },
    { id: '04', name: '04' },
    { id: '05', name: '05' },
    { id: '06', name: '06' },
    { id: '07', name: '07' },
    { id: '08', name: '08' },
    { id: '09', name: '09' },
    { id: '10', name: '10' },
    { id: '11', name: '11' },
    { id: '12', name: '12' }
]
const anios = [
    { id: '', name: '' },
    { id: '2019', name: '2019' },
    { id: '2020', name: '2020' },
    { id: '2021', name: '2021' },
    { id: '2022', name: '2022' },
    { id: '2023', name: '2023' },
    { id: '2024', name: '2024' },
    { id: '2025', name: '2025' },
    { id: '2026', name: '2026' },
    { id: '2027', name: '2027' },
    { id: '2028', name: '2028' }
]
export default props => {
    return (
        <div className="metodo-pago-form">
            <div className="contacto-form">
                <h2>Agregar método de pago</h2>
                <img
                    src={
                        props.card_provider === 'MASTERCARD'
                            ? Mastercard
                            : props.card_provider === 'VISA'
                            ? Visa
                            : props.card_provider === 'AMEX'
                            ? American
                            : generica
                    }
                    className="payment-thumb"
                />
                <Text
                    valid={props.valid_card_holder}
                    message={props.message_card_holder}
                    oscuro={true}
                    value={props.card_holder}
                    onChange={props.setCardHolder}
                    name="Titular de la tarjeta"
                />
                <Text
                    max={props.max_card_number}
                    valid={props.valid_card_number}
                    message={props.message_card_number}
                    oscuro={true}
                    value={props.card_number}
                    onChange={props.setCardNumber}
                    onKeyPress={props.formatCardNumber}
                    name="Número de tarjeta"
                />

                <div
                    style={{
                        width: '45%',
                        display: 'inline-block',
                        marginRight: '10%'
                    }}>
                    <Combo
                        options={meses}
                        value={props.expMonth}
                        name="Mes de expiración"
                        onChange={props.setExpMonth}
                    />
                </div>
                <div style={{ width: '45%', display: 'inline-block' }}>
                    <Combo
                        options={anios}
                        value={props.expYear}
                        name="Año de expiración"
                        onChange={props.setExpYear}
                    />
                </div>
                <div style={{ width: '50%' }}>
                    <Text
                        max={props.card_verification_length}
                        valid={props.valid_card_verification}
                        message={props.message_card_verification}
                        oscuro={true}
                        value={props.cardVerification}
                        onChange={props.setCardVerification}
                        name="CVV"
                    />
                </div>
                <br/>
                <br/>
                <button
                    disabled={props.registrando}
                    onClick={() => props.saveMetodoPago()}
                    className="btn">
                    {props.registrando ? 'Registrando' : 'Agregar'}
                </button>
            </div>
        </div>
    )
}
