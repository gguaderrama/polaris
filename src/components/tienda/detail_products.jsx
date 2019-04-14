import React from 'react'
import Producto1 from 'assets/playera-hombre-gallery.png'
import Producto1a from 'assets/thumb-playera-hombre-n.png'
import Producto1b from 'assets/thumb-playera-hombre-g.png'
import Producto1c from 'assets/thumb-playera-hombre-b.png'
import Navigation from '../../containers/navigation'
import Footer from '../footer'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="product_detail">
                <div className="product_galery">
                    <img
                        src={Producto1}
                        className="galery-single"
                        alt="Playera para hombre cuello redondo"
                    />
                    <div className="product_thumbs">
                        <img
                            src={Producto1a}
                            className="galery-thumb"
                            alt="Playera para hombre cuello redondo"
                        />
                        <img
                            src={Producto1b}
                            className="galery-thumb"
                            alt="Playera para hombre cuello redondo"
                        />
                        <img
                            src={Producto1c}
                            className="galery-thumb"
                            alt="Playera para hombre cuello redondo"
                        />
                    </div>
                </div>
                <div className="product_info">
                    <div className="product_inner">
                        <h2>Playera en cuello redondo</h2>
                        <p className="black-price">$780</p>
                        <br />
                        <h3>Size</h3>
                        <div className="sizes">
                            <p>XXS</p>
                        </div>
                        <div className="sizes">
                            <p>XS</p>
                        </div>
                        <div className="sizes">
                            <p>S</p>
                        </div>
                        <div className="sizes">
                            <p>M</p>
                        </div>
                        <div className="sizes">
                            <p>L</p>
                        </div>
                        <div className="sizes">
                            <p>XL</p>
                        </div>
                        <div className="sizes">
                            <p>XXL</p>
                        </div>
                        <br />
                        <h3>Detalles</h3>
                        <p>
                            Material: 47% nylon, 41% poliester, 12% spandex.
                            Lavar a mano, no usar agua fría, no usar cloro.
                            Plancha a 110. No usar secadora.
                        </p>
                        <h3>Cantidad</h3>
                        <br />
                        <a
                            onClick={() =>
                                props.history.push('/tienda/detail/carrito')
                            }
                            className="button-general"
                            type="button">
                            Agregar
                        </a>
                    </div>
                </div>
            </div>
            <Footer {...props} />
        </div>
    )
}
