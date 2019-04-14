import React from 'react'
import Visa from '../../assets/visa.png'
import Paypal from '../../assets/paypal.png'
import American from '../../assets/american_express.png'
import Mastercard from '../../assets/mastercard.png'
import Navigation from '../../containers/navigation'
import Footer from '../footer'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation />
            <div className="product_progress">
                <br />
                <ul className="progressbar">
                    <li>Detalles del pedido</li>
                    <li className="active">Realizar pedido</li>
                    <li>Confirmación</li>
                </ul>
                <br />
            </div>
            <div className="order-details">
                <div className="order-product-list">
                    <div className="payment-icons-2">
                        <img
                            src={Mastercard}
                            className="payment-thumb"
                            alt="Mastercard"
                        />
                        <img src={Visa} className="payment-thumb" alt="Visa" />
                        <img
                            src={American}
                            className="payment-thumb"
                            alt="American Express"
                        />
                        <p>Agregar tarjeta</p>
                    </div>
                    <br />
                    <div className="payment-icons-2">
                        <img
                            src={Paypal}
                            className="payment-thumb"
                            alt="Paypal"
                        />
                    </div>
                </div>
                <div className="order-side-bar">
                    <div className="make">
                        <div className="make-description">
                            <h3>Playera en cuello redondo</h3>
                            <p>
                                Material: 47% nylon, 41% poliester, 12% spandex.
                                Lavar a mano, no usar agua fría, no usar cloro.
                                Plancha a 110. No usar secadora.
                            </p>
                        </div>
                        <div className="total-pieces">
                            <div className="two">
                                <div className="qty">1</div>
                                <div className="qty-total">
                                    <strong>$580.00</strong>
                                </div>
                            </div>
                            <div className="subtotal">
                                <p>Subtotal</p>
                                <p className="make-total">
                                    <strong>$780</strong>
                                </p>
                                <br />
                                <p>IVA 16%</p>
                                <p className="make-total">
                                    <strong>$124.80</strong>
                                </p>
                            </div>
                            <div className="total">
                                <p>Total</p>
                                <p className="make-total">
                                    <strong>$904.80</strong>
                                </p>
                            </div>
                        </div>
                        <div className="payment-button">
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                Guardar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
