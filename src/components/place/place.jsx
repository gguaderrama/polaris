import React from 'react'
import Bicycle1 from 'assets/bicycle1.png'

class Lugar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            busy: false
        }
        this.handleCLick = this.handleCLick.bind(this)
    }
    componentDidUpdate() {
        if (this.state.selected) {
            if (this.props.selected !== this.props.lugar) {
                this.setState({ selected: false })
            }
        }
    }
    handleCLick() {
        if (this.props.busy_items.indexOf(this.props.lugar) < 0) {
            this.props.setPlaceSelected(this.props.lugar)
            this.setState({ selected: !this.state.selected })
        }
    }
    render() {
        return (
            <th>
                <div
                    onClick={() => this.handleCLick()}
                    className={`reserva-circle ${
                        this.props.busy_items.indexOf(this.props.lugar) >= 0
                            ? 'busy'
                            : this.state.selected
                            ? 'selected-class'
                            : ''
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
