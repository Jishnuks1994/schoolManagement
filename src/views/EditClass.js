import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import { Container } from "reactstrap";
import { editClassApi } from "services/allApi";
import { getAllTeachersApi } from "services/allApi";
import { useNavigate } from "react-router-dom";

function EditClass() {
  const navigate = useNavigate();
  const [allTeachers, setAllTeachers] = useState([]);
  const [teacher, setTeacher] = useState("");
  const params = useParams();
  const [id, setId] = useState("");
  // const id = params.id

  const getAllTeacher = async () => {
    const result = await getAllTeachersApi();
    if (result.status >= 200 && result.status < 300) {
      setAllTeachers(result.data);
      // console.log(result.data);
    }
  };

  const editClass = async () => {
    try {
      if (teacher && id) {
        const requestBody = { teacher, id };
        // console.log('Request Body:', requestBody);

        const result = await editClassApi(requestBody);
        if (result) {
          alert("Teacher Changed");
        } else {
          alert("data not saved");
        }
      } else {
        console.error("Please select a teacher");
      }
    } catch (error) {
      console.error("Error editing class:", error); // Log the error for debugging
      alert("Error editing class. Please try again."); // Display a generic error message
    }
  };

  const goBack = () => {
    navigate("/admin/all-classes");
  };

  useEffect(() => {
    setId(params.id);
    getAllTeacher();
  }, []);

  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
    console.log(id, teacher);
  };

  return (
    <div className="content">
      <Container>
        <div className="text-center">
          <h1>Edit Details</h1>
        </div>
        <Form>
          <Form.Group>
            <Form.Label>Edit Class Teacher</Form.Label>
            <Form.Select
              className="form-control"
              aria-label="Default select example"
              value={teacher}
              onChange={handleTeacherChange}
            >
              <option>Select Class Teacher</option>
              {allTeachers.map((teacher) => (
                <option key={teacher.name} value={teacher.name}>
                  {teacher.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="text-center my-2">
            <Button onClick={goBack} variant="primary" className="mx-2">
              Go Back
            </Button>
            <Button onClick={editClass} variant="primary" type="submit">
              Edit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default EditClass;
