import React, { Component, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Test(props){
    return <div className="App1" class="pb-4">
   
    <h2>{props.name}</h2> 
    <h3>{props.question} </h3> 

    <Form.Check 
    
    name={props.name}
                type="radio"
                id={'1'}
                label={props.label1}
            />

    <Form.Check 
    name={props.name}
                type="radio"
                id={'2'}
                label={props.label2}
            />

    <Form.Check 
    name={props.name}
                type="radio"
                id={'3'}
                label={props.label3}
            />
 
    <Button variant="secondary" type="submit">Ответить</Button>
  </div>
}


export default Test