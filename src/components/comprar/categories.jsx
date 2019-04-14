import React from 'react'
import Product from './products'

export default props => {
    return (
        <div>
            {props.categorias.map((e, i) => {
                if (e.name !== 'Eventos') {
                    return (
                        <div key={i}>
                            <div className="pack_page">
                                <div className="pack-line" />
                                <div className="pack-titulo">
                                    <h2>{e.name}</h2>
                                </div>
                                <Product {...props} idCategory={e.id} />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
