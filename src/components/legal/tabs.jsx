import React from 'react'

import Privacidad from './privacidad'
import Terminos from './terminos'
import Reglamento from './reglamento'
import PrivacidadClientes from './privacidad-clientes'

export default props => {
    return (
        <div>
            <div className="legal-tabs">
                <div className="legal-tabs-opciones">
                    {props.tabs.map((e, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => props.setTabLegal(e)}
                                className={
                                    props.tab === e
                                        ? 'legal-tabs-opcion activo'
                                        : 'legal-tabs-opcion'
                                }
                            >
                                {e}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {props.tab === 'aviso de privacidad uso de APP' ? (
                    <Privacidad {...props} />
                ) : props.tab === 'aviso de privacidad clientes' ? (
                    <PrivacidadClientes {...props} />
                ) : props.tab === 'términos y condiciones' ? (
                    <Terminos {...props} />
                ) : props.tab === 'reglamento' ? (
                    <Reglamento {...props} />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
