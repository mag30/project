import React, { Component } from 'react'
import passive_photo from "./images/passive.png";
export default class LG extends Component {

    render() {
        return (
            <div>
                <header>

                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-muted">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4 ">
                                <a
                                    href="/Theory" class="list-group-item list-group-item-action py-2 ripple "

                                >
                                    <i class="fas fa-tachometer-alt fa-fw me-3 "></i><span>Артикль</span>
                                </a>
                                <a href="/MG" class="list-group-item list-group-item-action py-2 ripple  " >
                                    <i class="fas fa-chart-area fa-fw me-3 "></i><span>Модальные глаголы</span>
                                </a>

                                <a href="/LG" class="list-group-item list-group-item-action py-2 ripple active"
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
                        <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Пассивный залог</h1>
                            <p class="p"> Далеко не всегда мы можем уточнить, кто выполняет действие, а порой нам это и вовсе не нужно. В таких случаях уместно употреблять пассивный или страдательный залог, который в английском языке называют <em>passive voice.</em></p>
                            <p class="p">В английском языке существует два залога — активный <em>(active voice)</em> и пассивный или страдательный <em>(passive voice)</em>. В активном залоге действие выполняет подлежащее. В пассивном залоге действие происходит над подлежащим. Давайте сравним:</p>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-light text-center"><em>Mary <strong>cleans</strong> the office every morning.</em> — Мэри <strong>убирает</strong> офис каждое утро. <em>(активный залог)</em></li>
                            </ul>
                            <p class="p m-2s">Подлежащее (Мэри) выполняет действие (убирает).</p>
                            
                            <ul class="list-group">

                                <li class="list-group-item list-group-item-light text-center"><em>The office <strong>is cleaned</strong> every morning.</em> — Офис <strong>убирают</strong> каждое утро. <em>(пассивный залог)</em></li>
                                
                            </ul>
                            <p class="p">Неизвестно, кто выполняет действие. Подлежащее (офис) подвергается действию (его убирают).</p>
                            <p class="p"></p>
                            <ul class="list-group">

                                <li class="list-group-item list-group-item-success text-center"><em>She <strong>asked</strong> her students to come earlier.</em> — Она <strong>попросила</strong> студентов прийти раньше. <em>(активный залог)</em></li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>The students <strong>were asked </strong>to come earlier.</em> — Студентов <em>попросили</em> прийти раньше. (пассивный залог)</li>
                            </ul>
                            <p class="p m-2"> Страдательный залог в английском языке образуется с помощью вспомогательного глагола to be и смыслового глагола в третьей форме. На месте подлежащего в утвердительных предложениях будет стоять человек или предмет, над которым будет производиться действие. Посмотрите на схеме ниже, как активный залог можно преобразовать в пассивный.</p>
                            <p class="text-center"><img src={passive_photo} alt="" class="rounded float-right"
                             height={400} weight={400}/></p>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}