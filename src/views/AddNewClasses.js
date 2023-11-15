import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddNewClasses() {
  return (
    <div className="content">

      <Container>
        <Col>
        <div className='text-center'><h1>Add New Class</h1></div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Class</Form.Label>
              <Form.Control type="email" placeholder="Enter ne class" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Division</Form.Label>
              <Form.Control type="email" placeholder="Enter ne class" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Class Teacher</Form.Label>
              <Form.Select className='form-control' aria-label="Default select example">
              
                <option>Class Teacher</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
  
            <div className='text-center my-3'>
              <Button  variant="primary" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Col>
      </Container>

    </div>
  )
}

export default AddNewClasses