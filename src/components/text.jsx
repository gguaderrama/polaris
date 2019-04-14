import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clase: 'text-container',
            type: props.type ? props.type : 'text',
            visible: false
        }
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }
    componentDidMount() {
        if (this.props.value !== '') {
            this.setState({ clase: 'text-container is-completed' })
        } else {
            this.setState({ clase: 'text-container' })
        }
    }
    componentDidUpdate() {
        if (this.props.value !== '' && this.state.clase === 'text-container') {
            this.setState({ clase: 'text-container is-completed' })
        } else {
            if (
                this.props.valid &&
                this.state.clase === 'text-container is-completed'
            ) {
                this.setState({
                    clase: 'text-container is-completed is-invalid'
                })
            }
            // if (this.props.valid == false) {
            //     console.log('hbhreghbrehbgerhb')
            //     this.setState({
            //         clase: 'text-container is-completed'
            //     })
            // }

            if (
                !this.props.valid &&
                this.state.clase === 'text-container is-completed is-invalid'
            ) {
                this.setState({
                    clase: 'text-container is-completed'
                })
            }

            if (this.props.valid && this.state.clase === 'text-container') {
                this.setState({
                    clase: 'text-container is-invalid'
                })
            }
        }
    }
    onFocus() {
        this.setState({
            clase: 'text-container is-active is-completed'
        })
        if (this.props.valid) {
            this.setState({
                clase: 'text-container is-active is-completed is-invalid'
            })
        }
    }
    onBlur() {
        if (this.props.value !== '') {
            this.setState({ clase: 'text-container is-completed' })
        } else {
            this.setState({ clase: 'text-container' })
        }
    }
    setPassVisible() {
        this.setState({
            visible: !this.state.visible,
            type: this.state.type === 'password' ? 'text' : 'password'
        })
    }
    disableActions(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div
                className={`${this.state.clase} ${
                    this.props.oscuro ? 'oscuro' : ''
                }`}
            >
                <label
                    htmlFor={this.props.name}
                    className={`text-label ${
                        this.props.oscuro ? 'oscuro' : ''
                    }`}
                >
                    {this.props.name}
                </label>
                <input
                    onCopy={this.disableActions}
                    onPaste={this.disableActions}
                    maxLength={this.props.max ? this.props.max : 50}
                    value={this.props.value}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={e => this.props.onChange(e)}
                    onKeyDown={this.props.onKeyPress}
                    type={this.state.type}
                    disabled={this.props.disabled}
                    className={`text-input ${
                        this.props.oscuro ? 'oscuro' : ''
                    }`}
                    id={this.props.name}
                    autoComplete={this.props.auto ? 'on' : 'off'}
                />
                <span
                    className={`pass-eye ${
                        this.props.type === 'password' ? '' : 'hide'
                    }`}
                    onClick={() => this.setPassVisible()}
                >
                    {this.state.visible ? (
                        <FontAwesomeIcon icon={['far', 'eye-slash']} />
                    ) : (
                        <FontAwesomeIcon icon={['far', 'eye']} />
                    )}
                </span>
                {this.props.valid ? (
                    <span className="info-text">{this.props.message}</span>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

export default Text
