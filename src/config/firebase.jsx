import app from 'firebase/app'
import { firebase } from './constants'

const config = {
    apiKey: firebase.API_KEY,
    authDomain: firebase.AUTH_DOMAIN,
    databaseURL: firebase.DATABASE_URL,
    projectId: firebase.PROJECT_ID,
    storageBucket: firebase.STORAGE_BUCKET,
    messagingSenderId: firebase.MESSAGING_SENDER_ID
}

class Firebase {
    constructor() {
        app.initializeApp(config)
    }
}

export default Firebase