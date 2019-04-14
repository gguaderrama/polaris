import React from 'react'
import { render } from 'react-dom'
import { createHashHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import logger from './middleware/logger'
import thunk from 'redux-thunk'
import AppReducer from './reducers'
import Routes from './routes'
import Idle from './components/idle-timer'
import moment from 'moment'
import './styles/less/style.less'
import 'toastr/build/toastr.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { recoverShoppingCart } from './actions'
import {
    faBars,
    faShoppingCart,
    faTimes,
    faChevronLeft,
    faChevronRight,
    faPlusCircle,
    faMinusCircle,
    faCheck,
    faQuestion,
    faExclamation,
    faSpinner,
    faCamera,
    faTrashAlt,
    faMapMarkerAlt,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faBlogger,
    faInstagram,
    faSpotify,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faArrowAltCircleLeft,
    faEye,
    faEyeSlash,
    faFile,
    faUser,
} from '@fortawesome/free-regular-svg-icons'

library.add(
    faArrowAltCircleLeft,
    faBars,
    faShoppingCart,
    faTimes,
    faFacebook,
    faBlogger,
    faInstagram,
    faSpotify,
    faChevronLeft,
    faChevronRight,
    faTwitter,
    faEye,
    faEyeSlash,
    faPlusCircle,
    faMinusCircle,
    faCheck,
    faQuestion,
    faExclamation,
    faSpinner,
    faCamera,
    faFile,
    faUser,
    faTrashAlt,
    faMapMarkerAlt,
    faQuestionCircle
)

moment.locale('es')
const root = document.getElementById('root')
const history = createHashHistory({ basname: '', hashType: 'slash' })
const store = createStore(
    AppReducer(history),
    applyMiddleware(logger, thunk, routerMiddleware(history))
)
store.dispatch(recoverShoppingCart())
setInterval(() => {
    store.dispatch(recoverShoppingCart())
}, 30000)
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Idle history={history} store={store} />
        </ConnectedRouter>
    </Provider>,
    root
)
