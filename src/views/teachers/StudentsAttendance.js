import React, { useEffect, useState } from 'react'
import { Col, Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from 'react-bootstrap/Button';


function StudentsAttendance() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [date, setDate] = useState(new Date())
    const onChange = date => {
        setDate(date)
    }
    // console.log('date',date);
    const calanderShow=()=>{
        handleShow()
    }
    useEffect(() => {
        calanderShow()
      },[]);
    return (
        <div >
            <Container className='my-5 pt-5 text-center'>
                <div className='my-2'>
                <Button onClick={handleShow}>Change Date</Button>
                <p className='my-3'>Date: {date.toDateString()}</p>
               
                </div>
                <Col lg={6} className='mx-auto'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Attandance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td className='text-center' >
                                    <Form.Select className='form-control' aria-label="Default select example">
                                        <option className='text-dark'>Take Attendance</option>
                                        <option style={{ background: '#0bad09', fontSize: '11px' }} className=' text-dark' value="Present">Present</option>
                                        <option style={{ background: '#f2463a' }} className=' text-dark' value="Absent">Absent</option>
                                    </Form.Select>

                                </td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>

                                <td>
                                    <Form.Select className='form-control' aria-label="Default select example">
                                        <option className='text-dark'>Take Attendance</option>
                                        <option style={{ background: '#0bad09', fontSize: '11px' }} className=' text-dark' value="Present">Present</option>
                                        <option style={{ background: '#f2463a' }} className=' text-dark' value="Absent">Absent</option>
                                    </Form.Select>
                                </td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry </td>

                                <td>
                                    <Form.Select className='form-control' aria-label="Default select example">
                                        <option className='text-dark'>Take Attendance</option>
                                        <option style={{ background: '#0bad09', fontSize: '11px' }} className=' text-dark' value="Present">Present</option>
                                        <option style={{ background: '#f2463a' }} className=' text-dark' value="Absent">Absent</option>
                                    </Form.Select>  </td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='text-right'><Button>Submit</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Container>

            {/* modal for selecting date */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title ><b>Select a Date</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='text-center'><Calendar  onChange={onChange} value={date} /></div>
                </Modal.Body>
                <Modal.Footer className='mx-4 mb-4'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Take Attendance
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default StudentsAttendance