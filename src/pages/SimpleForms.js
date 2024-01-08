import React, { Component } from 'react'

export default class SimpleForms extends Component {

    render() {
        return (
            <div>

                <header>

                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4 ">
                                <a
                                    href="/Theory" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark "

                                >
                                    <i class="fas fa-tachometer-alt fa-fw me-3 mx-auto"></i><span>Артикль</span>
                                </a>
                                <a href="/MG" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark " >
                                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Модальные глаголы</span>
                                </a>

                                <a href="/PZ" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark "
                                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Пассивный залог</span></a
                                >
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Present Forms</span>
                                </a>
                                <a href="/Past" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark "
                                ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Past Forms</span></a
                                >
                                <a href="/Future" class="list-group-item list-group-item-action py-2 ripple text-light bg-dark "
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
                            <h1 class="text-uppercase font-weight-bold font-size 100px  m-4 text-center">Present Forms</h1>
                            <p class="p"> Здесь мы предлагаем поближе познакомиться с настоящими временами в английском языке — <em><strong>Simple, Present Continuous, Present Perfect и Present Perfect Continuous.</strong></em> </p>
                            <h2 class="text-center m-2">Present Simple</h2>
                            <p class="p">Это простое настоящее время, обозначающее действие в самом широком смысле этого слова. Одна из самых распространенных и простых форм в английском языке для описания действий.

                                Действия могут быть связаны с привычками, хобби, ежедневным событием вроде подъема по утрам или чем-то, что случается регулярно.</p>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-primary text-center">Постоянные и повторяющиеся действия в настоящем</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Последовательные действия, например в сюжете книги или фильма</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Для описания действия, которое происходит согласно определенному графику.</li>

                                <p class="p">Например:</p>
                                <li class="list-group-item list-group-item-success text-center"><em>I go to work every day</em> — Я хожу на работу каждый день.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>They usually play tennis every weekend</em> — Они обычно играют в теннис каждые выходные.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>She brings me coffee every morning</em> — Она приносит мне кофе каждое утро.</li>
                                <li class="list-group-item list-group-item-danger m-2 text-center">ВАЖНО: В Present Simple форма глагола практически всегда совпадает с изначальной. Исключение составляет третье лицо единственного числа (he / she / it)  к нему прибавляется окончание -s</li>


                            </ul>

                            <p class="text-center"><img src='https://u.foxford.ngcdn.ru/uploads/tinymce_file/file/56273/d7d70aa51f1ec78c.png' weight={300} height={300} /></p>

                            <h2 class="text-center m-2">Present Continuous</h2>
                            <p class="p">Present Continuous Tense (или Present Progressive Tense) переводится с английского языка как «настоящее длительное время». В английской речи оно употребляется наравне с Present Simple, с той же частотой, и занимает важное место в грамматике.</p>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-primary text-center">Время <em>Present Continuous</em> используется для описания действия, которое происходит в текущий момент времени</li>
                                <li class="list-group-item list-group-item-primary text-center m-1"><em>Present Continuous</em> используется для описания длительных действий в настоящем, даже если они не происходят в момент речи. То есть на протяжении какого-то времени мы периодически выполняем это действие</li>
                                <li class="list-group-item list-group-item-primary text-center m-1"><em>Present Continuous</em> используется для описания изменений, происходящих в какой-то ситуации, и процесса развития. В таких конструкциях действие часто передается глаголами <em>to get (становиться), to increase (увеличивать/увеличиваться), to decrease (уменьшать/уменьшаться), to rise (подниматься), to fall (падать), to start (начинать/начинаться), to change (менять/меняться)</em> и т. д.</li>
                                <li class="list-group-item list-group-item-primary text-center m-1"><em>Present Continuous</em> может использоваться для обозначения событий ближайшего будущего, но только в том случае, если это касается запланированных действий.</li>
                                <p class="p">Например:</p>
                                <li class="list-group-item list-group-item-success text-center"><em>Listen! The music <strong>is playing.</strong></em> — Слушай! Музыка <strong>играет</strong>.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>Steve <strong>is watching</strong> TV at the moment</em>. — Сейчас Стив <strong>смотрит</strong> телевизор.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>Jessica <strong>is learning</strong> French.</em> — Джессика <strong>учит</strong> французский. (<em>она занимается изучением французского уже какое-то время и будет продолжать учить его, но она не занята изучением французского прямо сейчас</em>)</li>


                            </ul>

                            <p class="text-center m-1"><img src='https://lh6.googleusercontent.com/TolerCmRBekE4qywc90YdA3YBaOasiNgQ6XfuCCUSdehxUtRDkheanEyW0jDoAoHge3ua1Fgc6gPpM45GBkf21aYFXidfaPjeJD-xyWqfaIq7zmkqV84zllvQHIAs7IP2ee1Et0I' weight={300} height={300} /></p>


                            <h2 class="text-center m-2">Present Perfect</h2>
                            <p class="p">Present Perfect Tense (Present Perfect) — это настоящее совершенное время в английском языке. Оно обозначает действие, которое завершилось в настоящий момент времени.</p>
                            <p class="p m-1">В этом и состоит основная сложность времени Present Perfect для изучающих. В русском языке нет времени аналогичного Present Perfect. Для нас если что-то происходит сейчас — это и есть настоящее, а если совершилось — это уже прошлое.</p>
                            <p class="p m-1">Но не для англичан. Они воспринимают время немного по-другому. По логике носителей языка, действие вполне может закончиться и в настоящем или близко к настоящему моменту. Для выражения такой связи прошлого с настоящим и существует Present Perfect.</p>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-primary text-center">Завершенные действия, у которых есть результат в настоящем. Если действие произошло в прошлом, но у него есть связь с настоящим, используем <em>Present Perfect.</em></li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Чтобы поделиться недавними новостями, мы употребляем <em>Present Perfect</em>.</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Действия, которые многократно повторялись до настоящего момента</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Действия, которые начались в прошлом и все еще продолжаются</li>
                                <p class="p">Например:</p>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>I <strong>have already done</strong> my homework</em> — Я <strong>уже сделал</strong> домашнее задание</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>She<strong> has not finished</strong> her tasks</em> — Она <strong>не выполнила</strong> свои задачи</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em><strong>Has</strong> she <strong>just arrived</strong> home?</em> — Она <strong>только что приехала</strong> домой?</li>
                                

                            </ul>

                            <p class="text-center m-1"><img src='https://englsecrets.ru/wp-content/uploads/2020/01/present-perfect-2-min.jpg' weight={300} height={300} /></p>

                            <h2 class="text-center m-2">Present Perfect Continuous </h2>
                            <p class="p"><em>Present Perfect Continuous Tense</em> (или <em>Present Perfect Progressive</em> ) — настоящее длительное совершенное время. Употребление <em>Present Perfect Continuous</em> уместно для выражения действий, которые начались в прошлом и длились до сих пор. Это время используется в речи сравнительно нечасто, но тем не менее есть случаи, в которых обойтись без него не получится. Правильное употребление предложений в <em>Present Perfect Continuous</em> подтверждает высокий уровень знаний языка говорящего. </p>
                            
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-primary text-center">Завершенные действия, у которых есть результат в настоящем. Если действие произошло в прошлом, но у него есть связь с настоящим, используем <em>Present Perfect.</em></li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Чтобы поделиться недавними новостями, мы употребляем <em>Present Perfect</em>.</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Действия, которые многократно повторялись до настоящего момента</li>
                                <li class="list-group-item list-group-item-primary text-center m-1">Действия, которые начались в прошлом и все еще продолжаются</li>
                                <p class="p">Например:</p>
                                <li class="list-group-item list-group-item-success text-center"><em>It <strong>has been raining</strong> all day long. I’m sick and tired of this weather.</em> — Дождь <strong>идет</strong> весь день. Меня достала эта погода.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em>Sorry, I <strong>haven’t been listening</strong> to you. Now I’m all ears.</em> — Извини, я тебя <strong>не слушала</strong>. Теперь я вся во внимании.</li>
                                <li class="list-group-item list-group-item-success text-center m-1"><em><strong>Has</strong> he <strong>been watching</strong> series all day?</em> — Он что, <strong>смотрел</strong> сериалы весь день?</li>
                                

                            </ul>

                            <p class="text-center m-1"><img src='https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_5f5ebc964c4030243837cbcb_5f5ee10d354535081ecb6708/scale_1200' weight={300} height={300} /></p>

                        </div>


                    </div>

                </div>



            </div>
        )
    }

}