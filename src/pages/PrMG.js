
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class PrMG extends Component {


    render() {
        return (
           
           <div>
            <header>


<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-muted active">
    <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4 ">
            <a
                href="/Quiz" class="list-group-item list-group-item-action py-2 ripple "

            >
                <i class="fas fa-tachometer-alt fa-fw me-3 "></i><span>Артикль</span>
            </a>
            <a href="/PrMG" class="list-group-item list-group-item-action py-2 ripple  active" >
                <i class="fas fa-chart-area fa-fw me-3 "></i><span>Модальные глаголы</span>
            </a>

            <a href="/PrPZ" class="list-group-item list-group-item-action py-2 ripple"
            ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
            >
           
            <a href="/PrSimpleForms" class="list-group-item list-group-item-action py-2 ripple ">
            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
        </a>
        <a href="/PrPast" class="list-group-item list-group-item-action py-2 ripple"
        ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Past Forms</span></a
        >
        <a href="/PrFuture" class="list-group-item list-group-item-action py-2 ripple"
        ><i class="fas fa-globe fa-fw me-3"></i><span>Future Forms</span></a
        >

        </div>
    </div>
</nav>
</header>


<div class="row">
                    <div class="col"></div>
<div class="col-10">
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Модальные глаголы</h1>
        
            < Test name="Задание № 1" question="Выберете предложение, в котором глагол употреблен верно" label1="Can you see anything in this dark room?" label2="You mustn’t buy mineral water, we have plenty." label3="We needn’t stay up late."
                />
                < Test name="Задание № 2" question="Выберете правильный глагол для предложения: You ... not smoke here." label1="must" label2="may" label3="can"
                />
                < Test name="Задание № 3" question="Выберете правильный глагол для предложения: It ... rain soon." label1="must" label2="may" label3="need"
                />
                < Test name="Задание № 4" question="Выберете предложение, в котором глагол употреблен неверно"  label1="Sonia must practise so much if she wants to take part in the marathon." label2="If you want to improve your English, you need work very hard." label3="You need not come to help them tomorrow: the work is done."
                />
                < Test name="Задание № 5" question="Выберете предложение, в котором подходящий модальный глагол 'may'" label1="I’m not sure but perhaps Roberto ... leave for Australia soon." label2="You ... talk to your daughter about her future." label3="You ... have a visa to travel to some countries."
                />
</div>
</div>
           </div>
        )
    }
    }

