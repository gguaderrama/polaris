import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import navigation from './navigation'
import home from './home'
import nosotros from './nosotros'
import comprar from './comprar'
import contactanos from './contactanos'
import login from './login'
import booking from './booking'
import tienda from './tienda'
import instructores from './instructores'
import reservaclase from './reservaclase'
import perfil from './perfil'
import legal from './legal'
import password from './password'
import pagos from './pagos'
import alerta from './alerta'
import place from './place'
import event from './event'
import shoppingCart from './shopping-cart'
import promo from './promo'

export default history =>
    combineReducers({
        router: connectRouter(history),
        navigation,
        home,
        nosotros,
        comprar,
        contactanos,
        login,
        booking,
        tienda,
        instructores,
        reservaclase,
        perfil,
        legal,
        password,
        pagos,
        alerta,
        place,
        shoppingCart,
        promo,
        event
    })
