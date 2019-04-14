import axios from 'axios'
import md5 from 'md5'
import { uris } from './constants'

let services = ''
let auth = ''

//ambientes
if (process.env.QUALITY) {
    services = uris.qa.SCHEMA + uris.qa.SERVICES + uris.qa.BASE
    auth = uris.qa.SCHEMA + uris.qa.AUTH + uris.qa.BASE
} else if (process.env.PROD) {
    services = uris.prod.SCHEMA + uris.prod.SERVICES + uris.prod.BASE
    auth = uris.prod.SCHEMA + uris.prod.AUTH + uris.prod.BASE
} else {
    services = uris.dev.SCHEMA + uris.dev.SERVICES + uris.dev.BASE
    auth = uris.dev.SCHEMA + uris.dev.AUTH + uris.dev.BASE
}

export const apiPassword = axios.create({
    baseURL: auth,
    timeout: 9000,
    headers: {
        Accept: 'application/json',
        'Api-Token': md5('load_web_api').toUpperCase(),
        'Content-Type': 'application/json'
    }
})

export const apiLogin = axios.create({
    baseURL: auth,
    timeout: 9000,
    headers: {
        Authorization: 'Basic bG9hZDp1c2Vy',
        Accept: 'application/json',
        'Api-Token': md5('load_web_api').toUpperCase(),
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

const instance = axios.create({
    crossdomain: true,
    baseURL: services,
    timeout: 100000,
    headers: {
        Accept: 'application/json',
        'Api-Token': md5('load_web_api').toUpperCase(),
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    config => {
        if (sessionStorage.access_token) {
            config.headers.Authorization =
                'Bearer ' + sessionStorage.access_token
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)

export default instance
