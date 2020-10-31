import React from 'react';
import './App.css';

function onClick(){
    window.location.assign('http://localhost:3000/signIn/');
}

function RegistrationForm() {
    return (
        <div className="wrapper-log-in">
            <section className="section-form">
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
            </section>
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-info">E-mail: hello@aventica.ru</p>
                    <p className="footer-info">Телефон: 8(499)653-50-67</p>
                    <a href="https://www.facebook.com/Aventicalab/" className="footer-link">
                        <i className="fab fa-facebook-square" />
                    </a>
                    <p className="footer-info">© CodeBusters, 2020</p>
                </div>
            </footer>
        </div>
    );
}

export default RegistrationForm;