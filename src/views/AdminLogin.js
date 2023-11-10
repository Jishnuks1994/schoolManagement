import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loginApi } from 'services/allApi';
import validator from "validator";

function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('admin'); // Default user type is admin
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        }
        if (!validator.isEmail(email)) {
            errors.email = 'Invalid Email';
            isValid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleLogin = async () => {
        if (validateForm()) {
            // Handle login based on selected user type, email, and password
            // console.log(`Logging in as ${userType} with Email: ${email} and Password: ${password}`);

            if (userType === 'admin') {
                const body = { email, password }
                const result = await loginApi(body)
                if (result.status >= 200 && result.status < 300) {
                    // console.log(result.data.name);
                    localStorage.setItem('name',result.data.name)
                    navigate('/admin');
                    
                }
                else {
                    alert(result.response.data)
                }


            }
            else if (userType === 'teacher') {
                navigate('/teacher');
            }
            else if (userType === 'student') {
                navigate('/student');
            }
        }
    };

    return (
        <div>
            <div className='mt-5'>
                <Container className="login-container col-lg-4 col-md-6">
                    <h2 className='text-center'>Login</h2>
                    <Form>
                        <Form.Group controlId="userType">
                            <Form.Label>Select User Type</Form.Label>
                            <Form.Control style={{ fontSize: '16px' }} as="select" value={userType} onChange={(e) => setUserType(e.target.value)}>
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
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </Form.Group>

                        <Form.Group className='mt-1' controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <small className="text-danger">{errors.password}</small>}
                        </Form.Group>

                        <div className='text-center'>
                            <Button className='mt-5 w-75' variant="primary" onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default AdminLogin;