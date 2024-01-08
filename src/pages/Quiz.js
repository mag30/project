
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class Quiz extends Component {


    render() {
        return (
           
           <div>
                          <header>

<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark">
    <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4 ">
            <a
                href="/Quiz" class="list-group-item list-group-item-action py-2 ripple active"

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
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Артикль</h1>
        
            < Test name="Задание № 1" question="Выберите предложение, в котором артикль употреблен верно" label1="My aunt and my uncle are teachers." label2="There is a cheese on the plate." label3="Next to the window there is door."
                />
                < Test name="Задание № 2" question="Выберите правильный артикль для предложения: I need ... answer." label1="an" label2="the" label3="-"
                />
                < Test name="Задание № 3" question="Выберите правильный артикль для предложения: ... capital of the USA is Washington." label1="A" label2="The" label3="-"
                />
                < Test name="Задание № 4" question="Выберите предложение, в котором артикль употреблен неверно"  label1="There is a lamp on the desk." label2="We don't go to school on the Sunday." label3="After breakfast I go to school."
                />
                < Test name="Задание № 5" question="Выберите предложение, в котором не требуется артикль" label1="... dinosaurs lived long ago." label2="I have got ... nice plan." label3="She has ... new phone."
                />
</div>
</div>
           </div>
        )
    }
    }

