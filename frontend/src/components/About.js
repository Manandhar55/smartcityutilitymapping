import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';  // Import the About page CSS

const About = () => {
  return (
    <div>
      {/* Introduction Section */}
      <Container className="mt-5">
        <h1 className="text-center text-primary">About Our Smart City Web Application</h1>
        <p className="text-center text-muted">
          This web application serves as a platform for exploring the concept of smart cities. It integrates geographic data with interactive maps, showcasing real-time data of Kathmandu.
        </p>
      </Container>

      {/* What the Web Application Does */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">What Our Web Application Does</h2>
          <Row className="text-center">
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Smart City Overview</Card.Title>
                  <Card.Text>
                    Get an overview of the key principles behind smart cities, including sustainability, smart governance, and technological innovation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Interactive Map</Card.Title>
                  <Card.Text>
                    Interact with an interactive map of Kathmandu, explore districts, and visualize geographical data in real-time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Tools for Analysis</Card.Title>
                  <Card.Text>
                    Explore advanced tools for searching, drawing, and performing geographical analysis on the map for detailed insights.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Was Created */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">How It Was Created</h2>
          <Row className="text-center">
            <Col md={6} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Frontend Development</Card.Title>
                  <Card.Text>
                    Built with **React.js** for dynamic rendering, it ensures a responsive user interface and seamless interaction with **React-Leaflet** for map integration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Backend & Data</Card.Title>
                  <Card.Text>
                    The backend is powered by **Node.js** and **Express.js**, which deliver API endpoints and handle dynamic GeoJSON data for map rendering.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tools and Technologies Used */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Tools and Technologies Used</h2>
          <Row className="text-center">
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">React.js</Card.Title>
                  <Card.Text>
                    React.js was used to build the user interface, providing a fast and efficient way to render components dynamically.
                  </Card.Text>
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">React-Leaflet</Card.Title>
                  <Card.Text>
                    **React-Leaflet** integrates Leaflet.js with React to provide interactive maps with various features for geographic visualization.
                  </Card.Text>
                  <Card.Img variant="top" src="https://react-leaflet.js.org/img/logo-title.svg" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Bootstrap</Card.Title>
                  <Card.Text>
                    Bootstrap is used for responsive layout, ensuring the application looks great on all screen sizes and provides a clean, polished design.
                  </Card.Text>
                  <Card.Img variant="top" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Node.js</Card.Title>
                  <Card.Text>
                    **Node.js** provides a fast and efficient backend runtime environment, ensuring scalable API services for real-time data handling.
                  </Card.Text>
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">SQLite</Card.Title>
                  <Card.Text>
                    **SQLite** is used as a lightweight database to manage and store application data efficiently, ensuring high performance with low overhead.
                  </Card.Text>
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="shadow-sm mb-4 border-0 rounded">
                <Card.Body>
                  <Card.Title className="h5">Git & GitHub</Card.Title>
                  <Card.Text>
                    **Git** and **GitHub** were used for version control and collaboration during development, with GitHub serving as a repository for the project's codebase.
                  </Card.Text>
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '50%' }} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
