import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from 'components/footer'
import Loading from 'components/loading'
import Icons from './icons'
import Button from './button'
import Places from './places'
import PlacesWork from './placeswork'
import Alert from 'components/alerta'

let intervalPlace

class Place extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setPlaceItemBusy(this.props.match.params.id)
        intervalPlace = setInterval(() => {
            this.props.setPlaceItemBusy(this.props.match.params.id)
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(intervalPlace)
    }
    render() {
        let mensaje = 'Te invitamos a realizar la compra de ' +
        'algún paquete para poder reservar'
        let clase = this.props.schedule_item.discipline
            ? this.props.schedule_item.discipline.id
            : false
        let message = 'Tu lugar ha sido reservado en esta clase'
        return (
            <div
                className={this.props.visible ? 'container menu' : 'container'}
            >
                <Navigation {...this.props} />
                {this.props.loading ? (
                    <Loading />
                ) : clase === 2 ? (
                    <div className="reserva-selection">
                        <h2>Selecciona tu lugar</h2>
                        <div className="reserva-table">
                            <Icons />
                            {this.props.loadingBusy ? (
                                <Loading />
                            ) : (
                                    <Places {...this.props} />
                                )}
                            <Button {...this.props} />
                        </div>
                        <Alert
                            type="check"
                            visible={this.props.alert_place}
                            handleAlert={() =>
                                this.props.closeAlertPlace(
                                    this.props.match.params.id
                                )
                            }
                            title="¡Felicidades!"
                            message={message}
                        />
                    </div>
                ) : (
                            <PlacesWork {...this.props} />
                        )}
                <Alert
                    type="exclamation"
                    visible={this.props.alert_with_out}
                    handleAlert={() => this.props.setAlertWithOut()}
                    onClick={()=>{
                        this.props.setAlertWithOut()
                        this.props.history.push('/comprar')
                    }}
                    title="Aún no has comprado ningún paquete"
                    message={mensaje}
                />
                <Footer {...this.props} />
            </div>
        )
    }
}
export default Place
