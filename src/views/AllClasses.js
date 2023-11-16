import React from "react";
import { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { getAllClassesApi } from "services/allApi";

function AllClasses() {
  const navigate = useNavigate();
  const [classesData, setClassesData] = useState([]);

  const addClass = () => {
    navigate("/admin/all-classes/add-new-class");
  };

  const getAllClasses = async () => {
    try {
      const classes = await getAllClassesApi();

      if (classes) {
        const sortedData = classes.data.sort((a, b) => {
          if (a.standard < b.standard) return -1;
          if (a.standard > b.standard) return 1;

          return a.division.localeCompare(b.division);
        });

        setClassesData(sortedData);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useState(() => {
    getAllClasses();
  }, []);

  return (
    <div className="content">
      <Container>
        <Col className="my-3">
          <div className="text-center">
            <Button onClick={addClass}>Add New Class</Button>
          </div>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Division</th>
                <th>Class Teacher</th>
                <th>Number of Students</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {classesData.map((classItem, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{classItem.standard}</td>
                  <td>{classItem.division}</td>
                  <td>{classItem.teacher}</td>
                  <td></td>
                  <td>
                    <Link to={`/admin/all-classes/edit-class/${classItem._id}`}>
                      <Button>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Container>
    </div>
  );
}

export default AllClasses;
