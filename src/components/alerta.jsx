import React from 'react'
import HeadModal from 'assets/head-modal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Close from 'assets/cancel.png'

class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: false
        }
        this.handleAction = this.handleAction.bind(this)
    }
    handleAction() {
        this.setState({ action: true })
        this.props.onClick()
    }
    componentDidUpdate() {
        if (this.state.action) {
            setTimeout(() => {
                this.setState({ action: false })
            }, 3000)
        }
    }
    render() {
        return (
            <div className={`alert ${this.props.visible ? '' : 'hide'}`}>
                <div className="inner-alert">
                    <div className="header-alert">
                        <FontAwesomeIcon icon={this.props.type} />
                        <img
                            src={HeadModal}
                            className="img-head"
                            alt="instructor"
                        />
                        <img
                            src={Close}
                            className="header-alert-close"
                            onClick={this.props.handleAlert}
                        />
                    </div>
                    <div className="info-alert">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.message}</p>
                        <p>
                            <strong>{this.props.correo_alert}</strong>
                        </p>
                    </div>
                    <div className="action-alert">
                        <button
                            onClick={() => {
                                this.props.onClick
                                    ? this.handleAction()
                                    : this.props.handleAlert()
                            }}
                            disabled={this.state.action}
                            className="button-general">
                            {this.state.action ? (
                                <FontAwesomeIcon icon="spinner" />
                            ) : (
                                this.props.btnText ? this.props.btnText :
                                'Continuar'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Alert
