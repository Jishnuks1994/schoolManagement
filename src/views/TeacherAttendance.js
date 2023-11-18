import React, { useEffect, useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import { getAllTeachersApi } from "services/allApi";
import { teacherAttendanceApi } from "services/allApi";

function TeacherAttendance() {
  const [show, setShow] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  const calanderShow = () => {
    handleShow();
  };

  const fetchTeachers = async () => {
    try {
      const teachersData = await getAllTeachersApi();
      setTeachers(teachersData.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    calanderShow();
    fetchTeachers();
  }, []);

  const takeAttendance = async () => {
    const body = {
      date,
      attendanceRecords,
    };
    const result = await teacherAttendanceApi(body);
    if (result.status >= 200 && result.status < 300) {
      console.log(result);
    }

    handleClose();
  };

  const handleAttendanceChange = (e) => {
    const { value, name } = e.target;

    // Check if the attendance record for this teacher already exists in the state
    const existingRecordIndex = attendanceRecords.findIndex(
      (record) => record.teacherID === name
    );

    if (existingRecordIndex !== -1) {
      // If the record exists, update it
      const updatedRecords = [...attendanceRecords];
      updatedRecords[existingRecordIndex] = {
        ...updatedRecords[existingRecordIndex],
        present: value,
      };
      setAttendanceRecords(updatedRecords);
    } else {
      // If the record doesn't exist, add a new record
      setAttendanceRecords([
        ...attendanceRecords,
        {
          teacherID: name,
          present: value,
        },
      ]);
    }
  };

  return (
    <div className="content">
      <Container className="my-5 pt-5 text-center">
        <div className="my-2">
          <Button onClick={handleShow}>Change Date</Button>
          <p className="my-3">Date: {date.toDateString()}</p>
        </div>
        <Col lg={6} className="mx-auto">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Attandance</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td className="text-center">
                    <Form.Select
                      name={teacher._id}
                      onChange={(e) => handleAttendanceChange(e)}
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option className="text-dark">Take Attendance</option>
                      <option
                        style={{ background: "#0bad09", fontSize: "11px" }}
                        className=" text-dark"
                        value="present"
                      >
                        Present
                      </option>
                      <option
                        style={{ background: "#f2463a" }}
                        className=" text-dark"
                        value="absent"
                      >
                        Absent
                      </option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="text-right">
                  <Button onClick={takeAttendance}>Submit</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>

      {/* modal for selecting date */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <b>Select a Date</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Calendar onChange={onChange} value={date} />
          </div>
        </Modal.Body>
        <Modal.Footer className="mx-4 mb-4">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Set Date
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TeacherAttendance;
