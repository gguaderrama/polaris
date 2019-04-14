import React from 'react'
import { connect } from 'react-redux'
import Detalle from 'components/instructor'
import {
    recoverShoppingCart,
    setLogged,
    getInstructor,
    navigate,
    getScheduleByCoach
} from '../actions'

const mapState = state => {
    const isEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false
        }
        return true
    }
    let coach = state.instructores.instructor
    let name = !isEmpty(coach)
        ? state.instructores.instructor.name +
          ' ' +
          state.instructores.instructor.surname
        : 'Coach'
    document.title = 'Load | ' + name
    return {
        active: state.instructores.active,
        visible: state.navigation.visible,
        instructores: state.instructores.instructores,
        activo: state.instructores.activo,
        logged: state.navigation.logged,
        instructor: state.instructores.instructor,
        loading: state.instructores.loading,
        schedule: state.instructores.schedule
    }
}

const mapDispatch = (dispatch, props) => {
    dispatch(getInstructor(props.match.params.id))
    dispatch(getScheduleByCoach(props.match.params.id))
    dispatch(setLogged())
    dispatch(recoverShoppingCart())
    return {
        getInstructor: id => dispatch(getInstructor(id)),
        navigate: opcion => dispatch(navigate(opcion))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Detalle)
