import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Loading from 'components/loading'
import Event from './event'
import Buy from './buy'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            {props.loading ? (
                <Loading />
            ) : props.view === 'list' ? (
                <div className="events">
                    {props.events.map((e, i) => {
                        return <Event item={e} {...props} key={i} />
                    })}
                </div>
            ) : (
                <Buy {...props} />
            )}
            <Footer {...props} />
        </div>
    )
}
