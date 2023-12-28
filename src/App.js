import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import Contacts from './pages/Contacts';
import About from './pages/About';
import Login from './pages/Login';
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
      <Router>
        <div>
        <Header/>
        </div>
        <main>
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/About'>
              <About/>
            </Route>
            <Route path='/Contacts'>
              <Contacts/>
            </Route>
              <Route path="/quiz">
                  <Quiz/>
              </Route>
              <Route path="/registration">
                  <Reg/>
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
