import React from 'react'
import Product1 from '../../assets/tenis.png'
import Product2 from '../../assets/blusa_mujer.png'
import Product3 from '../../assets/bolsa.png'
import Product4 from '../../assets/playera_hombre.png'
import Product5 from '../../assets/backpack.png'

export default props => {
    return (
        <div className="product_grid">
            <div className="shop-tabs">
                <div className="shop-tabs-opciones">
                    <div className="shop-tabs-opcion activo">
                        Nuevos Productos
                    </div>
                    <div className="shop-tabs-opcion">Mujeres</div>
                    <div className="shop-tabs-opcion">Hombres</div>
                    <div className="shop-tabs-opcion">Accesorios</div>
                    <div className="shop-tabs-opcion">Descuentos</div>
                </div>
            </div>
            <div className="product-content">
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product4}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Playera H</h3>
                            <h4>Cuello V</h4>
                            <a className="button-general" type="button">
                                $780
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product2}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Playera M Load</h3>
                            <h4>Cuello redondo</h4>
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                $680
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product3}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Maletero</h3>
                            <h4>Bradley</h4>
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                $480
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product1}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Tenis</h3>
                            <h4>Para cycling</h4>
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                $1800
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product5}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Backpack</h3>
                            <h4>Color negro</h4>
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                $500
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="product_single"
                    onClick={() => props.history.push('/tienda/detail')}>
                    <div className="gray-back">
                        <img
                            src={Product2}
                            className="product-img"
                            alt="producto-load"
                        />
                        <div className="info-product">
                            <h3>Playera M Load</h3>
                            <h4>Cuello redondo</h4>
                            <a
                                href="#"
                                className="button-general"
                                type="button">
                                $680
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
