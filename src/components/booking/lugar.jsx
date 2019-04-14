import React from 'react'
import Bicycle1 from 'assets/bicycle1.png'

class Lugar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
        this.handleCLick = this.handleCLick.bind(this)
    }
    handleCLick() {
        this.setState({ selected: !this.state.selected })
    }
    render() {
        return (
            <th>
                <div
                    onClick={() => this.handleCLick()}
                    className={`reserva-circle span ${
                        this.state.selected ? 'selected-class' : ''
                    }`}>
                    <img
                        src={Bicycle1}
                        alt="bibicleta Load"
                        className="bicycle"
                    />
                    <p className="number">{this.props.lugar}</p>
                </div>
            </th>
        )
    }
}

export default Lugar
