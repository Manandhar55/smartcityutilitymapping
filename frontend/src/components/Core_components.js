import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CoreComponents.css'; // For additional custom CSS
import L from 'leaflet';

const AddWMSLayer = ({ url, layer }) => {
  const map = useMap();

  React.useEffect(() => {
    const wmsLayer = L.tileLayer.wms(url, {
      layers: layer,
      format: 'image/png',
      transparent: true,
      version: '1.1.0',
      attribution: 'SmartCity WMS Data',
    });

    wmsLayer.addTo(map);

    return () => {
      map.removeLayer(wmsLayer);
    };
  }, [map, url, layer]);

  return null;
};

const CoreComponents = () => {
  const [selectedLayer, setSelectedLayer] = useState('SmartCity:river');
  const [popupInfo, setPopupInfo] = useState(null);

  const popupData = {
    'SmartCity:river': { coordinates: [27.5, 84], info: 'River data attributes' },
    'SmartCity:police': { coordinates: [27.65, 84.05], info: 'Police station data attributes' },
    'SmartCity:restaurant': { coordinates: [27.55, 84.3], info: 'Restaurant data attributes' },
    'SmartCity:power': { coordinates: [27.45, 83.9], info: 'Power data attributes' },
    'SmartCity:waste': { coordinates: [27.6, 84.4], info: 'Waste management data attributes' },
    'SmartCity:parkpoint': { coordinates: [27.65, 84.2], info: 'Park point data attributes' },
    'SmartCity:drinkingwaterpoint': { coordinates: [27.7, 84.5], info: 'Drinking water point attributes' },
  };

  const handlePopupClick = () => {
    if (popupData[selectedLayer]) {
      setPopupInfo(popupData[selectedLayer].info);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-gradient mb-4 display-4">Smart City Map</h1>
      
      <div className="d-flex justify-content-center mb-4">
        <div className="form-group">
          <label
            htmlFor="layerSelect"
            className="form-label text-secondary fw-bold"
          >
            <span className="badge bg-primary px-3 py-2">Select Layer:</span>
          </label>
          <select
            id="layerSelect"
            className="form-select form-select-lg layer-select"
            value={selectedLayer}
            onChange={(e) => setSelectedLayer(e.target.value)}
          >
            <option value="SmartCity:river">River</option>
            <option value="SmartCity:police">Police</option>
            <option value="SmartCity:restaurant">Restaurant</option>
            <option value="SmartCity:power">Power</option>
            <option value="SmartCity:waste">Waste</option>
            <option value="SmartCity:parkpoint">Park Point</option>
            <option value="SmartCity:drinkingwaterpoint">Drinking Water Point</option>
          </select>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="map-wrapper rounded shadow-lg border border-dark position-relative"
      >
        <MapContainer
          center={[27.5, 84]}
          zoom={9}
          style={{ height: '500px', width: '100%' }}
          className="rounded-top"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <AddWMSLayer
            url="http://localhost:8080/geoserver/SmartCity/wms"
            layer={selectedLayer}
          />
          {popupData[selectedLayer] && (
            <Marker
              position={popupData[selectedLayer].coordinates}
              eventHandlers={{ click: handlePopupClick }}
            >
              {popupInfo && <Popup>{popupInfo}</Popup>}
            </Marker>
          )}
        </MapContainer>
        <div className="overlay-hover-text position-absolute top-50 start-50 translate-middle text-white fs-4 text-center">
          Hover over the map for details
        </div>
      </div>

      <h2 className="text-secondary mt-5 text-center">Description</h2>
      <p className="text-muted text-justify lead">
      The application is designed as an interactive map-based visualization tool for smart city components, allowing users to overlay specific data layers on the map. As shown in the interface, users can select from a dropdown menu to display different layers, such as rivers, police stations, restaurants, power infrastructure, waste management sites, park points, and drinking water points. Each selected layer dynamically updates the map to highlight relevant geographical data, enabling easy exploration of critical city infrastructure. This tool is particularly useful for urban planning, resource management, and decision-making processes. The intuitive dropdown and map integration provide a user-friendly experience, showcasing spatial relationships between various urban elements.
      </p>
    </div>
  );
};

export default CoreComponents;
