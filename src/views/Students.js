import React, { useEffect } from 'react'
import { Button, CardHeader, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Calendar from 'react-calendar';
import Form from 'react-bootstrap/Form';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-bootstrap/Modal';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';







function Students() {

  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [reg, setReg] = useState(false);
  const handleShowReg = () => setReg(true);
  const handleCloseReg = () => setReg(false);

  const progressCard = () => {
    navigate('/admin/progress-card')
  }
  const viewAllProgressCard = () => {
    navigate('/admin/students/progress-card-all')
  }



  const [date, setDate] = useState(new Date())
  console.log(date);
  const onChange = date => {
    setDate(date)
  }

  //----------------------------------------------------------------------------------------------------
  //add form validation and function
  const [addImage, setAddImage] = useState("")

  const insertImage = (e) => {
    // console.log(e.target);
    setAddImage(e.target.files[0])

  }

  // state to hold image preview url
  const [imagePreview, setImagePreview] = useState("")

  const [nameValid, setNameValid] = useState(true)
  const [regValid, setRegValid] = useState(true)
  const [dobValid, setDobValid] = useState(true)
  const [mobileValid, setMobileValid] = useState(true)
  const [guardian_nameValid, setGuardian_nameValid] = useState(true)
  const [blood_typeValid, setBlood_typeValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [addressValid, setAddressValid] = useState(true)

  const [inputs, setInputs] = useState({
    user_name: "",
    reg_no: "",
    dob: "",
    class: "",
    guardian_name: "",
    blood_type: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    address: ""
  })



  const setData = (e) => {
    const { value, name } = e.target
    if (name == "user_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setNameValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setNameValid(false)
      }
    }
    if (name == "guardian_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setGuardian_nameValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setGuardian_nameValid(false)
      }
    }
    if (name == "address") {
      if (value.match(/^[a-zA-Z0-9:; ]+$/)) {
        setAddressValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setAddressValid(false)
      }
    } 
    if (name == "blood_type") {
      if (value.match(/^[a-zA-Z-+]+$/)) {
        setBlood_typeValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setBlood_typeValid(false)
      }
    }
    if (name == "dob") {
      if (value.match(/^[0-9-]+$/)) {
        setDobValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setDobValid(false)
      }
    }
    if (name == "mobile") {
      if (value.match(/^[0-9]{10,12}$/)) {
        setMobileValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setMobileValid(false)
      }
    }
    if (name == "reg_no") {
      if (value.match(/^[0-9]+$/)) {
        setRegValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setRegValid(false)
      }
    }
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9!@#$%&*]+$/)) {
        setPasswordValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setPasswordValid(false)
      }
    }
    if (name == "email") {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }
    }
    if (name == 'gender') {
      setInputs({ ...inputs, [name]: value })
    }
    if (name == 'class') {
      setInputs({ ...inputs, [name]: value })
    }

    // console.log(inputs);

  }



  const studentAdd = async (e) => {
    e.preventDefault()
    const { user_name, gender, salary, email, password, mobile, addImage, subject } = inputs
    //header (the body data contain file type content)
    const headerConfig = {
      "Content-Type": "multipart/form-data"
    }

    //body data as formData : reason:-(the body data contain file type content)
    const data = new FormData()

    //appending datas
    data.append("name", user_name)
    data.append("mobile", mobile)
    data.append("subject", subject)
    data.append("salary", salary)
    data.append("gender", gender)
    data.append("email", email)
    data.append("password", password)
    data.append("image", addImage)



  }
  //-----------------------------------------------------------------------------------------------

  //edit form validation and function
  const [editImage, setEditImage] = useState("")

  const insertEditImage = (e) => {
    // console.log(e.target);
    setEditImage(e.target.files[0])


  }

  // state to hold image preview url
  const [editImagePreview, setEditImagePreview] = useState("")

  const [editNameValid, setEditNameValid] = useState(true)
  const [editRegValid, setEditRegValid] = useState(true)
  const [editDobValid, setEditDobValid] = useState(true)
  const [editMobileValid, setEditMobileValid] = useState(true)
  const [editGuardian_nameValid, setEditGuardian_nameValid] = useState(true)
  const [editBlood_typeValid, setEditBlood_typeValid] = useState(true)
  const [editEmailValid, setEditEmailValid] = useState(true)
  const [editPasswordValid, setEditPasswordValid] = useState(true)
  const [editAddressValid, setEditAddressValid] = useState(true)

  const [editInputs, setEditInputs] = useState({
    user_name: "",
    reg_no: "",
    dob: "",
    class: "",
    guardian_name: "",
    blood_type: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    address: ""
  })



  const editData = (e) => {
    const { value, name } = e.target
    if (name == "user_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditNameValid(true)
        setEditInputs({ ...editInputs, [name]: value })

      }
      else {
        setEditNameValid(false)
      }
    }
    if (name == "guardian_name") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setEditGuardian_nameValid(true)
        setEditInputs({ ...editInputs, [name]: value })

      }
      else {
        setEditGuardian_nameValid(false)
      }
    }
    if (name == "address") {
      if (value.match(/^[a-zA-Z0-9:; ]+$/)) {
        setEditAddressValid(true)
        setEditInputs({ ...editInputs, [name]: value })

      }
      else {
        setEditAddressValid(false)
      }
    } 
    if (name == "blood_type") {
      if (value.match(/^[a-zA-Z-+]+$/)) {
        setEditBlood_typeValid(true)
        setEditInputs({ ...editInputs, [name]: value })

      }
      else {
        setEditBlood_typeValid(false)
      }
    }
    if (name == "dob") {
      if (value.match(/^[0-9-]+$/)) {
        setEditDobValid(true)
        setEditInputs({ ...editInputs, [name]: value })

      }
      else {
        setEditDobValid(false)
      }
    }
    if (name == "mobile") {
      if (value.match(/^[0-9]{10,12}$/)) {
        setEditMobileValid(true)
        setEditInputs({ ...editInputs, [name]: value })
      }
      else {
        setEditMobileValid(false)
      }
    }
    if (name == "reg_no") {
      if (value.match(/^[0-9]+$/)) {
        setEditRegValid(true)
        setEditInputs({ ...editInputs, [name]: value })
      }
      else {
        setEditRegValid(false)
      }
    }
    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9!@#$%&*]+$/)) {
        setEditPasswordValid(true)
        setEditInputs({ ...editInputs, [name]: value })
      }
      else {
        setEditPasswordValid(false)
      }
    }
    if (name == "email") {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEditEmailValid(true)
        setEditInputs({ ...editInputs, [name]: value })
      }
      else {
        setEditEmailValid(false)
      }
    }
    if (name == 'gender') {
      setEditInputs({ ...editInputs, [name]: value })
    }
    if (name == 'class') {
      setEditInputs({ ...editInputs, [name]: value })
    }

    // console.log(editInputs);

  }



  const teacherEdit = async (e) => {
    e.preventDefault()
    const { user_name, gender, salary, email, password, mobile, addImage, subject } = inputs
    //header (the body data contain file type content)
    const headerConfig = {
      "Content-Type": "multipart/form-data"
    }

    //body data as formData : reason:-(the body data contain file type content)
    const data = new FormData()

    //appending datas
    data.append("name", user_name)
    data.append("mobile", mobile)
    data.append("subject", subject)
    data.append("salary", salary)
    data.append("gender", gender)
    data.append("email", email)
    data.append("password", password)
    data.append("image", editImage)



  }
  //-----------------------------------------------------------------------------------------------
  useEffect(() => {

    if (addImage) {
      // console.log(URL.createObjectURL(image));
      setImagePreview(URL.createObjectURL(addImage))
    }
    if (editImage) {
      // console.log(URL.createObjectURL(image));
      setEditImagePreview(URL.createObjectURL(editImage))
    }

    


  }, [addImage,editImage])

  return (
    <div className="content">


      <Container>
        <Row>
          <Col className='p-3' lg={6}>
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

            <Row className='p-2'> <Calendar className='col-12' onChange={onChange} value={date} /></Row>



          </Col>
          <Col className='p-3 text-center' lg={6} >
            <div><NavLink onClick={handleShowReg}>
              <Card className='bg-info' >
                <CardHeader>
                  <Row className=" me-auto">
                    <Col><h3 className='text-white'>Add Student  <i class="fa-solid fa-user-plus fa-sm"></i> </h3></Col>
                  </Row>
                </CardHeader>
              </Card>
            </NavLink></div>

            <div><a href='/admin/students/progress-card-all'>
              <Card className='bg-info'>
                <CardHeader>
                  <Row className=" me-auto">
                    <Col><h3 className='text-white'>View Progress Card  <i class="fa-regular fa-address-card"></i></h3></Col>
                  </Row>
                </CardHeader>
              </Card>
            </a></div>
          </Col>

        </Row>

        <Row>
          <Col>
            <div className='text-center mb-3 '>
              <h3>{date.toDateString()}</h3>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Guardian Name</th>
                  <th>Phone Number</th>
                  <th>Profile</th>
                  <th>Progress Card</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><Button onClick={handleShow}><i class="fa-regular fa-user fa-xl"></i></Button></td>
                  <td><Button onClick={progressCard}><i class="fa-solid fa-clipboard-list fa-xl"></i></Button></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>ajd</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>


      </Container>

      {/* modal form for add student details */}
      <Modal show={reg} onHide={handleCloseReg}>
        <Modal.Header>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <div className='text-center'>
            <img src={imagePreview ? imagePreview : "https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg"} style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt="profile_pic" />

          </div>
          <hr />
          <div className='mx-5'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name='user_name'
                  className='text-dark' type="text" />
              </Form.Group>
              {!nameValid &&
                <div>
                  <p className='text-danger'>Includes Letters only</p>
                </div>}
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


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Register Number</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name='reg_no' className='text-dark' type="text" />
              </Form.Group>
              {!regValid &&
                <div>
                  <p className='text-danger'>Includes Numbers only</p>
                </div>}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Select Class</Form.Label>
                <Form.Select onChange={(e) => setData(e)} name='class' className='form-control' aria-label="Default select example">
                  <option disabled>Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Form.Group>
              


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="dob"
                  className='text-dark' type="date" />
              </Form.Group>
              {!dobValid &&
                <div>
                  <p className='text-danger'>Includes Numbers only</p>
                </div>}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Guardian Name</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="guardian_name"
                  className='text-dark' type="text" />
              </Form.Group>

              {!guardian_nameValid &&
                <div>
                  <p className='text-danger'>Includes letters only</p>
                </div>}

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="mobile"
                  className='text-dark' type="text" />
              </Form.Group>
              {!mobileValid &&
                <div>
                  <p className='text-danger'>Includes Numbers only (10-12)</p>
                </div>}

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="email"
                  className='text-dark' type="text" />
              </Form.Group>
              {!emailValid &&
                <div>
                  <p className='text-danger'>Invalid Email Address</p>
                </div>}

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
            {!passwordValid &&
              <div>
                <p className='text-danger'>Invalid format for Password</p>
              </div>}

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Blood Type</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="blood_type"
                  className='text-dark' type="text" />
              </Form.Group>
              {!blood_typeValid &&
                <div>
                  <p className='text-danger'>Includes Blood Type only </p>
                </div>}

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Choose image to change</Form.Label>
                <Form.Control
                  onChange={(e) => insertImage(e)}
                  className='text-dark' type="file" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) => setData(e)}
                  name="address" className='text-dark' as="textarea" rows={8} />
              </Form.Group>
              {!addressValid &&
                <div>
                  <p className='text-danger'>Includes Letters & numbers only</p>
                </div>}

            </Form>

          </div>
          <hr />

        </Modal.Body>
        <Modal.Footer className='px-3 mb-3'>
          <Button variant="danger" onClick={handleCloseReg}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseReg}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal form for view/edit student details */}
      <Modal show={show} onHide={handleClose}>

      <Modal.Body>

