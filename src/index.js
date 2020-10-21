import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './SignIn';
import RegistrationForm from "./RegistrationForm";
import * as serviceWorker from './serviceWorker';
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route path='/signIn' component={SignIn}/>
              <Route path='/registration' component={RegistrationForm}/>
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
