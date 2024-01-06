import React, { Component } from 'react'
import quiz_photo from "./images/quiz.png";
import theory_photo from "./images/teorija.png";
import cards_photo from "./images/cards.png";
export default class Home extends Component {

    render() {
        return (

            <div>

                <header>

                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-muted">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4 ">
                                <a
                                    href="#" class="list-group-item list-group-item-action py-2 ripple active"

                                >
                                    <i class="fas fa-tachometer-alt fa-fw me-3 mx-auto"></i><span>Артикль</span>
                                </a>
                                <a href="/MG" class="list-group-item list-group-item-action py-2 ripple " >
                                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Модальные глаголы</span>
                                </a>

                                <a href="/PZ" class="list-group-item list-group-item-action py-2 ripple"
                                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
                                >
                                <a href="/SimpleForms" class="list-group-item list-group-item-action py-2 ripple ">
                                <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
                            </a>
                            <a href="/Past" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Past Forms</span></a
                            >
                            <a href="/Future" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-globe fa-fw me-3"></i><span>Future Forms</span></a
                            >

                            </div>
                        </div>
                    </nav>
                </header>

                <div class=" about  ">
                   
                    <div class="row">
                        <div class="col">

                        </div>
                        <div class="col-10">
                        <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Артикль</h1>
                            <p class="p"> Основная функция артикля — указывать на определенность или неопределенность существительного. Поэтому и артиклей в английском языке два — неопределенный артикль<em> a/an (indefinite article)</em> и определенный артикль <em>the (definite article)</em>. Также есть такое понятие, как нулевой артикль <em>(zero article)</em>. </p>
                            <p class="p">Выбор одного из артиклей связан с <u>исчисляемостью существительного:</u></p>
                            <ul class="list-group">



                                <li class="list-group-item list-group-item-primary text-center"><strong>неопределенный артикль</strong> <em>a/an</em> используется с исчисляемыми существительными в единственном числе;</li>
                                <li class="list-group-item list-group-item-primary m-1 text-center"><strong>определенный артикль</strong> <em>the</em> может использоваться с исчисляемыми существительными (независимо от их числа) и с неисчисляемыми существительными;</li>
                                <li class="list-group-item list-group-item-primary m-1 text-center"><strong>нулевой артикль</strong> употребляется с неисчисляемыми существительными или с исчисляемыми во множественном числе.</li>

                            </ul>
                            <p class="p">Примеры:</p>
                            <ul class="list-group">

                                <li class="list-group-item list-group-item-success text-center"><em>I heard  <strong>a story</strong></em> (исчисляемое существительное в единственном числе). — Я услышал <strong>историю.</strong></li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>I liked <strong> the films</strong></em>  (исчисляемое существительное во множественном числе). — Мне понравились  <strong>фильмы.</strong></li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>It is good <strong>advice</strong></em> (неисчисляемое существительное). — Это хороший  <strong>совет.</strong></li>

                            </ul>
                            <p class="p m-1">Если существительное употребляется с прилагательным, то артикль ставим перед прилагательным.</p>
                            <ul class="list-group">



                                <li class="list-group-item list-group-item-success text-center"><em>It is <strong>a hot day</strong></em>. — Сегодня  <strong>жаркий день</strong></li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>It is <strong>the hottest day</strong> of this week</em>. — Это    <strong>самый жаркий день</strong> на этой неделе.</li>

                            </ul>
                            <p class="p"></p>
                        </div>

                    </div>

                </div>



            </div>






        )
    }

}
