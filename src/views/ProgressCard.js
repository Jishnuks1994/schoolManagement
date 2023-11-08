import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ProgressCardForAdmin() {
  return (
    <div class='content'>
        <Container className='px-5'>
          <div className='text-center'>
            <h3>Progress Card Of "Name"</h3>
          </div>
        <Table  striped="columns border text-center">
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
            <td>Mid Term</td>
            <td>35</td>
            <td>40</td>
            <td>45</td>
            <td>43</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Annual Exam</td>
            <td>38</td>
            <td>42</td>
            <td>43</td>
            <td>45</td>
          </tr>
        </tbody>
      </Table>
        </Container>
       
    </div>
  )
}

export default ProgressCardForAdmin