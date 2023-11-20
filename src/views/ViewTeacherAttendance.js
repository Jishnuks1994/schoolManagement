import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAllTeacherAttendanceApi } from "services/allApi";

function ViewTeacherAttendance() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([]);

  const onChange = (date) => {
    setDate(date);
    // console.log(date);
  };
  const calanderShow = () => {
    handleShow();
  };

  const viewTeacherAttendnace = async () => {
    const body = { date: date.toLocaleDateString() };
    try {
      const teacherAttendance = await getAllTeacherAttendanceApi(body);
      if (
        teacherAttendance &&
        teacherAttendance.data.attendanceRecords
      ) {
        setAttendance(teacherAttendance.data.attendanceRecords);
      } else {
        setAttendance([]); // Reset attendance to an empty array when no data available
      }
    } catch (error) {
      console.error("Error fetching teacher attendance:", error);
      setAttendance([]); // Reset attendance to an empty array on error
    }
  };

//   const changeDate=(e)=>{
//     const data=e.target.value

//   }

//   const editTeacherAttendance=async()=>{

//   }

  useEffect(() => {
    calanderShow();
    viewTeacherAttendnace();
  }, [date]);

  return (
    <div className="content">
      <Container>
        <div className="my-2 text-center">
          <Button onClick={handleShow}>Change Date</Button>
          <p className="my-3">Date: {date.toDateString()}</p>
        </div>

        {attendance.length>0 ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((record, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{record.teacher_id}</td>
                    <td>
                      <Form.Select
                        aria-label="Default select example"
                        className="form-control"
                      >
                        <option>{record.present}</option>
                        <option value="present" style={{background:"green",color:'black'}}>Present</option>
                        <option value="absent" style={{background:"red",color:'black'}}>Absent</option>
                      </Form.Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="mt-5 p-5 text-center "><h1>No Teacher Attendance Found for {date.toDateString()}</h1></div>
        )}
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
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              viewTeacherAttendnace();
            }}
          >
            Set Date
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewTeacherAttendance;
