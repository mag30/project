import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import Theory from "./pages/Theory";
import MG from "./pages/MG";
import PZ from "./pages/PZ";
import SimpleForms from "./pages/SimpleForms";
import Past from "./pages/Past";
import Future from "./pages/Future";

function App() {
  return (
      <Router>
        <div>
        <Header/>
        </div>
        <main>
          <Switch>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              
              <Route path="/registration">
                  <Reg/>
              </Route>
              <Route path="/Cards">
                  <Cards/>
              </Route>
              <Route path="/Quiz">
                  <Quiz/>
              </Route>
              <Route path="/Theory">
                  <Theory/>
              </Route>
              <Route path="/Mg">
                  <MG/>
              </Route>
              <Route path="/Pz">
                  <PZ/>
              </Route>
              <Route path="/SimpleForms">
                  <SimpleForms/>
              </Route>
              <Route path="/Past">
                  <Past/>
              </Route>
              <Route path="/Future">
                  <Future/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
