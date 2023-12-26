import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import quiz_photo from './quiz.png';
export default class Home extends Component {
    render() {
        return (
            <div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1 class="text-uppercase font-weight-bold mb-5 m-5">Викторина</h1>
      
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