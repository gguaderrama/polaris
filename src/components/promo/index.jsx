import React from 'react'
import Promo from 'assets/Promo-Load.jpg'
import CloseW from 'assets/cancel-w.png'

export default props => {
    console.log('======================================')
    console.log(props.promo)
    console.log('======================================')
    return (
        <div className={props.promo ? 'load-promo' : 'load-promo hide'}>
            <div className="container-promo">
                <img
                    src={CloseW}
                    alt="close"
                    className="promo-close"
                    onClick={() => props.closePromoModal()}
                />
                <img src={Promo} alt="load promo" className="promo-img" />
            </div>
        </div>
    )
}
