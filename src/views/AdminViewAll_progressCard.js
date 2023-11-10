import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function AdminViewAll_progressCard() {
  return (
    <div className="content">
         <Container className='mt-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>English</th>
                            <th>Hindi</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                            <td></td>
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
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
           </Container>
    </div>
  )
}

export default AdminViewAll_progressCard