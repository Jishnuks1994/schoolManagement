import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function EditTeacher() {
  const [editImage, setEditImage] = useState("");

  const insertEditImage = (e) => {
    // console.log(e.target);
    setEditImage(e.target.files[0]);
  };

  // state to hold image preview url
  const [editImagePreview, setEditImagePreview] = useState("");

  const [editNameValid, setEditNameValid] = useState(true);
  const [editMobileValid, setEditMobileValid] = useState(true);
  const [editSubjectValid, setEditSubjectValid] = useState(true);
  const [editSalaryValid, setEditSalaryValid] = useState(true);
  const [editEmailValid, setEditEmailValid] = useState(true);
  const [editPasswordValid, setEditPasswordValid] = useState(true);

  const [editInputs, setEditInputs] = useState({
    user_name: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    subject: "",
    salary: "",
  });

  const editData = (e) => {
    const { value, name } = e.target;
    if (name == "user_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditNameValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditNameValid(false);
      }
    }
    if (name == "subject") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditSubjectValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditSubjectValid(false);
      }
    }
    if (name == "mobile") {
      if (value.match(/^[0-9]{10,12}$/)) {
        setEditMobileValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditMobileValid(false);
      }
    }
    if (name == "salary") {
      if (value.match(/^[0-9]+$/)) {
        setEditSalaryValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditSalaryValid(false);
      }
    }
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9!@#$%&*]+$/)) {
        setEditPasswordValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditPasswordValid(false);
      }
    }
    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEditEmailValid(true);
        setEditInputs({ ...editInputs, [name]: value });
      } else {
        setEditEmailValid(false);
      }
    }
    if (name == "gender") {
      setEditInputs({ ...editInputs, [name]: value });
    }

    console.log(editInputs);
  };

  const teacherEdit = async (e) => {
    e.preventDefault();
    const { user_name, gender, salary, email, password, mobile, subject } =
      editInputs;
    //header (the body data contain file type content)
    const headerConfig = {
      "Content-Type": "multipart/form-data",
    };

    //body data as formData : reason:-(the body data contain file type content)
    const data = new FormData();

    //appending datas
    data.append("name", user_name);
    data.append("mobile", mobile);
    data.append("subject", subject);
    data.append("salary", salary);
    data.append("gender", gender);
    data.append("email", email);
    data.append("password", password);
    data.append("image", editImage);
  };

  //state to add individual teacher data
  const [teacher, setTeacher] = useState();

  const showTeacher = async () => {};
  useEffect(() => {
    if (editImage) {
      // console.log(URL.createObjectURL(image));
      setEditImagePreview(URL.createObjectURL(editImage));
    }
  }, [editImage]);

  return (
    <div class="content">
      <div className="text-center">
        <img
          src={
            editImagePreview
              ? editImagePreview
              : "https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg"
          }
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          alt="profile_pic"
        />
      </div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="user_name"
              type="text"
              placeholder="Enter Name"
              autoFocus
              required
              // value={teacher.name}
            />
          </Form.Group>
          <Form>
            {!editNameValid && (
              <div>
                <p className="text-danger">Includes Letters only</p>
              </div>
            )}

            <Form>
              <Form.Group as={Row} controlId="formHorizontalGender">
                <Form.Label as="legend" column sm={2}>
                  Gender
                </Form.Label>

                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={(e) => editData(e)}
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={(e) => editData(e)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="mobile"
              type="text"
              placeholder="Enter Number"
              autoFocus
              required=""
            />
          </Form.Group>
          {!editMobileValid && (
            <div>
              <p className="text-danger">
                Includes Numbers only (10-12 Numbers)
              </p>
            </div>
          )}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="subject"
              type="text"
              placeholder="Enter Subject"
              autoFocus
              required
            />
          </Form.Group>
          {!editSubjectValid && (
            <div>
              <p className="text-danger">Includes Letters only</p>
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="salary"
              type="text"
              placeholder="Enter Salary"
              autoFocus
              required
            />
          </Form.Group>
          {!editSalaryValid && (
            <div>
              <p className="text-danger">Includes Numbers only</p>
            </div>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Add Image</Form.Label>
            <Form.Control
              onChange={(e) => insertEditImage(e)}
              type="file"
              autoFocus
              required
            />
          </Form.Group>
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="email"
              type="email"
              placeholder="Enter Email"
              autoFocus
              required
            />
          </Form.Group>
          {!editEmailValid && (
            <div>
              <p className="text-danger">Invalid format for email id</p>
            </div>
          )}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => editData(e)}
              name="password"
              type="text"
              placeholder="Enter Password"
              autoFocus
              required
            />
          </Form.Group>
          {!editPasswordValid && (
            <div>
              <p className="text-danger">Invalid format for Password</p>
            </div>
          )}
        </Form>

        <div className="text-center">
          <Button variant="primary">Save Changes</Button>
        </div>
      </Container>
    </div>
  );
}

export default EditTeacher;
