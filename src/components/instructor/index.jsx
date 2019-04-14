import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Loading from 'components/loading'
import Detail from './detail'
import Schedule from './schedule'

export default props => {
    return (
        <div
            className={
                props.visible ? 'container-login menu' : 'container-login'
            }>
            <Navigation {...props} />
            {props.loading ? <Loading /> : <Detail {...props} />}
            {props.loading ? <Loading small={true} /> : <Schedule {...props} />}
            <Footer {...props} />
        </div>
    )
}
