import React from "react";
import {
  Col,
  Card,
  CardHeader,
  Row,
  CardBody,
  NavLink,
  CardTitle,
} from "reactstrap";

function Classes() {
  return (
    <div className="content">
      <Col lg="4">
        <NavLink href="/admin/classes/students ">
          <Card className="card-chart">
            <CardHeader>
              <Row className=" me-auto">
                <Col>
                  <h1>Class 1 A</h1>
                </Col>
              </Row>

              <CardTitle tag="h3">763,215</CardTitle>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </NavLink>
      </Col>
    </div>
  );
}

export default Classes;
