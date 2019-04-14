import React from 'react'
import Navigation from '../../containers/navigation'
import Tabs from './tabs'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="legal-nav">
                <Tabs {...props} />
            </div>
        </div>
    )
}
