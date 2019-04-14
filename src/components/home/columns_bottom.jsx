import React from 'react'

export default props => {
    return (
        <div className="columns_home">
            <div
                className="home-cycling"
                onClick={() => {
                    props.setFilterClases(2)
                    props.history.push('/reservar')
                }}>
                <h2>
                    cycling
                    <br />
                    <span>Reservar</span>
                </h2>
            </div>
            <div
                className="home-work"
                onClick={() => {
                    props.setFilterClases(3)
                    props.history.push('/reservar')
                }}>
                <h2>
                    Workout Bar
                    <br />
                    <span>Reservar</span>
                </h2>
            </div>
        </div>
    )
}
