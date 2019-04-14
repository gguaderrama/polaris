import React from 'react'
import Form from './form'
import Denied from './denied'
import Logo from 'assets/negro1.png'
import Loading from './loading'

export default props => {
    return (
        <div
            className={
                props.visible ? 'container-login-v2 menu' : 'container-login-v2'
            }>
            {props.loading ? (
                <Loading />
            ) : props.valid ? (
                <Form {...props} />
            ) : (
                <Denied {...props} />
            )}
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
