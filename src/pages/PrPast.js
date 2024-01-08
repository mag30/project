
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class PrPast extends Component {


    render() {
        return (
           
           <div>
                          <header>

<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark">
    <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4 ">
            <a
                href="/Quiz" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark"

            >
                <i class="fas fa-tachometer-alt fa-fw me-3 mx-auto "></i><span>Артикль</span>
            </a>
            <a href="/PrMG" class=" b list-group-item list-group-item-action py-2 ripple text-light bg-dark " >
                <i class="fas fa-chart-area fa-fw me-3 "></i><span>Модальные глаголы</span>
            </a>

            <a href="/PrPZ" class="b list-group-item list-group-item-action py-2 ripple text-light bg-dark "
            ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
            >
            <a href="/PrSimpleForms" class="b list-group-item list-group-item-action py-2 ripple text-light bg-dark  ">
            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
        </a>
        <a href="/PrPast" class="list-group-item list-group-item-action py-2 ripple active"
        ><i class="fas fa-chart-bar fa-fw me-3 active" ></i><span>Past Forms</span></a
        >
        <a href="/PrFuture" class="b list-group-item list-group-item-action py-2 ripple text-light bg-dark  "
        ><i class="fas fa-globe fa-fw me-3"></i><span>Future Forms</span></a
        >

        </div>
    </div>
</nav>
</header>


<div class="row">
                    <div class="col"></div>
<div class="col-10">
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Past Forms</h1>
        
            < Test name="Задание № 1" question="Выберите верное предложение" label1="She forgot everything she studied at a driving school." label2="First I had taken off my coat, then I went to the bathroom." label3="Kim was dancing when her husband opened the door."
                />
                < Test name="Задание № 2" question="Выберите правильный глагол для предложения: I ... volleyball when the ball hit my head." label1="was playing" label2="played" label3="had played"
                />
                < Test name="Задание № 3" question="Выберите правильный глагол для предложения: His clothes were smudgy because he  painting the walls." label1="finished" label2="had finished" label3="was finished"
                />
                < Test name="Задание № 4" question="Выберите предложение, в котором глагол употреблен неверно"  label1="She looked tired. She had been planting flowers all morning." label2="His clothes were smudgy because he had finished painting the walls." label3="When I was five my parents were buying a piano for me."
                />
                < Test name="Задание № 5" question="Выберите правильный глагол для предложения: He ... the grass for an hour when suddenly the lawn-mower broke down." label1="cut" label2="was cutting" label3="had been cutting"
                />
</div>
</div>
           </div>
        )
    }
    }

