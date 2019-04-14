import React from 'react'

class Interes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activo: this.props.setvalue
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ activo: !this.state.activo })
        this.props.setInteresesRegistro(this.props.data.id)
    }
    render() {
        return (
            <li
                onClick={() => this.handleClick()}
                className={`intereses ${this.state.activo ? 'activo' : ''}`}
            >
                {this.props.data.name}
            </li>
        )
    }
}

export default Interes
