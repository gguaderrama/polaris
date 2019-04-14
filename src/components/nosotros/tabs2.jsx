import React from 'react'

import Imagen3 from '../../assets/load-best-mode.jpg'
import Cart from '../../assets/cart.png'

export default props => {
    return (
        <div className="nosotros-tabs-contenido">
            <div className="nosotros-tabs-contenido-imagen">
                <img src={Imagen3} alt="Load, Best Mode" />
            </div>
            <div className="nosotros-tabs-contenido-descripcion">
                <h2>beast mode lab</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    nostrum beatae voluptate porro eius ab unde animi? Assumenda
                    rerum quas ipsam distinctio inventore incidunt laudantium
                    magni. Sapiente blanditiis recusandae non! Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Fuga nesciunt
                    blanditiis, illum provident ea eligendi similique nobis
                    vero! Eveniet nemo ipsa sequi corrupti explicabo laboriosam
                    architecto alias, unde aspernatur officia.
                </p>
                <h4>caracteristicas para beast mode lab</h4>
                <div className="nosotros-tabs-contenido-caracteristicas">
                    <img src={Cart} alt="shopping-cart" />
                    <img src={Cart} alt="shopping-cart" />
                    <img src={Cart} alt="shopping-cart" />
                    <img src={Cart} alt="shopping-cart" />
                </div>
            </div>
        </div>
    )
}
