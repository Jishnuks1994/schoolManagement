import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Payslip() {
  return (
    <div class="content">
      <h2 className="text-center">Salary Slip</h2>

      <Container className="mt-5">
        <div>
          <Row className="mx-auto">
            <Col className="col-6">
              <div>
                <strong>Name:</strong>
              </div>
              <div>
                <strong>Subject:</strong>
              </div>
            </Col>
            <Col className="col-6">
              <div>
                <strong>Total Number of Working Days: 30</strong>
              </div>
              <div>
                <strong>Paid leaves: 1</strong>
              </div>
              <div>
                <strong>Unpaid leaves: 2</strong>
              </div>
            </Col>
          </Row>
          <hr />

          <div>
            <Table striped hover>
              <thead>
                <tr>
                  <th>Earnings</th>
                  <th>Amount</th>
                  <th>Deductions</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Pay</td>
                  <td>10000</td>
                  <td>Provident Fund</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Professional Tax</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td> </td>
                  <td></td>
                  <td>Deduction on Leaves</td>
                  <td>667</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Salary:</strong>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>8633</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="text-right">
          <Button>Download Slip</Button>
        </div>
      </Container>
    </div>
  );
}

export default Payslip;
