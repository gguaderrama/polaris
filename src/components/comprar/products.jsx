import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Text from '../text'

export default props => {
    const gift_form = (
        <div className="gift-form">
            <Text
                valid={props.valid_gift_name}
                message={props.message_gift_name}
                oscuro={true}
                value={props.giftName}
                onChange={props.setGiftName}
                name="Nombre"
            />
            <Text
                valid={props.valid_gift_email}
                message={props.message_gift_email}
                oscuro={true}
                value={props.giftEmail}
                onChange={props.setGiftEmail}
                name="Correo electrónico"
            />
        </div>
    )
    return (
        <div className="pack-accordion">
            <nav className="menu-acord">
                {props.productos.map((e, i) => {
                    if (props.idCategory === e.category.id) {
                        return (
                            <nav className="drop-down-menu" key={i}>
                                <input
                                    type="checkbox"
                                    className="activate"
                                    id={`accordion-${props.idCategory}-${e.id}`}
                                    name={`accordion-${props.idCategory}-${
                                        e.id
                                    }`}
                                />
                                <label
                                    htmlFor={`accordion-${props.idCategory}-${
                                        e.id
                                    }`}
                                    className="menu-title"
                                >
                                    <p>
                                        <span className="pack-price-number">
                                            ${e.price.price.toFixed(2)}{' '}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="pack-price-name">
                                            <strong> {e.name} </strong>
                                        </span>
                                    </p>
                                    <p className="price-vigencia">
                                        {e.acces
                                            ? `Vigencia de uso: ${
                                                  e.acces.validFor === 0
                                                      ? 'pago único'
                                                      : e.acces.validFor + ''
                                            }`
                                            : ''}{' '}
                                        <FontAwesomeIcon icon="chevron-right" />
                                    </p>
                                </label>
                                <div className="drop-down">
                                    <p>{e.description}</p>
                                    {props.idCategory === 2 ? gift_form : ''}
                                    <button
                                        onClick={() => {
                                            props.logged
                                                ? props.addProductShoppingCart(
                                                    e
                                                )
                                                : props.history.push('/login')
                                        }}
                                        className="button-general btn"
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </nav>
                        )
                    }
                })}
            </nav>
        </div>
    )
}
