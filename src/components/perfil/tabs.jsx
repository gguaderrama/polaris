import React from 'react'

import Informacion from './informacion'
import Proximas from './proximas'
import Pasadas from './pasadas'
import Historial from './historial'
import Metodos from './metodos'

export default props => {
    return (
        <div>
            <div className="perfil-tabs">
                <div className="perfil-tabs-opciones">
                    {props.tabs.map((e, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => props.setTabPerfil(e)}
                                className={
                                    props.tab === e
                                        ? 'perfil-tabs-opcion activo'
                                        : 'perfil-tabs-opcion'
                                }>
                                {e}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {props.tab === 'perfil' ? (
                    <Informacion {...props} />
                ) : props.tab === 'próximas clases' ? (
                    <Proximas {...props} />
                ) : props.tab === 'historial de clases' ? (
                    <Pasadas {...props} />
                ) : props.tab === 'historial de compras' ? (
                    <Historial {...props} />
                ) : props.tab === 'métodos de pago' ? (
                    <Metodos {...props} />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
