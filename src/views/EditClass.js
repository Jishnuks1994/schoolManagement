import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'reactstrap';

function EditClass() {
    return (
        <div className='content'>
            <Container>
                <div className='text-center'><h1>Edit Details</h1></div>
                <Form>
                <Form.Group>
              <Form.Label>Edit Class Teacher</Form.Label>
              <Form.Select className='form-control' aria-label="Default select example">
              
                <option>Class Teacher</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
                   <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Edit
                        </Button>
                   </div>
                </Form>
            </Container>
        </div>
    )
}

export default EditClass