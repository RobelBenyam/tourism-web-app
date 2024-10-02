import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Sample hotel data (example hotels in the Bale zone)
const hotels = [
  { id: 1, name: "Hotel A", position: [6.5, 40.0] }, // Example position
  { id: 2, name: "Hotel B", position: [7.0, 40.5] }, // Adjusted positions
  { id: 3, name: "Hotel C", position: [6.2, 41.0] }, // Adjusted positions
  { id: 4, name: "Hotel D", position: [8.0, 41.5] }, // Adjusted positions
];

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom icon
const customMarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const [hotelData, setHotelData] = useState(hotels);

  // Example: Fetch hotel data from an API
  useEffect(() => {
    // Fetch logic here
    // setHotelData(fetchedData);
  }, []);

  return (
    <section className={styles.mapSection}>
      <h2>Bale Mountains National Park</h2>
      <div className={styles.mapContainer}>
        <MapContainer
          center={[6.5, 40.0]} // Centered approximately in the Bale zone
          zoom={8} // Adjusted zoom level
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {hotelData.map((hotel) => (
            <Marker
              key={hotel.id}
              position={hotel.position}
              icon={customMarkerIcon}
            >
              <Popup>{hotel.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
