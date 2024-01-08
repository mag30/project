
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class PrSimpleForms extends Component {


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
            <a href="/PrSimpleForms" class="list-group-item list-group-item-action py-2 ripple active">
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
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Present Forms</h1>
        
    < Test name="Задание № 1" question="Выберете верное предложение предложение" label1="He never talks to strangers." label2="Mike has playing football since morning." label3="We have been living in Berlin for 10 years."
                />
                < Test name="Задание № 2" question="Выберете правильный глагол для предложения: They (not be) to Argentina yet." label1="are" label2="was" label3="haven't been"
                />
                < Test name="Задание № 3" question="Выберете правильный глагол для предложения: Jane always (do) yoga at sunrise." label1="does" label2="do" label3="did"
                />
                < Test name="Задание № 4" question="Выберете неправильное предложение"  label1="Alice lived in Italy since 2010." label2="She goes to the gym on Mondays." label3="They haven't flown by plane before."
                />
                < Test name="Задание № 5" question="Выберете подходящий указатель времени для предложения: I'm busy. I'm studying for the exam ... " label1="yet" label2="at the moment" label3="usually"
                />
</div>
</div>
           </div>
        )
    }
    }

