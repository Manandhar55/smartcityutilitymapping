import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // For custom marker icons
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ContactUs.css'; // Custom styling for the Contact Us page

const ContactUs = () => {
  useEffect(() => {
    // Fix issue where Leaflet's default marker icon was not displaying
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  const kathmanduUniversityCoords = [27.6197, 85.5394]; // Kathmandu University coordinates

  return (
    <div className="container my-5 contact-us-container">
      <h2 className="text-center mb-4 text-dark">Contact Us</h2>

      {/* Description about the team */}
      <section className="team-description mb-5 p-4 bg-white rounded shadow-sm">
        <h4 className="text-primary">About Our Team</h4>
        <p className="text-dark">
          We are a group of **Geomatics Engineering students** from **Kathmandu University** in Nepal. 
          Our team is dedicated to exploring and implementing innovative geospatial technologies that contribute to the development of **Smart City Infrastructure**. 
          Through this project, we aim to design and develop solutions for efficient urban planning, sustainable development, and resource management using geospatial data and tools.
        </p>
        <p className="text-dark">
          As students at **Kathmandu University**, we are committed to learning and applying cutting-edge technologies to solve real-world problems in the field of geomatics and urban development. 
          Our diverse team combines skills in software development, geographic information systems (GIS), data analysis, and project management to deliver impactful solutions.
        </p>
      </section>

      <hr className="border-primary" />

      {/* Team Members Section */}
      <section className="team-members">
        <h4 className="text-primary text-center mb-4">Meet the Team</h4>

        <div className="row text-center">
          {/* Team Member 1 */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg rounded">
              <img 
                 src={`${process.env.PUBLIC_URL}/images/sneha.jpg`} 
                alt="Team Member 1" 
                className="card-img-top rounded-circle mx-auto team-member-img"
              />
              <div className="card-body">
                <h5 className="card-title">Sneha Manandhar</h5>
                <p className="card-text text-muted">Lead Developer</p>
                <p><strong>Email:</strong> <a href="mailto:snehamdr6383@gmail.com">snehamdr6383@gmail.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sneha-manandhar-56b4a32b6/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sneha-manandhar</a></p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg rounded">
              <img 
                src={`${process.env.PUBLIC_URL}/images/romika.jpg`}
                alt="Team Member 2" 
                className="card-img-top rounded-circle mx-auto team-member-img"
              />
              <div className="card-body">
                <h5 className="card-title">Romika Thapa</h5>
                <p className="card-text text-muted">Designer</p>
                <p><strong>Email:</strong> <a href="mailto:romikathapa27@gmail.com">romikathapa27@gmail.com</a></p>
                <p><strong>LinkedIn:</strong> <a href ="https://www.linkedin.com/in/romika-thapa-95a816296/" target="_blank" rel="noopener noreferrer">linkedin.com/in/romika-thapa</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-primary" />

      {/* Location Section */}
      <section className="map mb-5">
        <h4 className="text-primary text-center mb-4">Find Us at Kathmandu University</h4>
        
        {/* Leaflet Map */}
        <MapContainer 
          center={kathmanduUniversityCoords} 
          zoom={15} 
          style={{ height: '500px', width: '100%' }}
          scrollWheelZoom={false}
          className="rounded shadow-lg map-container"
        >
          {/* Tile Layer from OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker for Kathmandu University */}
          <Marker position={kathmanduUniversityCoords}>
            <Popup>
              <b>Kathmandu University</b><br />
              Dhulikhel, Nepal
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default ContactUs;
