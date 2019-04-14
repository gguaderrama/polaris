import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Video from './video'
import Quienes from './quienes'
import Tabs from './tabs'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <Video {...props} />
            <Quienes {...props} />
            <Tabs {...props} />
            <Footer {...props} />
        </div>
    )
}
