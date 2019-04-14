const logger = store => next => action => {
    if (process.env.NODE_ENV === 'development') {
        console.log('dispaching', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
    } else {
        return next(action)
    }
}

export default logger
