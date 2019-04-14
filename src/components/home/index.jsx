import React from 'react'
import Navigation from '../../containers/navigation'
import Columns from './columns_bottom'
import Logo from '../../assets/blanco1.png'
import Promo from '../../containers/promo'

export default props => {
    return (
        <div
            className={
                props.visible
                    ? 'container-login-slide menu'
                    : 'container-login-slide'
            }>
            {/* <Promo {...props} /> */}
            <div
                className={`home-background banner-${
                    props.banner === 'load'
                        ? 'load'
                        : props.banner === 'bicy'
                        ? 'cycling'
                        : props.banner === 'work'
                        ? 'workout'
                        : ''
                }`}
            />
            <img src={Logo} alt="LOAD" className="home-logo" />
            <p className="coworking">Lounging areas</p>
            <Navigation {...props} />
            <Columns {...props} />
        </div>
    )
}
