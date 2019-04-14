import React from 'react'
import Redes from './redes'
import Close from 'assets/cancel.png'

export default props => {
    return (
        <div className={props.visible ? 'navigation abierto' : 'navigation'}>
            <div onClick={() => props.toggle()} className="navigation-close">
                <img src={Close} alt="" />
            </div>
            <ul>
                {props.menu.map((elem, index) => {
                    if (props.logged && elem.seccion === '/login') {
                        return
                    } else if (!props.logged && elem.seccion === '/perfil') {
                        return
                    } else if (!props.logged && elem.seccion === '') {
                        return
                    } else {
                        return (
                            <li
                                onClick={() => props.navigate(elem)}
                                className={
                                    props.active == elem.seccion ? 'active' : ''
                                }
                                key={index}>
                                {elem.texto}
                            </li>
                        )
                    }
                })}
            </ul>
            <Redes />
        </div>
    )
}
