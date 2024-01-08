
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
            { englishWord: 'Cat', translation: 'Кошка' },
            { englishWord: 'Dog', translation: 'Собака' },
            { englishWord: 'Rabbit', translation: 'Кролик' },
            { englishWord: 'Ice cream', translation: 'Мороженое' },
            { englishWord: 'Bear', translation: 'Медведь' },
            { englishWord: 'Beer', translation: 'Пиво' },
            { englishWord: 'Desert', translation: 'Пустыня' },
            { englishWord: 'Dessert', translation: 'Десерт' }
        
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
                            {index != 0 &&
                                <Image src={r_left} fluid onClick={decIndex}/>
                            }
                        </Col>
                        <Col sm={7}>
                            <EnglishCard
                                key={index}
                                englishWord={words[index].englishWord}
                                translation={words[index].translation}
                            />
                        </Col>
                        <Col>
                            {index < words.length-1 &&
                            <Image src={r_rigth} fluid onClick={incIndex}/>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}


