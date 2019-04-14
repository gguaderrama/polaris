import React from 'react'
import GoogleMap from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Marker = ({ text }) => (
    <div className="black">
        <FontAwesomeIcon width="300px" icon="map-marker-alt" size="3x" />
    </div>
)

export default props => {
    return (
        <div className="contacto-mapa">
            {/* <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyAcyywdVRb_EKJhgR00xRRnbh05-tNncQ4'
                }}
                defaultCenter={{ lat: 19.381764, lng: -99.186606 }}
                defaultZoom={13}
            /> */}
            <GoogleMap
                bootstrapURLKeys={{
                    key: 'AIzaSyAcyywdVRb_EKJhgR00xRRnbh05-tNncQ4'
                }}
                defaultCenter={{ lat: 19.381764, lng: -99.186606 }}
                defaultZoom={11}
            >
                <Marker lat={19.381764} lng={-99.186606} text="My Marker" />
            </GoogleMap>
        </div>
    )
}
