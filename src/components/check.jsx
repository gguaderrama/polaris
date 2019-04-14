import React from 'react'

const Check = props => {
    return (
        <label className="material-checkbox">
            <input
                name={props.name}
                type="checkbox"
                checked={props.value}
                onChange={() => props.onChange()}
            />
            <span>{props.label}</span>
        </label>
    )
}

export default Check
