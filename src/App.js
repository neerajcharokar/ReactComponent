import React from 'react';
import './App.css';
import {BrowserRouter ,Link,Redirect,Route,Switch} from 'react-router-dom'
import HelloComponent from './Components/HelloComponent'
import ManageState from './Components/ManageState'
import manageProps, { ManageProps } from './Components/ManageProps'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <Link class="navbar-brand" style={{fontSize:'30px'}} to={'/create'}>Components</Link>
        <div >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to={'/create'}>Create Components</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to={'/manageState'}>Manage State</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to={'/manageProps'}>Manage Props</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
      <Route exact path='/create' component={HelloComponent}></Route>
      <Route exact path='/manageState' component={ManageState}></Route>
      <Route exact path='/manageProps' component={ManageProps}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
