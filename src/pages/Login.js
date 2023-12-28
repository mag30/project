import React, {Component} from 'react'
import LoginForm from "../components/LoginForm";
import { Col, Container, Row } from 'react-bootstrap';
export default class Login extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col/>
                        <Col/>
                        <Col>
                                <LoginForm/>
                        </Col>
                    </Row>
               </Container>
            </div>
        )
    }
}