<div className='text-center'>
  <img src={editImagePreview ? editImagePreview : "https://i.postimg.cc/wv8r88nd/female-student-graduation-avatar-profile-vector-12055265.jpg"} style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt="profile_pic" />

</div>
<hr />
<div className='mx-5'>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name='user_name'
        className='text-dark' type="text" />
    </Form.Group>
    {!editNameValid &&
      <div>
        <p className='text-danger'>Includes Letters only</p>
      </div>}
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


    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Register Number</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name='reg_no' className='text-dark' type="text" />
    </Form.Group>
    {!editRegValid &&
      <div>
        <p className='text-danger'>Includes Numbers only</p>
      </div>}

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Select Class</Form.Label>
      <Form.Select onChange={(e) => editData(e)} name='class' className='form-control' aria-label="Default select example">
        <option disabled>Select Class</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </Form.Group>
    


    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="dob"
        className='text-dark' type="date" />
    </Form.Group>
    {!editDobValid &&
      <div>
        <p className='text-danger'>Includes Numbers only</p>
      </div>}

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Guardian Name</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="guardian_name"
        className='text-dark' type="text" />
    </Form.Group>

    {!editGuardian_nameValid &&
      <div>
        <p className='text-danger'>Includes letters only</p>
      </div>}

    <Form.Group className="mb-3 " controlId="formBasicPassword">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="mobile"
        className='text-dark' type="text" />
    </Form.Group>
    {!editMobileValid &&
      <div>
        <p className='text-danger'>Includes Numbers only (10-12)</p>
      </div>}

      <Form.Group className="mb-3 " controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="email"
        className='text-dark' type="text" />
    </Form.Group>
    {!editEmailValid &&
      <div>
        <p className='text-danger'>Invalid Email Address</p>
      </div>}

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
  {!editPasswordValid &&
    <div>
      <p className='text-danger'>Invalid format for Password</p>
    </div>}

    <Form.Group className="mb-3 " controlId="formBasicPassword">
      <Form.Label>Blood Type</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="blood_type"
        className='text-dark' type="text" />
    </Form.Group>
    {!editBlood_typeValid &&
      <div>
        <p className='text-danger'>Includes Blood Type only </p>
      </div>}

    <Form.Group className="mb-3 " controlId="formBasicPassword">
      <Form.Label>Choose image to change</Form.Label>
      <Form.Control
        onChange={(e) => insertEditImage(e)}
        className='text-dark' type="file" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control
        onChange={(e) => editData(e)}
        name="address" className='text-dark' as="textarea" rows={8} />
    </Form.Group>
    {!editAddressValid &&
      <div>
        <p className='text-danger'>Includes Letters & numbers only</p>
      </div>}

  </Form>

</div>
<hr />

</Modal.Body>
        <Modal.Footer className='px-3 mb-3'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>





    </div>
  )
}

export default Students