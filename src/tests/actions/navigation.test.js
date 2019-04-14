import * as actions from '../../actions/navigation'
import { types, endpoints, uris } from '../../config/constants'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import md5 from 'md5'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const uri = uris.dev.SCHEMA + uris.dev.SERVICES + uris.dev.BASE
const email = 'alberto.ruiz@sellcom-solutions.com.mx'

describe('actions', () => {
    it('Setear el menu', () => {
        const value = true
        const expected = {
            type: types.SET_MENU_NAVIGATION,
            value
        }
        expect(actions.setMenu(value)).toEqual(expected)
    })
    it('Alternar menú desplegable', () => {
        const expected = {
            type: types.TOGGLE
        }
        expect(actions.toggle()).toEqual(expected)
    })
})
