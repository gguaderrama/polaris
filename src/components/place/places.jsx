import React from 'react'
import Place from './place'
import Header from './header'
import PlaceArrowLeft from '../../assets/arrow_place_left.png'
import PlaceArrowRight from '../../assets/arrow_place_right.png'
import TweenLite from 'gsap'
const scrollTo = require('gsap/ScrollToPlugin')

const lugares = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lugaresf2 = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const lugaresf3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

class Places extends React.Component {
    constructor(props) {
        super(props)
    }
    leftClick() {
        let cont = document.getElementById('places')
        TweenLite.to(cont, 0.5, {
            scrollTo: { x: cont.scrollLeft - 100 }
        })
    }
    rightClick() {
        let cont = document.getElementById('places')
        TweenLite.to(cont, 0.5, {
            scrollTo: { x: cont.scrollLeft + 100 }
        })
    }
    render() {
        let filaUno = lugares.map((e, i) => {
            return <Place {...this.props} lugar={e} key={i} />
        })
        let filaDos = lugaresf2.map((e, i) => {
            return <Place {...this.props} lugar={e} key={i} />
        })
        let filaTres = lugaresf3.map((e, i) => {
            return <Place {...this.props} lugar={e} key={i} />
        })
        return (
            <div>
                <div className="coach-side">
                    <Header {...this.props} />
                </div>
                <div className="hidden-place" id="places">
                    <div className="arrow-left-place" onClick={this.leftClick}>
                        <img src={PlaceArrowLeft} className="arrow-place" />
                    </div>
                    <div
                        className="arrow-right-place"
                        onClick={this.rightClick}>
                        <img src={PlaceArrowRight} className="arrow-place" />
                    </div>
                    <table>
                        <tbody>
                            <tr className="row1">{filaUno}</tr>
                            <tr>{filaDos}</tr>
                            <tr>{filaTres}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Places
