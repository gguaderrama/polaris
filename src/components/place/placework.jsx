import React from 'react'

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
            <div className="work-inner" onClick={() => this.handleCLick()}>
                <div
                    className={`${this.props.type} ${
                        this.props.busy_items.indexOf(this.props.lugar) >= 0
                            ? 'busy'
                            : this.state.selected
                            ? 'selected-class'
                            : ''
                    }`}
                />
                <div className="work-number">{this.props.lugar}</div>
            </div>
        )
    }
}

export default Lugar
