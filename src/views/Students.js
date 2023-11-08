import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form';
import 'react-calendar/dist/Calendar.css';




function Students() {

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

          <Row className='p-2'> <Calendar className='col-12'  onChange={onChange} value={date} /></Row>



        </Col>
        <Col className='p-3' lg={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>


    </div>
  )
}

export default Students