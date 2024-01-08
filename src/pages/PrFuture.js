
import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import Test from '../components/Test'
export default class PrFuture extends Component {


    render() {
        return (
           
           <div>
            <header>


<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-muted active">
    <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4 ">
            <a
                href="/Quiz" class="list-group-item list-group-item-action py-2 ripple"

            >
                <i class="fas fa-tachometer-alt fa-fw me-3 "></i><span>Артикль</span>
            </a>
            <a href="/PrMG" class="list-group-item list-group-item-action py-2 ripple  " >
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
        <a href="/PrFuture" class="list-group-item list-group-item-action py-2 ripple active"
        ><i class="fas fa-globe fa-fw me-3"></i><span>Future Forms</span></a
        >

        </div>
    </div>
</nav>
</header>


<div class="row">
                    <div class="col"></div>
<div class="col-10">
    <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Future Forms</h1>
        
            < Test name="Задание № 1" question="Выберете предложение, в котором глагол употреблен верно" label1="By the time Teddy comes home Pamela will eat all the apple jam." label2="It’s still not clear if the weather will have change for the better." label3="When Sandra enters a Design College she will have been studying Drawing for 5 years there."
                />
                < Test name="Задание № 2" question="Выберете правильный глагол для предложения: We ... to lake Baikal in 2 months." label1="will travel" label2="will have travelled" label3="will have been travelling"
                />
                < Test name="Задание № 3" question="Выберете правильный глагол для предложения: She ... tennis tomorrow afternoon." label1="will be playing" label2="will have played" label3="will have been playing"
                />
                < Test name="Задание № 4" question="Выберете предложение, в котором глагол употреблен неверно"  label1="My dear granny will have become a pensioner by 2018." label2="When you come to the station I will wait for you by the central entrance." label3="By the time he returns, we will have been starving here for 3 days!"
                />
                < Test name="Задание № 5" question="Выберете правильный глагол для предложения: We ... to lake Baikal in 2 months." label1="will travel" label2="will have travelled" label3="will have been travelling"
                />
</div>
</div>
           </div>
        )
    }
    }

