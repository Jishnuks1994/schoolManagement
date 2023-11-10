import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
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
    const attendance=()=>{
      navigate('/admin/teachers/attendance')
    }

    //teacher add form validation
    const [addTeacher,setAddTeacher]=useState({
      name:"",
      email:"",
      password:"",
      mobile:"",
      gender:"",
      subject:"",
      salary:"",
    })

    const [addImage,setAddImage]=useState("")

    const insertImage=(e)=>{
      // console.log(e.target);
      setAddImage(e.target.files[0])

    }

  // state to hold imahe preview url
  const [imagePreview, setImagePreview] = useState("")

  useEffect(() => {

    if (addImage) {
        // console.log(URL.createObjectURL(image));
        setImagePreview(URL.createObjectURL(addImage))
    }


}, [addImage])
  return (
    <div className="content">

 <Row className='mt-3'>
 <Col className='mb-4'><Button style={{background:'green'}} onClick={attendance}>Add Attendance</Button></Col>

      <Col className='mb-4 text-right'><Button color='primay' onClick={handleShow}>Add New Staff</Button></Col>
     
 </Row>
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
         <img src={imagePreview?imagePreview : "https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" }style={{borderRadius:'50%',height:'100px',width:'100px'}} alt="profile_pic" />

        </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Name"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
              name="mobile"
                type="text"
                placeholder="Enter Number"
                autoFocus
                pattern="[0-9]{10}" required=""
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
              name="subject"
                type="text"
                placeholder="Enter Subject"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
              name="salary"
                type="text"
                placeholder="Enter Salary"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
              onChange={(e) => insertImage(e)}
                type="file"
                autoFocus
                required
              />
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
              name="email"
                type="email"
                placeholder="Enter Email"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
              name="email"
                type="text"
                placeholder="Enter Password"
                autoFocus
                required
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