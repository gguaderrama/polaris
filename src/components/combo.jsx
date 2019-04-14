import React from 'react'

const Combo = props => {
    return (
        <div className="combo-container">
            <div className="mdl-selectfield">
                <label>{props.name}</label>
                <select
                    className="browser-default"
                    value={props.value}
                    onChange={props.onChange}>
                    {props.options.map((e, i) => {
                        return (
                            <option value={e.id} key={i}>
                                {e.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Combo
