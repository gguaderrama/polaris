import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Private from './private'
import Home from '../containers/home'
import Nosotros from '../containers/nosotros'
import Booking from '../containers/booking'
import Comprar from '../containers/comprar'
import Instructores from '../containers/instructores'
import Instructor from '../containers/instructor'
import Contactanos from '../containers/contactanos'
import Login from '../containers/login'
import ReservaClase from '../containers/reservaclase'
import Place from '../containers/place'
import Perfil from '../containers/perfil'
import Tienda from '../containers/tienda'
import DetailProducts from '../containers/detail_products'
import ShoppingCart from '../containers/shopping-cart'
import MakeOrder from '../containers/make_order'
import Legal from '../containers/legal'
import Password from '../containers/password'
import LugaresWork from '../components/booking/lugareswork'
// import Event from '../containers/event'

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Private exact path="/perfil" component={Perfil} />
        <Route exact path="/legal" component={Legal} />
        <Private exact path="/reservar/clases/lugares/:id" component={Place} />
        <Private
            exact
            path="/reservar/clase/:id/:lugar"
            component={ReservaClase}
        />
        <Route exact path="/reservar" component={Booking} />
        <Route exact path="/comprar" component={Comprar} />
        <Route exact path="/coaches" component={Instructores} />
        <Route exact path="/coach/detalle/:id" component={Instructor} />
        <Route exact path="/contactanos" component={Contactanos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/tienda" component={Tienda} />
        <Route exact path="/tienda/detail" component={DetailProducts} />
        <Route exact path="/makeorder" component={MakeOrder} />
        <Route exact path="/lugareswork" component={LugaresWork} />
        <Private exact path="/carrito" component={ShoppingCart} />
        <Route
            exact
            path="/password/:token/:modal_value"
            component={Password}
        />
        {/* <Route exact path="/eventos" component={Event} /> */}
        <Route component={Home} />
    </Switch>
)
