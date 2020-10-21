import React from 'react';
import logo from './image/logo.svg';
import './App.css';

function onClick(){
  window.location.assign('http://localhost:3000/registration/');
}

function SignIn() {
  return (
    <div className="wrapper-sign-in">
      <main>
        <form className="sign-in-form" action="" method="post">
          <a href="https://aventi.ca">
            <img src={logo} alt="Логотип Aventica Office Scanner"/>
          </a>
          <input className="user-info" id="user-surname-id" type="text" name="surname" defaultValue=""
                 placeholder="Адрес электронной почты" />
          <input className="user-info" id="user-name-id" type="password" name="name" defaultValue=""
                 placeholder="Пароль"/>
              <input className="user-login" id="sign-in-id" type="button" name="sign-in" value="Войти" />
                <a className="forgot_password " href="#">Забыли пароль?</a>
                <hr/>
                  <a className="registr-but" onClick={(e) => onClick(e)}>Зарегистрироваться</a>

        </form>


      </main>
    </div>
  );
}

export default SignIn;
