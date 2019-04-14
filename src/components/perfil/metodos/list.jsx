import React from 'react'
import Loading from 'components/loading'
import Card from './card'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.getMetodoPago()
    }
    componentWillUpdate() {
        if (this.state.loading === true) {
            this.setState({ loading: false })
        }
    }
    render() {
        return (
            <div className="history-card">
                {this.state.loading ? (
                    <Loading small={false} />
                ) : this.props.metodos.length > 0 ? (
                    <div>
                        {this.props.metodos.map((e, i) => {
                            return <Card data={e} {...this.props} key={i} />
                        })}
                    </div>
                ) : (
                            <h3>No cuentas con métodos de pago</h3>
                        )}
            </div>
        )
    }
}

export default List
