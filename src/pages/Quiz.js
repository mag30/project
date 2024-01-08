import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';


export default class Quiz extends Component {


    constructor() {
        super();
        this.state = {
          color: ''
          
        };
        this.onRadioChange = this.onRadioChange.bind(this);
      }
      onRadioChange = (e) => {
        this.setState({
          color: e.target.value
        });
      }

    render() {
        return (
           
            <div className="App1" class="pb-4">

                        
            <h1>Артикли</h1> 
            <h2>Задание № 1 </h2> 
            <h3>В каких предложениях артикль употреблен верно? </h3> 

            <form onSubmit={this.onSubmit}>
              <strong>Выберете правильный ответ:</strong>
              <ul class="nobullet">
                <li >
                   
                  <label>
                    <input
                      type="radio"
                      value="red"
                      checked={this.state.color === "red"}
                      onChange={this.onRadioChange}
                    />
                    <span>My aunt and my uncle are teachers.</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="green"
                      checked={this.state.color === "green"}
                      onChange={this.onRadioChange}
                    />
                    <span>There is a cheese on the plate.</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="blue"
                      checked={this.state.color === "blue"}
                      onChange={this.onRadioChange}
                    />
                    <span>Next to the window there is door.</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="orange"
                      checked={this.state.color === "orange"}
                      onChange={this.onRadioChange}
                    />
                    <span>We don't go to school on the Sunday.</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="purple"
                      checked={this.state.color === "purple"}
                      onChange={this.onRadioChange}
                    />
                    <span>What did you have for lunch at the school on Wednesday?</span>
                  </label>
                </li>
              </ul>
              <Button variant="primary" type="submit">Ответить</Button>
            </form>

          </div>
        )
    }

}
