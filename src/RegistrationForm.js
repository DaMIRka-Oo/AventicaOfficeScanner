import React from 'react';
import logo from './image/logo.svg';
import './App.css';

function onClick(){
    window.location.assign('http://localhost:3000/signIn/');
}

function RegistrationForm() {
    return (
        <div className="wrapper-log-in">
            <main>
                <form className="log-in-form" action="index.html" method="post">
                    <div className="title">
                        <span>Регистрация</span>
                    </div>

                <input className="user-info" id="new-user-name" type="text" name="new-name" defaultValue="" placeholder="Имя"/>
                <input className="user-info" id="new-user-surname" type="text" name="new-surname" defaultValue="" placeholder="Фамилия"/>
                <input className="user-info" id="new-user-patronymic" type="text" name="new-patronymic" defaultValue="" placeholder="Отчество"/>
                <input className="user-info" id="new-user-mail" type="text" name="new-mail" defaultValue="" placeholder="Адрес электронной почты"/>
                <input className="user-info" id="new-user-phone" type="tel" name="new-phone" defaultValue="" placeholder="Контактный номер телефона"/>
                <input className="user-info" id="new-user-password" type="password" name="new-password" defaultValue="" placeholder="Пароль"/>
                <input className="user-login" id="log-in-id" type="button" name="log-in" value="Создать аккаунт" onClick={(e) => onClick(e)}/>
                </form>
            </main>
        </div>
    );
}

export default RegistrationForm;