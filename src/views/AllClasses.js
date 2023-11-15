import React from 'react'
import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

function AllClasses() {
    const navigate=useNavigate()
    const addClass = () => {
        navigate('/admin/all-classes/add-new-class')
      }
  return (
    <div  className="content">
        
        <Container>
            <Col className='my-3'>
            <div className='text-center'><Button onClick={addClass}>Add New Class</Button></div>
            </Col>
            <Col>
                <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class</th>
                  <th>Division</th>
                  <th>Class Teacher</th>
                  <th>Number of Students</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><Link to={`/admin/all-classes/edit-class`}><Button><i class="fa-regular fa-pen-to-square"></i></Button></Link></td>
                  <td><Button><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
              </tbody>
            </Table>
            </Col>
        </Container>

    </div>
  )
}

export default AllClasses