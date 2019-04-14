import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    let imagen = ''
    if (props.instructor.listImages !== undefined) {
        let query = props.instructor.listImages
            .map(e => e.avatarType)
            .indexOf('CLASES')
        if (query !== -1) {
            imagen = props.instructor.listImages[query].url
        }
    }
    return (
        <div className="instructor-container">
            <div className="instructor-detalle-bio">
                <div className="instructor-txt">
                    <h2>{props.instructor.id}</h2>
                    <h4>
                        {props.instructor.name} {props.instructor.surname}
                    </h4>
                    <p className="bio-txt">{props.instructor.biography}</p>
                    <p className="certification-txt">
                        {props.instructor.certifications}
                    </p>
                    <div className="instructor-detalle-social-2">
                        {props.instructor.socialNetworks !== undefined
                            ? props.instructor.socialNetworks.map((e, i) => {
                                let url
                                if (e.name === 'facebook') {
                                    url = 'https://www.facebook.com/' + e.url
                                }
                                if (e.name === 'instagram') {
                                    url = 'https://www.instagram.com/' + e.url
                                }
                                return (
                                    <a href={url} target="_blank">
                                        <FontAwesomeIcon
                                            icon={['fab', e.name]}
                                        />
                                    </a>
                                )
                            })
                            : ''}
                    </div>
                </div>
            </div>
            <div className="instructor-detalle-img">
                <img src={imagen} alt="instructor" />
            </div>
        </div>
    )
}
