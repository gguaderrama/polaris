import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Tabs from './tabs'
import Modal from './modalCamara'
import ModalFace from './modalCamaraFace'
import User from 'assets/user1.png'
import Help from 'assets/help.png'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            {props.modal ? (
                <Modal btn="Actualizar foto de Avatar" {...props} />
            ) : (
                ''
            )}
            {props.modalFace && props.validModalFace ? (
                <ModalFace btn="Sí, estoy de acuerdo" {...props} />
            ) : props.modalFace ? (
                <ModalFace
                    btn="Actualizar foto de Face recognition"
                    {...props}
                />
            ) : (
                ''
            )}
            <div className="Perfil">
                <div className="perfil-header">
                    <div className="header-foto">
                        <div className="header-foto-avatar">
                            <img
                                src={
                                    props.avatar === 'data:;base64,IA==' ||
                                    props.avatar === ''
                                        ? User
                                        : props.avatar
                                }
                                alt=""
                                onClick={() => props.setModalAvatar(true)}
                            />
                        </div>
                        <div className="header-foto-face">
                            <img
                                src={props.face ? props.face : User}
                                alt=""
                                title="cambiar face recognition"
                                onClick={() => props.setModalFace(true)}
                            />
                        </div>
                    </div>
                    <div className="tooltip-face">
                        <img
                            src={Help}
                            alt="Instrucciones Face Recognition"
                            className="help"
                        />
                        <span className="tooltip-text">
                            <strong>
                                Recomendaciones para foto FaceRecognition
                            </strong>
                            <ul>
                                <li>Colócate a 0.5 m de distancia</li>
                                <li>Mantén tu expresión de forma natural</li>
                                <li>Mantén tu cara de frente y centrada</li>
                                <li>No uses gorros</li>
                                <li>No use lentes ni otros accesorios </li>
                                <li>
                                    Tu cabello no debe cubrir ojos ni oídos
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="header-txt">
                        <h1>¡Hola! {props.nickname}</h1>
                    </div>
                </div>
                <div className="perfil-info">
                    <div className="perfil-tabs">
                        <Tabs {...props} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}