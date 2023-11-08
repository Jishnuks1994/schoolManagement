import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Card, CardBody, CardHeader, CardTitle, Table } from 'reactstrap'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';


function Teachers(props) {
    const navigate=useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edit, setEdit] = useState(false);

    const handleEditClose = () => setEdit(false);
    const handleEditShow = () => setEdit(true);

    const whatsappLink = `https://wa.me/${1234567890}`;
    

    const payslip=()=>{
      navigate('/admin/teachers/payslip')
    }

  return (
    <div className="content">

    <div className='mb-4 text-right'><Button color='primay' onClick={handleShow}>Add New Staff</Button></div>
                    <Card >
              <CardHeader>
                <CardTitle tag="h4">Teachers Details</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Subject</th>
                      <th> Mobile No </th>
                      <th >Salary</th>
                      <th >Edit</th>
                      <th >salary Details</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td><Link to={whatsappLink} target="_blank"> 1234567890</Link></td>
                      <td >$36,738</td>
                      <td > <Button onClick={handleEditShow}><i class="fa-solid fa-pen-to-square"></i></Button></td>
                      <td><Button onClick={payslip}>Pay Slip</Button></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>


    {/* modal form for adding staff */}


   

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='text-center'>
        <img src="https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" style={{borderRadius:'50%',height:'100px',width:'100px'}} alt="profile_pic" />

        </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="file"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer className='px-3 pb-3' >
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      {/* modal form for editing staff */}

      <Modal  show={edit} onHide={handleEditClose}>
        <Modal.Header>
          <Modal.Title>Edit Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='text-center'>
        <img src="https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" style={{borderRadius:'50%',height:'100px',width:'100px'}} alt="profile_pic" />

        </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Salary"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Change Image</Form.Label>
              <Form.Control
                type="file"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='px-3 pb-3' >
          <Button variant="danger" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Teachers