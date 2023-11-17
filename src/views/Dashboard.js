/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="4">
            <NavLink href="/admin/students">
              <Card className="card-chart">
                <CardHeader>
                  <Row className=" me-auto">
                    <Col>
                      <h1>Students</h1>
                    </Col>
                  </Row>

                  <CardTitle tag="h3">763,215</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </NavLink>
          </Col>
          <Col lg="4">
            <NavLink href="/admin/teachers">
              <Card className="card-chart">
                <CardHeader>
                  <h1>Teachers</h1>
                  <CardTitle tag="h3">350</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </NavLink>
          </Col>
          <Col lg="4">
            <NavLink href="/admin/all-classes">
              <Card className="card-chart">
                <CardHeader>
                  <h1>All Classes </h1>
                  <CardTitle tag="h3">350</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
