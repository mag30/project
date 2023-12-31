import React, { Component } from 'react'
import { Button, Container, Navbar, NavbarBrand, NavbarCollapse, Nav, Form, FormControl } from 'react-bootstrap'
import logo from './logo.png';

import{BrowserRouter as Router,Route,Link, NavLink} from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <div class="pb-3">
                <Navbar sticky ="top" collapseOnSelect expand="md" bg="dark" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="40"
                                width="40"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="/" >
                            LANGUAGE.GUIDE
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Главная страница</Nav.Link>
                                <Nav.Link href="/About">О нас</Nav.Link>

                            </Nav>

                            <Nav>
                                <Nav.Link href="/registration">
                                    Регистрация
                                </Nav.Link>
                                <Nav.Link href="/login">
                                    Войти
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        )
    }
}
