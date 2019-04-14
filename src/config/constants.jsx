import md5 from 'md5'

export const types = {
    // Navegación
    SET_MENU_NAVIGATION: 'SET_MENU_NAVIGATION',
    SET_LOGGED: 'SET_LOGGED',
    TOGGLE: 'TOGGLE',
    // Perfil
    SET_ID_PERFIL: 'SET_ID_PERFIL',
    SET_NOMBRE_PERFIL: 'SET_NOMBRE_PERFIL',
    SET_APELLIDOS_PERFIL: 'SET_APELLIDOS_PERFIL',
    SET_CORREO_PERFIL: 'SET_CORREO_PERFIL',
    SET_TELEFONO_PERFIL: 'SET_TELEFONO_PERFIL',
    SET_TALLA_PERFIL: 'SET_TALLA_PERFIL',
    SET_NICKNAME_PERFIL: 'SET_NICKNAME_PERFIL',
    SET_NACIMIENTO_PERFIL: 'SET_NACIMIENTO_PERFIL',
    SET_GENERO_PERFIL: 'SET_GENERO_PERFIL',
    // Login
    SET_CONSULTA_LOGIN: 'SET_CONSULTA_LOGIN'
}
export const endpoints = {
    CUSTOMER_EMAIL: 'customer/email/'
}
export const conekta = {
    dev: {
        AMATI: 'key_GXxxZwzRamVxZTXJgoQyYsQ',
        LOAD: 'key_GXxxZwzRamVxZTXJgoQyYsQ'
    },
    prod: {
        AMATI:  'key_GXxxZwzRamVxZTXJgoQyYsQ',
        LOAD: 'key_S16jRtgNNUZPMs7Mzc9F9PA'
    }
}
export const uris = {
    dev: {
        SCHEMA: 'http://',
        BASE: '.1a8b40c3be00487f8fdd.centralus.aksapp.io/api/v1/',
        SERVICES: 'load-webservices',
        AUTH: 'load-authentication'
    },
    qa: {
        SCHEMA: 'http://',
        BASE: '.0e2cbf7194fe46589189.centralus.aksapp.io/api/v1/',
        SERVICES: 'load-webservices',
        AUTH: 'load-authentication'
    },
    prod: {
        SCHEMA: 'https://',
        BASE: '.load.mx/api/v1/',
        SERVICES: 'webservices',
        AUTH: 'authentication'
    }
}
export const firebase = {
    API_KEY: 'AIzaSyBI4YORbaRI9zKQuKFEJ0Kia2OmuEEpeaI',
    AUTH_DOMAIN: 'load-79042.firebaseapp.com',
    DATABASE_URL: 'https://load-79042.firebaseio.com',
    PROJECT_ID: 'load-79042',
    STORAGE_BUCKET: 'load-79042.appspot.com',
    MESSAGING_SENDER_ID: '69436956201'
}
export const regex = {
    EMAIL: new RegExp(
        '^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()[\\]\\.,;:\\s@"]+)*)|' +
            '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}.[0-9]{1,3}\\.[0-9]' +
            '{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    )
}
