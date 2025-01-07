import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup, Marker, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const Home = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const [geojsonLayers, setGeojsonLayers] = useState({
    layer1: null,
    layer2: null,
    layer3: null,
    layer4: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load Kathmandu GeoJSON data
  useEffect(() => {
    fetch('/Kathmandu.geojson')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch Kathmandu GeoJSON data');
        }
        return response.json();
      })
      .then((data) => {
        setGeojsonData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Load additional GeoJSON layers
  useEffect(() => {
    const fetchGeoJSONLayers = async () => {
      try {
        const layer1Data = await fetch('/street lightining.geojson').then((res) => res.json());
        const layer2Data = await fetch('/traffic signal.geojson').then((res) => res.json());
        const layer3Data = await fetch('/transport.geojson').then((res) => res.json());
        const layer4Data = await fetch('/emergency.geojson').then((res) => res.json());

        setGeojsonLayers({
          layer1: layer1Data,
          layer2: layer2Data,
          layer3: layer3Data,
          layer4: layer4Data,
        });
      } catch (error) {
        setError('Failed to load additional GeoJSON layers');
      }
    };

    fetchGeoJSONLayers();
  }, []);

  const mapCenter = [27.7172, 85.3240]; // Kathmandu coordinates
  const mapZoom = 12; // Zoom level suitable for Kathmandu

  if (loading) {
    return <div className="text-center mt-5">Loading map data...</div>;
  }

  if (error) {
    return <div className="text-center mt-5">Error: {error}</div>;
  }

  // Function to handle GeoJSON feature popups
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const popupContent = Object.entries(feature.properties)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}<br>`)
        .join('');
      layer.bindPopup(`<div>${popupContent}</div>`);
    }
  };

  // Function to get the custom marker icon using Bootstrap icons
  const getCustomIcon = (layerType) => {
    switch (layerType) {
      case 'layer1': // Street Lighting
        return L.divIcon({
          html: `<i class="bi bi-lightbulb" style="font-size: 24px; color: #f39c12;"></i>`, // Lightbulb icon
          className: 'leaflet-marker-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
        });
      case 'layer2': // Traffic Signals
        return L.divIcon({
          html: `<i class="bi bi-traffic-light" style="font-size: 24px; color: #e74c3c;"></i>`, // Traffic light icon
          className: 'leaflet-marker-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
        });
      case 'layer3': // Transport
        return L.divIcon({
          html: `<i class="bi bi-bus-front" style="font-size: 24px; color: #2ecc71;"></i>`, // Bus icon
          className: 'leaflet-marker-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
        });
      case 'layer4': // Emergency
        return L.divIcon({
          html: `<i class="bi bi-ambulance" style="font-size: 24px; color: #3498db;"></i>`, // Ambulance icon
          className: 'leaflet-marker-icon',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30],
        });
      default:
        return null;
    }
  };

  // Function to render markers for each layer
  const renderMarkers = (geojson, layerType) => {
    return geojson.features.map((feature, index) => {
      const { geometry, properties } = feature;
      if (geometry && geometry.type === 'Point') {
        const [lng, lat] = geometry.coordinates;

        const customIcon = getCustomIcon(layerType);

        return (
          <Marker key={index} position={[lat, lng]} icon={customIcon}>
            <Popup>
              {Object.entries(properties).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </Popup>
          </Marker>
        );
      }
      return null;
    });
  };

  return (
    <div className="container mt-4">
         <section className="introduction row mb-5">
      <div className="col-md-6 mb-4 mb-md-0">
        <h2 className="text-center mb-3"><p>Introduction to Smart City</p></h2>
        <p>A smart city is a contemporary urban development that leverages advanced technologies and data-driven strategies to enhance the quality of life for its citizens, promote sustainability, and streamline city operations. By integrating Information and Communication Technology (ICT) and Internet of Things (IoT) devices with infrastructure and public services, smart cities aim to create efficient, resilient, and inclusive urban environments. These cities focus on optimizing resources, improving mobility, fostering economic growth, and engaging citizens in governance, all while addressing environmental challenges and ensuring equitable access to services.</p>
        
        <h3 className="mt-4">Objectives of Smart City Development:</h3>
        <ul>
          <li><strong>Efficient Resource Management:</strong> Optimizing the use of resources like water, energy, and waste to ensure sustainability.</li>
          <li><strong>Sustainable Urban Development:</strong> Fostering urban growth while minimizing environmental impact.</li>
          <li><strong>Enhanced Quality of Life:</strong> Improving the standard of living through better infrastructure, healthcare, and public services.</li>
          <li><strong>Smart Governance:</strong> Leveraging technology for transparent, efficient, and accountable governance.</li>
          <li><strong>Resilient Infrastructure:</strong> Developing robust infrastructure that can withstand environmental and socio-economic challenges.</li>
          <li><strong>Economic Growth and Innovation:</strong> Encouraging technological innovation and business growth to strengthen the city's economy.</li>
        </ul>
      </div>
      <div className="col-md-6">
        <img src="/images/smartcity.jpg" alt="Smart City Planning" className="img-fluid rounded shadow-lg hover-effect" />
      </div>
    </section>

    {/* Smart City Components Section */}
    <section className="smart-city-components mb-5 bg-light py-5">
      <h2 className="text-center mb-4">Components of a Smart City</h2>
      
      <div className="row mb-4">
        <div className="col-md-4 text-center">
          <img src="/images/infrastructure.jpg" alt="Smart Infrastructure" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Infrastructure</h4>
          <ul>
            <li>Smart buildings with energy-efficient designs.</li>
            <li>Smart roads and transport systems.</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/governance.jpg" alt="Smart Governance" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Governance</h4>
          <ul>
            <li>E-governance platforms for public services and transparency.</li>
            <li>Digital systems for tax payments, licenses, and citizen queries.</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/economy.jpg" alt="Smart Economy" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Economy</h4>
          <ul>
            <li>Digital platforms for businesses and startups.</li>
            <li>Job creation through innovation and technology-driven industries.</li>
          </ul>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 text-center">
          <img src="/images/environment.jpg" alt="Smart Environment" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Environment</h4>
          <ul>
            <li>Monitoring and managing air and water quality.</li>
            <li>Promoting sustainable urban development.</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/living.jpg" alt="Smart Living" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Living</h4>
          <ul>
            <li>Enhanced healthcare services with telemedicine.</li>
            <li>Smart homes and wearables to improve daily living.</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/mobility.jpg" alt="Smart Mobility" className="component-image img-fluid shadow-lg hover-effect" />
          <h4 className="mt-2">Smart Mobility</h4>
          <ul>
            <li>Electric and autonomous vehicles.</li>
            <li>Shared mobility solutions (e.g., bike-sharing, ride-hailing apps).</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Link Section */}
    <section className="link-section mb-5">
      <h3 className="text-center mb-4 text-primary">Learn More About Smart Cities</h3>
      <div className="text-center">
        <a 
          href="https://storymaps.arcgis.com/stories/1df87733bc6d4cfbbcc68fdcbe673ef3" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary m-2 hover-effect">
          Explore Smart Cities - StoryMap 1
        </a>
        <a 
          href="https://storymaps.arcgis.com/stories/17a3fdc4187247898131132993acb680" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary m-2 hover-effect">
          Explore Smart Cities - StoryMap 2
        </a>
        <a 
          href="https://www.esri.com/arcgis-blog/products/arcgis-indoors/sustainable-development/smart-cities/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary m-2 hover-effect">
          Explore Smart Cities - Esri Blog
        </a>
      </div>
    </section>
      <h2 className="text-center mb-3">Interactive Smart City Map of Kathmandu</h2>
      <div className="map-container mb-3">
        <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '500px', width: '100%' }} className="rounded shadow-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Main GeoJSON Layer */}
          {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachFeature} />}

          {/* Additional GeoJSON Layers */}
          <LayersControl position="topright">
            <LayersControl.Overlay name="Street Lighting">
              <LayerGroup>
                {geojsonLayers.layer1 && <GeoJSON data={geojsonLayers.layer1} onEachFeature={onEachFeature} />}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Traffic Signals">
              <LayerGroup>
                {geojsonLayers.layer2 && <GeoJSON data={geojsonLayers.layer2} onEachFeature={onEachFeature} />}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Transport">
              <LayerGroup>
                {geojsonLayers.layer3 && <GeoJSON data={geojsonLayers.layer3} onEachFeature={onEachFeature} />}
              </LayerGroup>
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Emergency">
              <LayerGroup>
                {geojsonLayers.layer4 && <GeoJSON data={geojsonLayers.layer4} onEachFeature={onEachFeature} />}
              </LayerGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
