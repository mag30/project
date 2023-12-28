import React, { Component } from 'react'
import quiz_photo from "./images/quiz.png";
import theory_photo from "./images/teorija.png";
import cards_photo from "./images/cards.png";
export default class Home extends Component {
    render() {
        return (
            <div class="container">
                
                
                <div class="row">
                    <div class="col-md-6">
                    <a class=" nav-link active" href="/Theory"><h1 class="text-uppercase font-weight-bold font-size 100px mb-5 m-5">Теория</h1></a>
                        <div class="row">
                            <div class="col-1">
                                <h3></h3>
                            </div>
                            <div class="col-10">
                                <p>Теория нужна и важна. Она представляет собой один из ключевых аспектов обучения языку. Изучение грамматики помогает сделать общение между людьми более понятным. Здесь вы поймете, зачем нужны все эти времена и как ими пользоваться.</p>
                            </div>
                        </div>


                    </div>

                    <div class="col-md-6 mt-5 " >
                        <img src={theory_photo} alt="" class="rounded float-right"
                             height={400} weight={400}/>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-md-6">
                        <a class=" nav-link active" href="/Cards"><h1 class="text-uppercase font-weight-bold font-size 100px mb-5 m-5">Карточки</h1></a>

                        <div class="row">
                            <div class="col-1">
                                <h3></h3>
                            </div>
                            <div class="col-10">
                                <p>Языковые карточки — это один из наиболее эффективных способов изучения иностранного языка. Они позволяют учащимся практиковаться в использовании новых слов и фраз, а также помогают улучшить их словарный запас. Языковые карточки обычно содержат одну сторону на иностранном языке и другую на родном языке учащегося.</p>
                            </div>
                        </div>


                    </div>

                    <div class="col-md-6 mt-5 " >
                        <img src={cards_photo} alt="" class="rounded float-right"
                             height={400} weight={400}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                    <a class=" nav-link active" href="/Quiz"><h1 class="text-uppercase font-weight-bold font-size 100px mb-5 m-5">Викторина</h1></a>

                        <div class="row">
                            <div class="col-1">
                                <h3></h3>
                            </div>
                            <div class="col-10">
                                <p>Викторина – это не просто игра, это увлекательный способ изучения нового материала и проверки знаний. Они помогают участникам развивать критическое мышление, тренировать память и анализировать информацию. Приступим?</p>
                            </div>
                        </div>


                    </div>

                    <div class="col-md-6 mt-5 " >
                        <img src={quiz_photo} alt="" class="rounded float-right"
                             height={400} weight={400}/>
                    </div>
                </div>
                
            </div>
            



        )
    }
}
