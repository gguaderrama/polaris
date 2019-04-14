import React from 'react'

const Check = props => {
    return (
        <div>
            <label className="material-checkbox">
                <input
                    name={props.name}
                    type="radio"
                    value={props.value}
                    checked={props.value === props.checked ? true : false}
                    onChange={e => props.onChange(e)}
                />
                <span>{props.label}</span>
            </label>
            {props.valid ? (
                <span className="info-text">{props.message}</span>
            ) : (
                ''
            )}
        </div>
    )
}

export default Check
