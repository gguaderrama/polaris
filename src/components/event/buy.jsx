import React from 'react'
// import Product from './product'
import Visa from 'assets/visa.png'
import American from 'assets/american_express.png'
import Mastercard from 'assets/mastercard.png'
import generica from 'assets/credit_card.png'
import moment from 'moment'
import Alert from 'components/alerta'
import Text from '../text'
import Loading from '../loading'

export default props => {
    let precio = props.event.product.price[0].price
    let padi = precio / 1.16
    let iva = precio - padi
    let imagen = e => {
        return e.cardProvider === 'MASTERCARD'
            ? Mastercard
            : e.cardProvider === 'VISA'
            ? Visa
            : e.cardProvider === 'AMEX'
            ? American
            : ''
    }
    return (
        <div>
            <Alert
                type="check"
                visible={props.alert}
                handleAlert={() => props.setEventAlert()}
                title="Compra exitosa"
                message="Se ha realizado correctamente tu compra"
            />
            <div className="order-details">
                <div className="order-product-list">
                    <div className="order-product-container">
                        <div className="order-item">
                            <div className="order-especifications">
                                <h3>
                                    Evento <span>{props.event.name}</span>
                                </h3>
                                <h3>
                                    {moment(props.event.atDay).format(
                                        'DD-MM-YYYY'
                                    )}{' '}
                                    <span>{props.event.atTime} hrs.</span>
                                </h3>
                                <p>Club: {props.event.club.name}</p>
                                <p>
                                    Duración: {props.event.durationTime} mins.
                                </p>
                            </div>
                            <div className="order-btn">
                                <p className="black-price">
                                    $ {precio.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-side-bar">
                    <div className="payment">
                        <h3>Finalizar {precio === 0 ? 'reserva' : 'compra'}</h3>
                        {precio === 0 ? '' : <p>Pagar con:</p>}
                        {precio === 0
                            ? ''
                            : props.metodos.map((e, i) => {
                                return (
                                    <label htmlFor={`metodo-${e.id}`} key={i}>
                                        <div className="payment-cards">
                                            <img
                                                src={imagen(e)}
                                                className="payment-thumb"
                                                alt="Mastercard"
                                            />
                                            <p>
                                                  terminación {e.lastFourDigits}
                                            </p>
                                            <p className="vencimiento">
                                                  vencimiento {e.monthValidity}/
                                                {e.yearValidity}
                                            </p>
                                            <input
                                                type="radio"
                                                name="metodo-pago"
                                                id={`metodo-${e.id}`}
                                                onClick={() =>
                                                    props.setMetodoPagoCompras(
                                                        e.id
                                                    )
                                                }
                                            />
                                        </div>
                                    </label>
                                )
                            })}
                        {precio === 0 ? (
                            <div />
                        ) : (
                            <div
                                className="payment-cards"
                                style={{ cursor: 'pointer' }}
                                onClick={() => props.newMetodoPago()}
                            >
                                <img
                                    src={generica}
                                    className="payment-thumb"
                                    alt="Mastercard"
                                />
                                <p>Agregar nuevo método de pago</p>
                            </div>
                        )}
                        <div className="make">
                            <div className="total-pieces">
                                <div className="subtotal">
                                    <p>Subtotal</p>
                                    <p className="make-total">
                                        <strong>$ {padi.toFixed(2)}</strong>
                                    </p>
                                    <br />
                                    <p>
                                        IVA {props.event.product.price[0].tax}%
                                    </p>
                                    <p className="make-total">
                                        <strong>$ {iva.toFixed(2)}</strong>
                                    </p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <p className="make-total">
                                        <strong>$ {precio.toFixed(2)}</strong>
                                    </p>
                                </div>
                                <Text
                                    oscuro={true}
                                    value={props.code}
                                    onChange={props.setCodePromo}
                                    disabled={false}
                                    name="Código de promoción"
                                />
                                <Text
                                    oscuro={true}
                                    value={props.rfc}
                                    onChange={props.setShoppingCartRfc}
                                    disabled={false}
                                    name="RFC"
                                />
                            </div>
                            <div className="payment-button">
                                <button
                                    onClick={() => props.payEvent(props.event)}
                                    className="button-general btn"
                                    disabled={
                                        props.loading
                                            ? props.loading
                                            : props.query
                                    }
                                >
                                    {props.loading
                                        ? 'cargando'
                                        : props.query
                                        ? 'procesando'
                                        : precio === 0
                                        ? 'reservar'
                                        : 'pagar'}
                                </button>
                                <button
                                    className="btn"
                                    style={{ width: '100%' }}
                                    onClick={() => props.returnEventList()}
                                >
                                    regresar a eventos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
