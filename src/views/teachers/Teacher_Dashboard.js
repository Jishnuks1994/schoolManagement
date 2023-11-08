import React from 'react'
import { Container } from 'react-bootstrap';
import {

    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    NavLink,
  } from "reactstrap";
function Teacher_Dashboard() {
  return (
    <div className="content">

    <Row >
      <Container className='mb-5'>
        <Col lg="4">
          <NavLink href="/teacher/student-details">
            <Card className="card-chart">
              <CardHeader>
                <Row className=" me-auto">
                  <Col><h1 >1 A</h1></Col>
  
                </Row>
                
                <CardTitle tag="h3">
                   Strength: 50
                </CardTitle>
              </CardHeader>
              <CardBody>
                
                
              </CardBody>
              
            </Card>
          </NavLink>
        </Col>
      </Container>
      

    </Row>

  </div>
  )
}

export default Teacher_Dashboard