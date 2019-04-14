import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'
import Instructor from './instructor'
import Loading from 'components/loading'
import ArrowLeft from '../../assets/arrow_coach_left.png'
import ArrowRight from '../../assets/arrow_coach_right.png'
import TweenLite from 'gsap'
const scrollTo = require('gsap/ScrollToPlugin')

class Coaches extends React.Component {
    constructor(props) {
        super(props)
    }
    leftClick() {
        let elem = document.getElementById('instructor-0')
        let cont = document.getElementById('instructores')
        let elemWidth = elem.clientWidth
        TweenLite.to(cont, 0.5, {scrollTo:{x:(cont.scrollLeft - elemWidth)}})
    }
    rightClick() {
        let elem = document.getElementById('instructor-0')
        let cont = document.getElementById('instructores')
        let elemWidth = elem.clientWidth
        TweenLite.to(cont, 0.5, {scrollTo:{x:(cont.scrollLeft + elemWidth)}})
    }
    render() {
        return (
            <div
                className={this.props.visible ? 'container menu' : 'container'}
            >
                <Navigation {...this.props} />
                {this.props.loading ? (
                    <Loading />
                ) : (
                    <div>
                        <div className="arr-left">
                            <img
                                onClick={this.leftClick}
                                src={ArrowLeft}
                                alt="load arrow left"
                                className="arrow"
                            />
                        </div>
                        <div className="arr-right">
                            <img
                                onClick={this.rightClick}
                                src={ArrowRight}
                                alt="load arrow right"
                                className="arrow"
                            />
                        </div>
                        <div className="instructores" id="instructores">
                            {this.props.instructores.map((v, i) => {
                                return (
                                    <Instructor
                                        values={v}
                                        key={i}
                                        id={i}
                                        {...this.props}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )}
                <Footer {...this.props} />
            </div>
        )
    }
}

export default Coaches
