import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Switch
} from 'react-router-dom'

//////////////////////////////////////////////

import Films from './js/Films.js'
import Chesse from './js/ChesseDesk.js'
import Tasks from './js/Tasks.js'
import Worker from './js/moneyMath.js'

const Home=()=>(
  <div>
    <h1>JavaScript и React практика</h1>
  </div>
)


const App = () => (
  <div>
    <nav>
      <p><Link to="/">Главная</Link></p>
      <p><Link to="/films">Фильмы</Link></p>
      <p><Link to="/chesse">Шахматы</Link></p>
      <p><Link to="/tasks">Задачник</Link></p>
      <p><Link to="/money">Задачник</Link></p>
      <hr />
    </nav>

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/films" component={Films} />
      <Route path="/chesse" component={Chesse} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/money" component={Worker} />
    </Switch>
  </div>
)



ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
