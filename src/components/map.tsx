import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { LatLng } from 'leaflet';

// 緯度軽度
const position = new LatLng(38.72311671577611, 141.0346841825174);
// 初期マップズームレベル
const zoom = 21;
export const Map = () => {

    return (
        <div className='App'>
            <MapContainer center={position} zoom={zoom} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
};