import React, { Component } from "react";
import { Button, Container, FormControl, NavLink, Navbar, NavbarCollapse, NavbarToggle, Nav, Form } from "react-bootstrap";
import logo from "./logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reg from '../pages/Reg';
import About from '../pages/About';
import Contacts from '../pages/Contacts';


export default class Header extends Component {
    render() {
        const isLoggedIn=false
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"

                                alt="logo"

                            />

                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная страница</Nav.Link>
                                <Nav.Link href="/about">О нас</Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>



                            </Nav>

                            <Form isLoggedIn={false} className='d-flex'>

                            <Button variant="outline-info">Регистрация</Button>
                            </Form>

                        </Navbar.Collapse>
                    </Container>


                </Navbar>
                <Router>
                    <Switch>
                        <Route exect path="/" component={Reg}/>
                        <Route exect path="/about" component={About}/>
                        <Route exect path="/contacts" component={Contacts}/> 
                    </Switch>
                </Router>
            </>
        )
    }
}