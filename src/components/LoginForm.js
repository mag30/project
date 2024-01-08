import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className='about p-3 rounded-2'>
                <Form.Group className="mb-3">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Войти
                </Button>
            </Form>
        </Container>
    );
};

export default LoginForm;