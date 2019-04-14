import React from 'react'
import HeadModal from 'assets/head-modal.png'
import Webcam from 'react-webcam'
import Close from 'assets/cancel.png'
import ReactCrop from 'react-image-crop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-image-crop/dist/ReactCrop.css'
import 'babel-polyfill'

const videoConstraints = {
    width: 800,
    height: 640,
    facingMode: 'user'
}

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            camera: true,
            image: null,
            crop: {
                x: 10,
                y: 10,
                aspect: 1,
                height: 80
            },
            validModalFace: this.props.validModalFace
        }
        this.toggleCamera = this.toggleCamera.bind(this)
        this.setRef = this.setRef.bind(this)
        this.capture = this.capture.bind(this)
        this.onCropChange = this.onCropChange.bind(this)
        this.onImageLoaded = this.onImageLoaded.bind(this)
        this.onCropComplete = this.onCropComplete.bind(this)
        this.getCroppedImg = this.getCroppedImg.bind(this)
        this.saveAvatar = this.saveAvatar.bind(this)
    }
    saveAvatar() {
        this.props.setFaceFileCamera(this.state.image)
        if (this.props.faceType) {
            this.props.saveFacePerfil()
        } else {
            () => {}
        }
    }
    setRef(webcam) {
        this.webcam = webcam
    }
    capture() {
        const imageSrc = this.webcam.getScreenshot()
        this.props.setFaceFileCamera(imageSrc)
    }
    toggleCamera() {
        this.setState({ camera: !this.state.camera })
    }
    componentWillUnmount() {
        this.setState({ camera: false })
    }
    onImageLoaded(image, pixelCrop) {
        this.imageRef = image
    }
    onCropChange(crop) {
        this.setState({ crop })
    }
    async onCropComplete(crop, pixelCrop) {
        const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            pixelCrop,
            'face.jpeg'
        )
        this.setState({ image: croppedImageUrl })
    }
    getCroppedImg(image, pixelCrop, fileName) {
        const canvas = document.createElement('canvas')
        canvas.width = 300
        canvas.height = 300
        const ctx = canvas.getContext('2d')

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            300,
            300
        )

        return new Promise((resolve, reject) => {
            resolve(canvas.toDataURL('image/jpeg'))
        })
    }
    componentDidMount() {}
    render() {
        return (
            <div className={'modal'}>
                <div className="inner-modal">
                    <div className="header-modal">
                        <img
                            src={HeadModal}
                            className="img-head"
                            alt="instructor"
                        />
                        <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="file"
                        />
                        {!this.state.camera ? (
                            <FontAwesomeIcon
                                title="Tomar foto"
                                icon="camera"
                                className="camera"
                                onClick={this.toggleCamera}
                            />
                        ) : !this.props.validModalFace ? (
                            <FontAwesomeIcon
                                title="Subir archivo"
                                icon={['far', 'file']}
                                className="camera"
                                onClick={this.toggleCamera}
                            />
                        ) : (
                            <div />
                        )}
                        {this.props.faceType ? (
                            <FontAwesomeIcon
                                title="Descartar"
                                className="trash"
                                icon="trash-alt"
                                onClick={() => this.props.clearFaceFile()}
                            />
                        ) : (
                            ''
                        )}
                        <div
                            onClick={() => {
                                this.props.clearFaceFile()
                                this.props.setModalFace(false)
                            }}
                            className="modal-close"
                        >
                            <img src={Close} alt="" />
                        </div>
                    </div>
                    <div className="info-modal">
                        {this.state.camera ? (
                            this.props.faceType === '' &&
                            this.props.validModalFace ? (
                                <div>
                                    <h4 className="style-modal">
                                        Una vez subiendo tu foto de Face{' '}
                                        Recognition no podrás modificarla.
                                    </h4>
                                </div>
                            ) : this.props.faceType === '' ? (
                                <div>
                                    <Webcam
                                        audio={false}
                                        height={300}
                                        width={400}
                                        ref={this.setRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                    />
                                    <div
                                        className="modal-camera-capture"
                                        onClick={this.capture}
                                    />
                                </div>
                            ) : (
                                <div className="drag-drop-container">
                                    <ReactCrop
                                        src={`data:${
                                            this.props.faceType
                                        };base64,${
                                            this.props.faceLoading
                                                ? ''
                                                : this.props.faceData
                                        }`}
                                        crop={this.state.crop}
                                        onChange={this.onCropChange}
                                        onImageLoaded={this.onImageLoaded}
                                        onComplete={this.onCropComplete}
                                    />
                                </div>
                            )
                        ) : this.props.faceType !== '' ? (
                            <div className="drag-drop-container">
                                <ReactCrop
                                    src={`data:${this.props.faceType};base64,${
                                        this.props.faceLoading
                                            ? ''
                                            : this.props.faceData
                                    }`}
                                    crop={this.state.crop}
                                    onChange={this.onCropChange}
                                    onImageLoaded={this.onImageLoaded}
                                    onComplete={this.onCropComplete}
                                />
                            </div>
                        ) : (
                            <div className="drag-drop-container">
                                <div className="drag-drop">
                                    <input
                                        type="file"
                                        id="face"
                                        onChange={this.props.setFaceFile}
                                    />
                                    <p>
                                        Arrastre sus archivos aquí o haga clic
                                        en esta área.
                                    </p>
                                </div>
                            </div>
                        )}
                        {this.props.faceType === '' &&
                        this.props.validModalFace ? (
                            <button
                                onClick={() =>
                                    this.props.setValidModalFace(false)
                                }
                                className="btn"
                                disabled={this.props.faceLoading}
                            >
                                {this.props.faceLoading ? (
                                    <FontAwesomeIcon icon="spinner" />
                                ) : (
                                    this.props.btn
                                )}
                            </button>
                        ) : (
                            <button
                                onClick={
                                    this.props.faceType
                                        ? this.props.saveFacePerfil
                                        : () => {}
                                }
                                onClick={() => this.saveAvatar()}
                                className="btn"
                                disabled={this.props.faceLoading}
                            >
                                {this.props.faceLoading ? (
                                    <FontAwesomeIcon icon="spinner" />
                                ) : (
                                    this.props.btn
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
