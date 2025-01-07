import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import '../styles/feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [apiResponse, setApiResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.feedback) {
      newErrors.feedback = 'Feedback is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
          setApiResponse({ type: 'success', message: data.message });
        } else {
          // Handle the error returned by the backend
          setApiResponse({ type: 'error', message: data.error || 'Something went wrong' });
        }

        // Reset form after submission
        setFormData({ name: '', email: '', feedback: '' });
        setErrors({});
      } catch (error) {
        // Handle any network or server error
        setApiResponse({ type: 'error', message: 'Server error. Please try again later.' });
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center my-4">Feedback Form</h2>

          {/* Display response message */}
          {apiResponse && (
            <Alert variant={apiResponse.type === 'success' ? 'success' : 'danger'}>
              {apiResponse.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formFeedback">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                isInvalid={!!errors.feedback}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.feedback}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit Feedback
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
