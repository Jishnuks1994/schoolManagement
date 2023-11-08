import FixedPlugin from 'components/FixedPlugin/FixedPlugin';
import Footer from 'components/Footer/Footer'
import AdminNavbar from 'components/Navbars/AdminNavbar'
import React, { useState } from 'react'



import { Form, Button, Container } from 'react-bootstrap'; // Assuming you have React-Bootstrap imported
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('admin'); // Default user type is admin

    const handleLogin = () => {
        // Handle login based on selected user type, email, and password
        console.log(`Logging in as ${userType} with Email: ${email} and Password: ${password}`);
        // You might perform further actions based on the selected user type and credentials
            // navigate="/"+{userType}
            if (userType === 'admin') {
                navigate('/admin'); // Navigating to the '/admin' route for admin login
            } else if (userType === 'teacher') {
                navigate('/teacher'); // Navigating to the '/teacher' route for teacher login
            } else if (userType === 'student') {
                navigate('/student'); // Navigating to the '/student' route for student login
            }
        
    };
    return (
        <div>
            <FixedPlugin></FixedPlugin>
            <div className='row'><AdminNavbar></AdminNavbar></div>
            <div className='mt-5'>
                
                <Container className="login-container col-lg-4 col-md-6">
                    <h2 className='text-center'>Login</h2>
                    <Form>
                        <Form.Group controlId="userType">
                            <Form.Label>Select User Type</Form.Label>
                            <Form.Control style={{fontSize:'16px'}} as="select" value={userType} onChange={(e) => setUserType(e.target.value)}>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className='mt-1' controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='mt-1' controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <div className='text-center'>
                            <Button  className='mt-5 w-75' variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AdminLogin