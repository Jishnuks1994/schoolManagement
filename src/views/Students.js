import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';






function Students() {

  const navigate=useNavigate()

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [reg, setReg] = useState(false);
  const handleShowReg = () => setReg(true);
  const handleCloseReg = () => setReg(false);

  const progressCard=()=>{
    navigate('/admin/progress-card')
}


  const [date, setDate] = useState(new Date())
  console.log(date);
  const onChange = date => {
    setDate(date)
  }

  return (
    <div className="content">


      <Row>
        <Col className='p-3' lg={4}>
          <Row>
            <Form className='col-12'>
              <Form.Select className=' form-control my-2' style={{ fontSize: '16px' }} aria-label="Default select example">
                <option >Select Classes</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form>
          </Row>

          <Row className='p-2'> <Calendar className='col-12' onChange={onChange} value={date} /></Row>



        </Col>
        <Col className='p-3' lg={8}>
          <div className='text-right mb-3 '><Button onClick={handleShowReg}>Add Student</Button></div>
          <div  className='text-center mb-3 '>
            <h3>{date.toDateString()}</h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Guardian Name</th>
                <th>Phone Number</th>
                <th>Profile</th>
                <th>Progress Card</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Button onClick={handleShow}><i class="fa-regular fa-user fa-xl"></i></Button></td>
                <td><Button onClick={progressCard}><i class="fa-solid fa-clipboard-list fa-xl"></i></Button></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>ajd</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>

         
        </Col>
        
      </Row>


      {/* modal form for view/edit student details */}
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>

          <div className='text-center'>
            <img src="https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt="profile_pic" />

          </div>
          <hr />
          <div className='mx-5'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Register Number</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Guardian Name</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className='text-dark' type="text" value={'1234567890'} />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Blood Type</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Choose image to change</Form.Label>
                <Form.Control className='text-dark' type="file"  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control className='text-dark' as="textarea" rows={8} />
              </Form.Group>

            </Form>

          </div>
          <hr />

        </Modal.Body>
        <Modal.Footer className='px-3 mb-3'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* modal form for add student details */}
      <Modal show={reg} onHide={handleCloseReg}>
      <Modal.Header>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

          <div className='text-center'>
            <img src="https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt="profile_pic" />

          </div>
          <hr />
          <div className='mx-5'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Register Number</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Guardian Name</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Blood Type</Form.Label>
                <Form.Control className='text-dark' type="text" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Choose image to change</Form.Label>
                <Form.Control className='text-dark' type="file"  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control className='text-dark' as="textarea" rows={8} />
              </Form.Group>

            </Form>

          </div>
          <hr />

        </Modal.Body>
        <Modal.Footer className='px-3 mb-3'>
          <Button variant="danger" onClick={handleCloseReg}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseReg}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Students