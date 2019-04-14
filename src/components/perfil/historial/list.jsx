import React from 'react'
import Loading from 'components/loading'
import Purchase from './purchase'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.getHistorialCompras()
    }
    componentWillUpdate() {
        if (this.state.loading === true) {
            this.setState({ loading: false })
        }
    }
    render() {
        return (
            <div className="proximas-calendario">
                {this.state.loading ? (
                    <Loading />
                ) : this.props.compras.length > 0 ? (
                    <div className="historial">
                        {this.props.compras.map((e, i) => {
                            return (
                                <Purchase
                                    {...this.props}
                                    purchase={e}
                                    key={i}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <h3>No tienes compras</h3>
                )}
            </div>
        )
    }
}

export default List
