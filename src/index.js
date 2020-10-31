import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './SignIn';
import RegistrationForm from "./RegistrationForm";
import Failed_to_login from "./Failed_to_login";
import Start from "./Start";
import * as serviceWorker from './serviceWorker';
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path='/signIn' component={SignIn}/>
              <Route path='/registration' component={RegistrationForm}/>
              <Route path='/failed-to-login' component={Failed_to_login}/>
              <Route path='/start' component={Start}/>
              <Redirect from='/' to='/signIn'/>

          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
