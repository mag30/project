
import React, {Component, useState} from 'react'
import EnglishCard from "../components/EnglishCard";
import {Col, Container, Image, Row} from "react-bootstrap";
import r_left from "./images/r-left.png"
import r_rigth from "./images/r-rigth.png"

export  default function Cards(){
        const [index, setIndex] = useState(0)

        const words = [
            { englishWord: 'Hello', translation: 'Привет' },
            { englishWord: 'Goodbye', translation: 'До свидания' },
        ];

        let incIndex = () =>{
            if( index !== words.length-1){
                setIndex(index+1)
            }
        }

        let decIndex = () =>{
            if (index !== 0){
                setIndex(index-1)
            }
        }
        return (
            <div className="m-5">
                <Container>
                    <Row>
                        <Col>
                            <Image src={r_left} fluid onClick={decIndex}/>
                        </Col>
                        <Col sm={7}>
                            <EnglishCard
                                key={index}
                                englishWord={words[index].englishWord}
                                translation={words[index].translation}
                            />
                        </Col>
                        <Col>
                            <Image src={r_rigth} fluid onClick={incIndex}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}


