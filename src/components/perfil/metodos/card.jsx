import React from 'react'
import Visa from 'assets/visa.png'
import American from 'assets/american_express.png'
import Mastercard from 'assets/mastercard.png'
import generica from 'assets/credit_card.png'
import close from 'assets/cancel.png'

export default props => {
    return (
        <div className="payment-cards">
            <img
                src={close}
                className="payment-cards-delete"
                onClick={() => props.deleteMetodoPago(props.data.id)}
            />
            <img
                src={
                    props.data.cardProvider === 'MASTERCARD'
                        ? Mastercard
                        : props.data.cardProvider === 'VISA'
                        ? Visa
                        : props.data.cardProvider === 'AMEX'
                        ? American
                        : generica
                }
                className="payment-thumb"
                alt="Mastercard"
            />
            <p>**** **** **** {props.data.lastFourDigits}</p>
            <p className="vencimiento">
                Fecha de vencimiento {props.data.monthValidity}/
                {props.data.yearValidity}
            </p>
            {props.conekta_count > props.data.conektaTokenPayment.length ? (
                <p className="payment-validate">requiere revalidar</p>
            ) : (
                ''
            )}
        </div>
    )
}
