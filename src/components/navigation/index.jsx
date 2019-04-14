import React from 'react'
import Menu from './menu'
import Topbar from './topbar'

export default props => {
    return (
        <div>
            <Topbar {...props} />
            <Menu {...props} />
        </div>
    )
}
