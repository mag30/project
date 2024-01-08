
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class PrPZ extends Component {


    render() {
        return (
           
           <div>
                          <header>

<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark">
    <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4 ">
            <a
                href="/Quiz" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark  "

            >
                <i class="fas fa-tachometer-alt fa-fw me-3 mx-auto "></i><span>Артикль</span>
            </a>
            <a href="/PrMG" class=" b list-group-item list-group-item-action py-2 ripple text-light bg-dark " >
                <i class="fas fa-chart-area fa-fw me-3 "></i><span>Модальные глаголы</span>
            </a>

            <a href="/PrPZ" class="list-group-item list-group-item-action py-2 ripple active"
            ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
            >
            <a href="/PrSimpleForms" class="b list-group-item list-group-item-action py-2 ripple text-light bg-dark  ">
            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
        </a>
        <a href="/PrPast" class="b list-group-item list-group-item-action py-2 ripple text-light bg-dark "
        ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Past Forms</span></a
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
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Пассивный залог</h1>
        
            < Test name="Задание № 1" question="Выберете верное предложение предложение" label1="The news programme watched by millions of people every day." label2="The Mona Liza was painted by Leonardo da Vinchi." label3="The new cinema will be built next year."
                />
                < Test name="Задание № 2" question="Выберите правильный глагол для предложения: The book ... by Hardy." label1="write" label2="wrote" label3="written"
                />
                < Test name="Задание № 3" question="Выберите правильный глагол для предложения: I ... last Friday." label1="arrived" label2="arrive" label3="was arrived"
                />
                < Test name="Задание № 4" question="Выберите неправильное предложение"  label1="The room will be cleaned later." label2="Tom has lost his key." label3="London visited by hundreds of tourists every year."
                />
                < Test name="Задание № 5" question="Выберите предложение без пассивного залога" label1="English (speak) all over the world." label2="She (invite) me to a party." label3="My dress is clean now. It (wash)."
                />
</div>
</div>
           </div>
        )
    }
    }

