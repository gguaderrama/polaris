import React from 'react'
import Product from './product'
import Visa from 'assets/visa.png'
import American from 'assets/american_express.png'
import Mastercard from 'assets/mastercard.png'
import Navigation from '../../containers/navigation'
import generica from 'assets/credit_card.png'
import Footer from '../footer'
import Alert from 'components/alerta'
import Text from '../text'
import Loading from '../loading'

export default props => {
    let imagen = e => {
        return e.cardProvider === 'MASTERCARD'
            ? Mastercard
            : e.cardProvider === 'VISA'
            ? Visa
            : e.cardProvider === 'AMEX'
            ? American
            : ''
    }
    let message_membership =
        'Si eliminas el producto de membresía, se eliminará tambien ' +
        'el producto Load Mensual o Load Trimestral, ¿Deseas eliminarlo?'
    let message_modal_2 =
        'Si no incluyes dato RFC se facturará como venta' +
        ' al público en general'
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation />
            <Alert
                type="question"
                visible={props.modal_membership}
                handleAlert={() => props.closeModalMembresia()}
                title="¿Estás seguro?"
                message={message_membership}
                onClick={props.deleteProductsDays}
            />
            <Alert
                type="check"
                visible={props.modal}
                handleAlert={() => props.closeModalCompras()}
                title="Compra exitosa"
                message="Se ha realizado correctamente tu compra"
            />
            <Alert
                type="exclamation"
                visible={props.modal_membershiptwo}
                handleAlert={() => props.closeModalMembresiaTwo()}
                title="Atención"
                message={message_modal_2}
            />
            <div className="order-details">
                <div className="order-product-list">
                    {props.loading ? (
                        <Loading />
                    ) : (
                        <div className="order-product-container">
                            {props.shoppingCart.orderItems.map((e, i) => {
                                return (
                                    <Product {...props} producto={e} key={i} />
                                )
                            })}
                        </div>
                    )}
                </div>
                <div className="order-side-bar">
                    <div className="payment">
                        <h3>Finalizar compra</h3>
                        <p>Pagar con:</p>
                        {props.metodos.map((e, i) => {
                            return (
                                <label
                                    htmlFor={`metodo-${e.id}`}
                                    key={i}
                                    onClick={() =>
                                        props.conekta_count >
                                        e.conektaTokenPayment.length
                                            ? props.newMetodoPago()
                                            : props.setMetodoPagoCompras(e.id)
                                    }
                                >
                                    <div className="payment-cards">
                                        <img
                                            src={imagen(e)}
                                            className="payment-thumb"
                                            alt="Mastercard"
                                        />
                                        <p>terminación {e.lastFourDigits}</p>
                                        <p className="vencimiento">
                                            vencimiento {e.monthValidity}/
                                            {e.yearValidity}
                                        </p>
                                        {props.conekta_count >
                                        e.conektaTokenPayment.length ? (
                                            <p className="payment-validate">
                                                requiere revalidar
                                            </p>
                                        ) : (
                                            <input
                                                type="radio"
                                                name="metodo-pago"
                                                id={`metodo-${e.id}`}
                                            />
                                        )}
                                    </div>
                                </label>
                            )
                        })}
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
                        <div className="make">
                            <div className="total-pieces">
                                <div className="subtotal">
                                    <p>Subtotal</p>
                                    <p className="make-total">
                                        <strong>
                                            $ {props.subtotal.toFixed(2)}
                                        </strong>
                                    </p>
                                    <br />
                                    <p>IVA {props.impuesto}%</p>
                                    <p className="make-total">
                                        <strong>
                                            $ {props.impuestos.toFixed(2)}
                                        </strong>
                                    </p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <p className="make-total">
                                        <strong>
                                            $ {props.total.toFixed(2)}
                                        </strong>
                                    </p>
                                </div>
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
                            <div className="payment-button">
                                <button
                                    onClick={() => props.payShoppingCart()}
                                    className="button-general btn"
                                    disabled={
                                        props.loading
                                            ? props.loading
                                            : props.consulta
                                    }
                                >
                                    {props.loading
                                        ? 'cargando'
                                        : props.consulta
                                        ? 'procesando'
                                        : 'pagar'}
                                </button>
                                <button
                                    className="btn"
                                    style={{ width: '100%' }}
                                    onClick={() =>
                                        props.history.push('/comprar')
                                    }
                                >
                                    seguir comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
