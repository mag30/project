import React, { Component } from 'react'

export default class MG extends Component {

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
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple active " >
                                    <i class="fas fa-chart-area fa-fw me-3 "></i><span>Модальные глаголы</span>
                                </a>

                                <a href="/PZ" class="list-group-item list-group-item-action py-2 ripple"
                                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
                                >
                               
                                <a href="/SimpleForms" class="list-group-item list-group-item-action py-2 ripple ">
                                <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                            ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Past Forms</span></a
                            >
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple"
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
                        <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Модальные глаголы</h1>
                            <p class="p"> Модальные глаголы <em>(modal verbs)</em> — это особая группа глаголов. Они обозначают возможность, вероятность, необходимость или способность совершить какое-то действие. Есть модальные глаголы, используя которые, вы можете рассказать об умениях человека <em>(can/could)</em>, запретить или приказать кому-либо что-то делать <em>(must)</em>, дать совет <em>(should)</em>.</p>
                            <p class="p">Рассмотрим несколько примеров модальных глаголов:</p>
                            <ul class="list-group">



                                <li class="list-group-item list-group-item-success text-center"><em>I <strong>must</strong> finish this article till Wednesday.</em> — Я <strong>должен</strong> закончить эту статью до среды.</li>
                                <li class="list-group-item list-group-item-success text-center"><em>You <strong>should</strong> follow your doctor’s advice!</em> — Тебе <strong>следует</strong> слушать советы доктора!</li>
                                <li class="list-group-item list-group-item-success text-center"><em>She <strong>can’t</strong> swim so she isn’t coming with us to the river.</em> — Она <strong>не умеет</strong> плавать, поэтому она не идет с нами на реку.</li>
                                <li class="list-group-item list-group-item-success text-center"><em>What languages <strong>can</strong> he speak?</em> — На каких языках он <strong>может</strong> говорить?</li>
                            </ul>
                            <h5 class="p m-2">Правила употребления модальных глаголов</h5>
                            <ul class="list-group">

                                <li class="list-group-item list-group-item-primary">Модальный глагол всегда употребляется со смысловым глаголом, который стоит в начальной форме (<em>must do, could see</em>).</li>

                                <li class="list-group-item list-group-item-primary">Модальные глаголы имеют одну форму во всех лицах и числах. Исключением будет лишь <em>have to</em>, который принимает форму <em>has</em> после местоимений <em>he, she, it</em>.</li>
                                <li class="list-group-item list-group-item-primary">Модальные глаголы всегда стоят в настоящем времени (даже в контексте будущего времени), однако некоторые из них могут принимать прошедшую форму: <em>can — could; may — might, must — had to</em>.</li>
                                <li class="list-group-item list-group-item-primary">В отрицательных и вопросительных предложениях модальные глаголы не употребляются со вспомогательными, за исключением <em>have to.</em></li>
                                <li class="list-group-item list-group-item-primary"></li>
                                <li class="list-group-item list-group-item-primary"></li>
                            </ul>
                            <p class="p">Пример:</p>
                            <ul class="list-group">

                                
                                <li class="list-group-item list-group-item-success text-center"><em>I <strong>can’t</strong> do it.</em> — Я <strong>не могу</strong> этого сделать.</li>
                                <li class="list-group-item list-group-item-success text-center"><em><strong>May</strong> I use your laptop?</em> — <strong>Могу</strong> я воспользоваться вашим ноутбуком.</li>
                            </ul>
                            <p class="p m-2">Рассмотрим, как строится утвердительное предложение с модальным глаголом:</p>
                            <ul class="list-group">
                            <li class="list-group-item list-group-item-light text-center">Подлежащее + модальный глагол + смысловой глагол в начальной форме</li>
                            </ul>
                            <p class="p">Обратите внимание, что для соединения модального и смыслового глаголов не нужна частица <em>to</em>. За исключением <em>ought to</em> и <em>have to</em>, где <em>to</em> — часть модального глагола.</p>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}