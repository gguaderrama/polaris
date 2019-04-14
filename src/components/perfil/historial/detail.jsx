import React from 'react'
import moment from 'moment'
import md5 from 'md5'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ detalleCompra, setDetalleHistorialCompras }) => {
    let conekta = detalleCompra.conektaTransaction
    let order = detalleCompra.orderProduct
    return (
        <div className="historial-details">
            <FontAwesomeIcon
                icon={['far', 'arrow-alt-circle-left']}
                onClick={() => setDetalleHistorialCompras(false)}
            />
            <div className="historial-product-list">
                <h2>
                    Detalles de tu compra
                    <br />
                    {conekta.code}
                </h2>
                <h3>{moment(conekta.createdAt).format('LLLL')}</h3>
                <div className="historial-single">
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Unitario</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.orderItems.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="historial-product">
                                            {e.product.name}
                                        </td>
                                        <td className="historial-product">
                                            {e.quantity}
                                        </td>
                                        <td className="historial-price">
                                            $ {e.unitary}
                                        </td>
                                        <td className="historial-price">
                                            $ {e.amount}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr className="historial-total">
                                <td className="historial-product">
                                    <p>
                                        <strong>Subtotal</strong>
                                    </p>
                                </td>
                                <td className="historial-price">
                                    <p>$ {order.subTotal.toFixed(2)}</p>
                                </td>
                            </tr>
                            <tr className="historial-total">
                                <td className="historial-product">
                                    <p>
                                        <strong>Descuento</strong>
                                    </p>
                                </td>
                                <td className="historial-price">
                                    <p>
                                        ${' '}
                                        {(order.total - conekta.amount).toFixed(
                                            2
                                        )}
                                    </p>
                                </td>
                            </tr>
                            <tr className="historial-total">
                                <td className="historial-product">
                                    <p>
                                        <strong>Impuestos</strong>
                                    </p>
                                </td>
                                <td className="historial-price">
                                    <p>$ {order.totalTaxes.toFixed(2)}</p>
                                </td>
                            </tr>
                            <tr className="historial-total">
                                <td className="historial-product">
                                    <p>
                                        <strong>TOTAL</strong>
                                    </p>
                                </td>
                                <td className="historial-price">
                                    <p>$ {conekta.amount.toFixed(2)}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="historial-side-bar">
                <p>
                    {conekta.paymentConekta.card_provider} {'Tarjeta'} terminada
                    en {conekta.paymentConekta.lastFourDigits}
                </p>
                <p>Pago total ($ {conekta.amount.toFixed(2)})</p>
                <p>Compra: {conekta.code}</p>
                <p>Acreditado el {moment(conekta.createdAt).format('LLL')}</p>
            </div>
        </div>
    )
}
