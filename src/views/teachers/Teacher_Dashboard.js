import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import { getAllClassesApi } from "services/allApi";

function Teacher_Dashboard() {
  const [classes, setClasses] = useState([]);

  const getStudent = async () => {
    const result = await getAllClassesApi();
    if (result) {
      setClasses(result.data);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className="content">
      <Container className="mb-5">
        <Row>
          {classes.map((classItem, index) => (
            <Col lg="4" key={index}>
              <NavLink href={`/teacher/student-details/${classItem.id}`}>
                <Card
                  className="hov card-chart"
                  style={{
                    borderRadius: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <CardHeader>
                    <Row className=" me-auto">
                      <Col>
                        <h1 className="text-center">
                          <b>
                            {classItem.standard} {classItem.division}
                          </b>
                        </h1>
                      </Col>
                    </Row>

                    <CardTitle tag="h3">
                      Strength: {classItem.strength}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>{/* Additional content here if needed */}</CardBody>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

<style></style>;

export default Teacher_Dashboard;
