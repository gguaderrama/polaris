import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Products from './catalog_products'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <Products {...props} />
            <Footer />
        </div>
    )
}
