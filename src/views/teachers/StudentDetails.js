import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';



function StudentDetails() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const navigate=useNavigate()

    const whatsappLink = `https://wa.me/${1234567890}`;

    const progressCard=()=>{
        navigate('/teacher/progress-card')
    }

    const attendance=()=>{
        navigate('/teacher/students-attendance')
    }
    return (
        <div>

            <Container >
<div className='mb-2 text-right'>
    <Button onClick={attendance}>Take Attendance</Button>
</div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Rol Number</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Guardian Name</th>
                            <th>Phone Number</th>
                            <th>View Profile</th>
                            <th>View Progress Card</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Male</td>
                            <td>Parant</td>
                            <td>135476595</td>
                            <td className='text-center'><Button onClick={handleShow}><i class="fa-regular fa-user fa-xl"></i></Button></td>
                            <td className='text-center'><Button onClick={progressCard}><i class="fa-solid fa-clipboard-list fa-xl"></i></Button></td>
                        </tr>

                    </tbody>
                </Table>
  {/* modal form for view student details */}
                <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title><b>Student Name</b>
         
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <div className='text-center'>
        <img src="https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg" style={{borderRadius:'50%',height:'100px',width:'100px'}} alt="profile_pic" />

        </div>
        <hr />
        <div className='mx-5'>
            <p><b>Address:</b></p>
            <p><b>Mobile No: </b> <Link to={whatsappLink} target="_blank"> 1234567890</Link></p>
            <p><b>Blood Type:</b></p>
            <p><b>Address:</b></p>

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
            </Container>
        </div>
    )
}

export default StudentDetails