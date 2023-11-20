import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { teacherAddApi } from "services/allApi";
import { getAllTeachersApi } from "services/allApi";
import { showTeacherApi } from "services/allApi";
import BASE_URL from "services/baseUrl";
import Spinner from "react-bootstrap/Spinner";
import { editTeacherApi } from "services/allApi";

function Teachers(props) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);

  const handleEditClose = () => setEdit(false);
  const handleEditShow = () => setEdit(true);

  const whatsappLink = `https://wa.me/${1234567890}`;

  const attendance = () => {
    navigate("/admin/teachers/attendance");
  };
  const viewAttendance = () => {
    navigate("/admin/teachers/view-attendance");
  };

  //state to add individual teacher data
  const [teacher, setTeacher] = useState({});

  const showTeacher = async (id) => {
    // console.log(id);
    const result = await showTeacherApi(id);
    // console.log(id);
    // console.log(result.data);
    setTeacher(result.data);
    // console.log(result.data);
    setEditImagePreview(`${BASE_URL}/uploads/${result.data.image}`);
    // console.log(editImagePreview);
    handleEditShow();
  };

  //----------------------------------------------------------------------------------------------------
  //add form validation and function
  const [addImage, setAddImage] = useState("");

  const insertImage = (e) => {
    // console.log(e.target.files[0]);
    setAddImage(e.target.files[0]);
  };

  // state to hold image preview url
  const [imagePreview, setImagePreview] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [mobileValid, setMobileValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [salaryValid, setSalaryValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [inputs, setInputs] = useState({
    user_name: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    subject: "",
    salary: "",
  });

  const setData = (e) => {
    const { value, name } = e.target;
    if (name == "user_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setNameValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setNameValid(false);
      }
    }
    if (name == "subject") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setSubjectValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setSubjectValid(false);
      }
    }
    if (name == "mobile") {
      if (value.match(/^[0-9]{10,12}$/)) {
        setMobileValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setMobileValid(false);
      }
    }
    if (name == "salary") {
      if (value.match(/^[0-9]+$/)) {
        setSalaryValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setSalaryValid(false);
      }
    }
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9!@#$%&*]+$/)) {
        setPasswordValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setPasswordValid(false);
      }
    }
    if (name == "email") {
      if (
        value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailValid(true);
        setInputs({ ...inputs, [name]: value });
      } else {
        setEmailValid(false);
      }
    }
    if (name == "gender") {
      setInputs({ ...inputs, [name]: value });
    }

    // console.log(inputs);
  };

  const teacherAdd = async (e) => {
    e.preventDefault();
    const { user_name, gender, salary, email, password, mobile, subject } =
      inputs;
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
    data.append("image", addImage);

    // console.log(user_name, gender, salary, email, password, mobile, addImage, subject);
    //api
    const result = await teacherAddApi(data, headerConfig);

    if (result.status >= 200 && result.status < 300) {
      //clear data
      setAddImage("");

      setInputs({
        ...inputs,
        user_name: "",
        email: "",
        password: "",
        mobile: "",
        gender: "",
        subject: "",
        salary: "",
      });
      // console.log(result.data);
      handleClose();
      alert(`Teacher Added Successfully`);
    } else {
      // alert(result.response)
      console.log(result);
    }
  };
  //-----------------------------------------------------------------------------------------------

  //edit form validation and function
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

  const editData = (e) => {
    const { value, name } = e.target;
    const updatedTeacher = { ...teacher };

    if (name == "user_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditNameValid(true);
        // setTeacher({ ...teacher, [name]: value });
        updatedTeacher[name] = value;
        setTeacher(updatedTeacher);
      } else {
        setEditNameValid(false);
      }
    }
    if (name == "subject") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditSubjectValid(true);
        setTeacher({ ...setTeacher, [name]: value });
      } else {
        setEditSubjectValid(false);
      }
    }
    if (name == "mobile") {
      if (value.match(/^[0-9]{10,12}$/)) {
        setEditMobileValid(true);
        setTeacher({ ...setTeacher, [name]: value });
      } else {
        setEditMobileValid(false);
      }
    }
    if (name == "salary") {
      if (value.match(/^[0-9]+$/)) {
        setEditSalaryValid(true);
        setTeacher({ ...setTeacher, [name]: value });
      } else {
        setEditSalaryValid(false);
      }
    }
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9!@#$%&*]+$/)) {
        setEditPasswordValid(true);
        setTeacher({ ...setTeacher, [name]: value });
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
        setTeacher({ ...setTeacher, [name]: value });
      } else {
        setEditEmailValid(false);
      }
    }
    if (name == "gender") {
      setTeacher({ ...setTeacher, [name]: value });
    }

    console.log(teacher);
  };

  const teacherEdit = async (e) => {
    e.preventDefault();
    const { _id } = teacher._id;
    const {
      user_name,
      gender,
      salary,
      email,
      password,
      mobile,
      addImage,
      subject,
    } = teacher;
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

    try {
      const result = editTeacherApi(_id, data, headerConfig);
      if (result.status >= 200 && result.status < 300) {
        return result.response;
      }
    } catch (error) {
      throw new Error(error.response?.data || error.message);
    }
    handleEditClose();
  };
  //-----------------------------------------------------------------------------------------------

  //state to hold all teachers data
  const [allTeachers, setAllTeachers] = useState([]);
  //function to get all teachers data

  const getAllTeachers = async () => {
    const result = await getAllTeachersApi();
    if (result.status >= 200 && result.status < 300) {
      const sortedTeachers = result.data.sort((a, b) => {
        // Assuming 'name' is the property you want to sort by
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setAllTeachers(sortedTeachers);
    }
  };

  useEffect(() => {
    if (addImage) {
      // console.log(URL.createObjectURL(image));
      setImagePreview(URL.createObjectURL(addImage));
    }
    if (editImage) {
      // console.log(URL.createObjectURL(image));
      setEditImagePreview(URL.createObjectURL(editImage));
    }

    //get all teachers
    getAllTeachers();
  }, [addImage, editImage]);

  return (
    <div className="content">
      <Row className="mt-3">
        <Col className="mb-4">
          <Button onClick={attendance}>Take Attendance</Button>
        </Col>

        <Col className="mb-4">
          <Button onClick={viewAttendance}>View Attendance</Button>
        </Col>

        <Col className="mb-4 text-right">
          <Button color="primay" onClick={handleShow}>
            Add New Staff
          </Button>
        </Col>
      </Row>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Teachers Details</CardTitle>
        </CardHeader>
        <CardBody>
          {allTeachers.length > 0 ? (
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th> Mobile No </th>
                  <th>Salary</th>
                  <th>Edit</th>
                  <th>salary Details</th>
                </tr>
              </thead>
              <tbody>
                {allTeachers.map((i, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.name}</td>
                    <td>{i.subject}</td>
                    <td>
                      <Link to={whatsappLink} target="_blank">
                        {" "}
                        {i.mobile}
                      </Link>
                    </td>
                    <td>{i.salary}</td>
                    <td>
                      {" "}
                      <Button onClick={(e) => showTeacher(i._id)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Button>
                    </td>
                    {/* <td><Link to={`/admin/teachers/edit/${i._id}`}><Button ><i class="fa-solid fa-pen-to-square"></i></Button></Link></td> */}

                    <td>
                      <Link to={`/admin/teachers/payslip/${i._id}`}>
                        <Button>Pay Slip</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h1 className="text-center p-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </h1>
          )}
        </CardBody>
      </Card>

      {/* modal form for adding staff */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              src={
                imagePreview
                  ? imagePreview
                  : "https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg"
              }
              style={{ borderRadius: "50%", height: "100px", width: "100px" }}
              alt="profile_pic"
            />
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="user_name"
                type="text"
                placeholder="Enter Name"
                autoFocus
                required
              />
            </Form.Group>
            <Form>
              {!nameValid && (
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
                      onChange={(e) => setData(e)}
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={(e) => setData(e)}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="mobile"
                type="text"
                placeholder="Enter Number"
                autoFocus
                required=""
              />
            </Form.Group>
            {!mobileValid && (
              <div>
                <p className="text-danger">
                  Includes Numbers only (10-12 Numbers)
                </p>
              </div>
            )}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="subject"
                type="text"
                placeholder="Enter Subject"
                autoFocus
                required
              />
            </Form.Group>
            {!subjectValid && (
              <div>
                <p className="text-danger">Includes Letters only</p>
              </div>
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="salary"
                type="text"
                placeholder="Enter Salary"
                autoFocus
                required
              />
            </Form.Group>
            {!salaryValid && (
              <div>
                <p className="text-danger">Includes Numbers only</p>
              </div>
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                onChange={(e) => insertImage(e)}
                type="file"
                autoFocus
              />
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="email"
                type="email"
                placeholder="Enter Email"
                autoFocus
                required
              />
            </Form.Group>
            {!emailValid && (
              <div>
                <p className="text-danger">Invalid format for email id</p>
              </div>
            )}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setData(e)}
                name="password"
                type="text"
                placeholder="Enter Password"
                autoFocus
                required
              />
            </Form.Group>
            {!passwordValid && (
              <div>
                <p className="text-danger">Invalid format for Password</p>
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer className="px-3 pb-3">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={teacherAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal form for editing staff */}
      {teacher ? (
        <Modal show={edit} onHide={handleEditClose}>
          <Modal.Header>
            <Modal.Title>Edit Staff</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="user_name"
                  type="text"
                  autoFocus
                  required
                  value={teacher.name}
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
                        checked={teacher.gender === "male"}
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={(e) => editData(e)}
                        checked={teacher.gender === "female"}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Form>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="mobile"
                  type="text"
                  placeholder="Enter Number"
                  autoFocus
                  required=""
                  value={teacher.mobile}
                />
              </Form.Group>
              {!editMobileValid && (
                <div>
                  <p className="text-danger">
                    Includes Numbers only (10-12 Numbers)
                  </p>
                </div>
              )}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                  autoFocus
                  required
                  value={teacher.subject}
                />
              </Form.Group>
              {!editSubjectValid && (
                <div>
                  <p className="text-danger">Includes Letters only</p>
                </div>
              )}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="salary"
                  type="text"
                  placeholder="Enter Salary"
                  autoFocus
                  required
                  value={teacher.salary}
                />
              </Form.Group>
              {!editSalaryValid && (
                <div>
                  <p className="text-danger">Includes Numbers only</p>
                </div>
              )}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Add Image</Form.Label>
                <Form.Control
                  onChange={(e) => insertEditImage(e)}
                  type="file"
                  autoFocus
                  required
                />
              </Form.Group>
              <hr />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  autoFocus
                  required
                  value={teacher.email}
                />
              </Form.Group>
              {!editEmailValid && (
                <div>
                  <p className="text-danger">Invalid format for email id</p>
                </div>
              )}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => editData(e)}
                  name="password"
                  type="text"
                  placeholder="Enter Password"
                  autoFocus
                  required
                  value={teacher.password}
                />
              </Form.Group>
              {!editPasswordValid && (
                <div>
                  <p className="text-danger">Invalid format for Password</p>
                </div>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer className="px-3 pb-3">
            <Button variant="danger" onClick={handleEditClose}>
              Close
            </Button>
            <Button variant="primary" onClick={teacherEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <h1>Teacher Not Found</h1>
      )}
    </div>
  );
}

export default Teachers;
