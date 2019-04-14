import React from 'react'

import Tabs1 from './tabs1'
import Tabs3 from './tabs3'

export default props => {
    return (
        <div>
            <div className="nosotros-tabs">
                <div className="nosotros-tabs-opciones">
                    {props.tabs.map((e, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => props.setTabNosotros(e)}
                                className={
                                    props.tab === e
                                        ? 'nosotros-tabs-opcion activo'
                                        : 'nosotros-tabs-opcion'
                                }>
                                {e}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {props.tab === 'cycling' ? (
                    <Tabs1 {...props} />
                ) : props.tab === 'workout bar' ? (
                    <Tabs3 {...props} />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
