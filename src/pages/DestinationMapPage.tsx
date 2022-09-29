import React, { useContext } from "react";
import { LatLng } from "leaflet";
import { LocationPoint } from "./App";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"
//Marker壊れたとき用
import L from 'leaflet';
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const position = new LatLng(38.72311671577611, 141.0346841825174);
const zoomlebel = 18;

const ClickMarker = () => {
    const { point, setPoint } = useContext(LocationPoint);
    const map = useMapEvents({
        click(e) {
            setPoint((prevValues) => {
                const newValue = [...prevValues, e.latlng];
                console.log('newValue', newValue);
                return newValue
            });
        }
    })
    return (
        <React.Fragment>
            {point.map((point, index) => <Marker position={point} key={index}></Marker>)}
        </React.Fragment>
    )
}

const DestinationMapPage = () => {
    return (
        <div className="gakubuti">
            <MapContainer center={position} zoom={zoomlebel} >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickMarker />
            </MapContainer>
        </div>

    )
}
export default DestinationMapPage;