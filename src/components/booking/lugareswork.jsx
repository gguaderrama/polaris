import React from 'react'
import Navigation from '../../containers/navigation'
import Footer from '../footer'

export default props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="reserva-selection-work">
                <h2>Selecciona tu lugar</h2>
                <div className="reserva-table">
                    <div className="reserva-dis">
                        <span className="indicator3" />
                        <p className="disponible">Disponible</p>
                        <span className="indicator2" />
                        <p className="disponible">Ocupado</p>
                        <span className="indicator1" />
                        <p className="ocupado">Tu lugar seleccionado</p>
                    </div>
                    <div class="coach-side">
                        <div>
                            <h3>
                                <strong>Workout Bar</strong> con Coach 1
                            </h3>
                            <p>26 de enero de 2019, 06:00 hrs</p>
                        </div>
                    </div>
                    <div className="work-container">
                        <div className="col-work-1">
                            <div className="work-margin">
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">8</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">7</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">6</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">5</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">4</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">3</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">2</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-circle"></div>
                                    <div className="work-number">1</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-work-2">
                            <div className="work-margin">
                                <div className="work-inner">
                                    <div className="work-square"></div>
                                    <div className="work-number">9</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-square"></div>
                                    <div className="work-number">10</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-square"></div>
                                    <div className="work-number">11</div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-square"></div>
                                    <div className="work-number">12</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-work-3">
                            <div className="work-margin">
                                <div className="work-inner">
                                    <div className="work-number">17</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">18</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">19</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">20</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">21</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">21</div>
                                    <div className="work-square"></div>
                                </div>
                                <div>
                                    <div className="work-inline">
                                        <div className="work-square"></div>
                                        <div className="work-number">22</div>
                                    </div>
                                    <div className="work-inline">
                                        <div className="work-square"></div>
                                        <div className="work-number">22</div>
                                    </div>
                                    <div className="work-inline">
                                        <div className="work-square"></div>
                                        <div className="work-number">22</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-work-4">
                            <div className="work-margin">
                                <div className="work-inner">
                                    <div className="work-number">13</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">14</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">15</div>
                                    <div className="work-square"></div>
                                </div>
                                <div className="work-inner">
                                    <div className="work-number">16</div>
                                    <div className="work-square"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        onClick={() => props.history.push('/reservar/clase')}
                        className="button-general"
                        type="button">
                        Reservar
                    </a>
                </div>
            </div>
            <Footer {...props} />
        </div>
    )
}
