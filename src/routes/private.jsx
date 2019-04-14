import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, ...rest }) => {
    let accessToken = sessionStorage.getItem('access_token')
    return (
        <Route
            {...rest}
            render={props =>
                accessToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/'
                        }}
                    />
                )
            }
        />
    )
}
