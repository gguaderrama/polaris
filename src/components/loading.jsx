import React from 'react'
import loading from '../assets/load.gif'

export default props => {
    return (
        <div className="loading">
            <img src={loading} className={props.small ? 'small' : ''} />
        </div>
    )
}
