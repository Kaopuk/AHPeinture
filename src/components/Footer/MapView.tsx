'use client';

import { MapContainer, TileLayer, Circle, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position: [number, number] = [43.3442, 3.2158]; // Béziers

// Fix Leaflet icons issue in Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapView() {
  return (
    <MapContainer 
      center={position} 
      zoom={7} 
      style={{ height: '250px', width: '100%', borderRadius: '12px', zIndex: 1 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={position}
        pathOptions={{ fillColor: '#D4AF37', color: '#D4AF37', fillOpacity: 0.2 }}
        radius={50000} // 50km radius
      />
      <Marker position={position} icon={icon}>
        <Tooltip direction="bottom" offset={[0, 10]} opacity={1} permanent>
          <strong style={{ color: '#000' }}>AH PEINTURE</strong><br />
          <span style={{ color: '#000' }}>Béziers et ses environs (50km)</span>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
