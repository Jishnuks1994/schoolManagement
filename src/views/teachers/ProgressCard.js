import React from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function ProgressCard() {
  return (
    <div>
      <Container className="my-5 pt-5">
        <Table striped="columns border text-center">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>English</th>
              <th>Hindi</th>
              <th>Maths</th>
              <th>Science</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Form.Control
                  aria-describedby="basic-addon1"
                  value={"Mid Term"}
                />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"35"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"40"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"45"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"43"} />
              </td>
              <td>
                <Button>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Form.Control
                  aria-describedby="basic-addon1"
                  value={"Annual Exam"}
                />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"38"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"42"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"43"} />
              </td>
              <td>
                <Form.Control aria-describedby="basic-addon1" value={"45"} />
              </td>
              <td>
                <Button>
                  <i class="fa-solid fa-pen-to-square"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="mt-5">
          <Table striped="columns border">
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>English</th>
                <th>Hindi</th>
                <th>Maths</th>
                <th>Science</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Form.Control
                    aria-describedby="basic-addon1"
                    placeholder="Exam Name"
                  />
                </td>
                <td>
                  <Form.Control aria-describedby="basic-addon1" />
                </td>
                <td>
                  <Form.Control aria-describedby="basic-addon1" />
                </td>
                <td>
                  <Form.Control aria-describedby="basic-addon1" />
                </td>
                <td>
                  <Form.Control aria-describedby="basic-addon1" />
                </td>
              </tr>
            </tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-right">
                <Button>Submit</Button>
              </td>
            </tr>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default ProgressCard;
