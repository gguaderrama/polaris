import React from 'react'
import close from 'assets/cancel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return (
        <div className="order-item">
            <div
                onClick={() =>
                    props.removeProductShoppingCart(props.producto.product.id)
                }
                className="order-item-remove"
                title="Quitar producto">
                <img src={close} alt="" />
            </div>
            <div className="order-especifications">
                <h3>
                    Categoría{' '}
                    <span>{props.producto.product.category.name}</span>
                </h3>
                <h3>
                    Producto <span>{props.producto.product.name}</span>
                </h3>
                <p>
                    {props.producto.acces
                        ? `Vigencia de uso: ${
                            props.producto.product.acces.validFor
                        } días`
                        : ''}
                </p>
                {props.producto.product.category.id === 2 ? (
                    <p>para: {props.producto.giftName}</p>
                ) : (
                    props.producto.product.id===14 ? <p>Pago único</p> :
                    <p>
                        Cantidad:
                        <FontAwesomeIcon
                            icon="minus-circle"
                            onClick={() =>
                                props.reduceProductShoppingCart(
                                    props.producto.product.id
                                )
                            }
                        />
                        {props.producto.quantity}
                        <FontAwesomeIcon
                            icon="plus-circle"
                            onClick={() =>
                                props.increaseProductShoppingCart(
                                    props.producto.product.id
                                )
                            }
                        />
                    </p>
                )}
                {props.producto.product.category.id === 2 ? (
                    <p>{props.producto.giftEmail}</p>
                ) : (
                    <p>
                        Precio unitario: ${' '}
                        {props.producto.product.price[0].price.toFixed(2)}
                    </p>
                )}
                {props.producto.product.recurringPurchase === true ? (
                    <label className="material-checkbox">
                        <input
                            name={props.name}
                            defaultChecked={props.producto.recurringPurchase}
                            type="checkbox"
                            onChange={() =>
                                props.setAceptoCargo(props.producto.product.id)
                            }
                        />
                        <span>Acepto cargo automático</span>
                    </label>
                ) : (
                    ''
                )}
            </div>
            <div className="order-btn">
                <p className="black-price">
                    ${' '}
                    {(
                        props.producto.product.price[0].price *
                        props.producto.quantity
                    ).toFixed(2)}
                </p>
            </div>
        </div>
    )
}
