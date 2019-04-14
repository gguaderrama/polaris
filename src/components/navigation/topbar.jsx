import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart from 'assets/cart.png'
import User from 'assets/user1.png'
import NavLogo2 from 'assets/blanco2.png'
import loading from '../../assets/load.gif'

export default props => {
    return (
        <div className="topbar">
            <div onClick={() => props.toggle()} className="topbar-menu-icon">
                <FontAwesomeIcon icon="bars" />
            </div>
            <div className="topbar-menu-text" />
            {props.active !== '/' ? (
                <img
                    src={NavLogo2}
                    alt="Load, logotipo"
                    className="nav-logo"
                    onClick={() => props.navigate({ seccion: '/' })}
                />
            ) : (
                ''
            )}
            <div className="top-right">
                <div
                    className="log"
                    onClick={() => {
                        props.logged
                            ? props.navigate({ seccion: '/perfil' })
                            : props.navigate({ seccion: '/login' })
                    }}
                >
                    {props.logged ? (
                        <div className="tooltip">
                            <p onClick={() => props.logOut()}>Cerrar sesión</p>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="topbar-shopping-icon">
                        {props.logged ? (
                            props.avatar === 'data:;base64,IA==' ||
                            props.avatar === '' ? (
                                <img src={User} alt="load user" />
                            ) : (
                                <img
                                    src={props.avatar}
                                    className="avatar-topbar"
                                    alt="load user"
                                />
                            )
                        ) : (
                            <img src={User} alt="load user" />
                        )}
                    </div>
                </div>
                <div
                    className="cart"
                    onClick={() => {
                        props.loading
                            ? ''
                            : props.logged
                            ? props.shopping_cart_count
                                ? props.navigate({ seccion: '/carrito' })
                                : props.navigate({ seccion: '/comprar' })
                            : props.navigate({ seccion: '/login' })
                    }}
                >
                    <div className="topbar-shopping-icon">
                        {props.loading ? (
                            <FontAwesomeIcon icon="spinner" />
                        ) : (
                            <img
                                className={props.shake ? 'shake' : ''}
                                src={Cart}
                                alt="shopping-cart"
                            />
                        )}
                        {props.loading ? (
                            ''
                        ) : props.shopping_cart_count ? (
                            <div className="shopping-cart-contador">
                                {props.shopping_cart_count}
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
