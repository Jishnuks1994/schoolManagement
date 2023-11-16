import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { classAddApi } from "services/allApi";
import { getAllTeachersApi } from "services/allApi";

function AddNewClasses() {
  const navigate = useNavigate();
  const [newClass, setNewClass] = useState("");
  const [division, setDivision] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [allTeachers, setAllTeachers] = useState([]);

  const getAllTeacher = async () => {
    const result = await getAllTeachersApi();
    if (result.status >= 200 && result.status < 300) {
      setAllTeachers(result.data);
      // console.log(result.data);
    }
  };

  const addClass = async () => {
    try {
      const classData = {
        standard: newClass,
        division: division,
        teacher: classTeacher,
      };

      const response = await classAddApi(classData);

      if (response.status >= 200 && response.status < 300) {
        console.log("Class added successfully!");
      } else {
        console.error("Failed to add class");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  const goBack = () => {
    navigate("/admin/all-classes");
  };

  useEffect(() => {
    getAllTeacher();
  }, []);
  return (
    <div className="content">
      <Container>
        <Col>
          <div className="text-center">
            <h1>Add New Class</h1>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Class</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new class"
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Division</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter division"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Class Teacher</Form.Label>
              <Form.Select
                className="form-control"
                aria-label="Default select example"
                value={classTeacher}
                onChange={(e) => setClassTeacher(e.target.value)}
              >
                <option>Select Class Teacher</option>
                {allTeachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.name}>
                    {teacher.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="text-center my-3">
              <Button onClick={goBack} variant="primary" className="mx-2">
                Go Back
              </Button>
              <Button onClick={addClass} variant="primary" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </div>
  );
}

export default AddNewClasses;
