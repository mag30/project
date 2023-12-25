import React, { Component } from 'react'
import { Button, Container, Navbar, NavbarBrand, NavbarCollapse, Nav, Form, FormControl } from 'react-bootstrap'
import logo from './logo.png';

import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Reg from '../pages/Reg';
import Cards from '../pages/Cards';
import Quiz from '../pages/Quiz';
import Theory from '../pages/Theory';



export default class Header extends Component {

    render() {
        return (
            <>
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
Привет,Наташка!

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                                <Nav.Link href="/">Главная страница</Nav.Link>
                                
                            </Nav>

                                                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                 <Router>
                <Routes>
                        <Route path='/' element={<Reg/>}/>
                    </Routes>
                </Router>
            </>


        )
    }

}
