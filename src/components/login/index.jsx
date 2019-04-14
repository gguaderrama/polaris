import React from 'react'
import Navigation from '../../containers/navigation'
import Form from './form'
import Logo from '../../assets/negro1.png'

export default props => {
    return (
        <div
            className={
                props.visible ? 'container-login-v2 menu' : 'container-login-v2'
            }>
            <Navigation {...props} />
            <Form {...props} />
            <img
                className={
                    props.registrate ? 'circle-logo registro' : 'circle-logo'
                }
                src={Logo}
                alt=""
            />
            <div className={props.registrate ? 'circle registro' : 'circle'} />
        </div>
    )
}
