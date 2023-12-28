import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EntrenceForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <Container >
            <div class="mt-3">Присоединяйтесь к изучению языков вместе с нами!</div>
            <Form onSubmit={handleSubmit}>
                <Form.Group class="mt-5">
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div class="mt-3">

               

                <Button variant="primary" type="submit">
                    Войти
                </Button>
                </div>
            </Form>
        </Container>
    );
};

export default EntrenceForm;