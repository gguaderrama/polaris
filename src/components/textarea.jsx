import React from 'react'

class TextArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clase: 'textarea-container'
        }
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }
    componentDidMount() {
        if (this.props.value !== '') {
            this.setState({ clase: 'textarea-container is-completed' })
        } else {
            this.setState({ clase: 'textarea-container' })
        }
    }
    onFocus() {
        this.setState({ clase: 'textarea-container is-active is-completed' })
    }
    onBlur() {
        if (this.props.value !== '') {
            this.setState({ clase: 'textarea-container is-completed' })
        } else {
            this.setState({ clase: 'textarea-container' })
        }
    }
    render() {
        return (
            <div className={this.state.clase}>
                <label htmlFor={this.props.name} className="textarea-label">
                    {this.props.name}
                </label>
                <textarea
                    value={this.props.value}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={e => this.props.onChange(e)}
                    type={this.props.type ? this.props.type : 'text'}
                    className="textarea-input"
                    id={this.props.name}
                />
                {this.props.valid ? (
                    <span className="info-textarea">{this.props.message}</span>
                ) : (
                    ''
                )}
            </div>
        )
    }
}

export default TextArea
