import React from 'react';
import './App.css';
import lock from "./image/lock.png";

function onClickNewAccount(){
    window.location.assign('http://localhost:3000/registration/');
}

function onClickBack(){
    window.location.assign('http://localhost:3000/signIn/');
}

function Failed_to_login(){
    return(
        <div className="wrapper-log-in">
            <section className="section-form">
                <main>
                    <form className="log-in-form" action="" method="post">
                        <img src={lock} alt=""/>
                            <h1 className="heading">Не удалось войти?</h1>
                            <p className="comment">Введите свой электронный адрес или номер телефона, и мы отправим вам
                                ссылку для восстановления доступа к аккаунту.</p>
                            <input className="user-info" id="email-user" type="text" name="email-name" value="" placeholder="Эл.адрес или номер телефона"/>
                            <input className="user-login" id="log-in-id" type="button" name="log-in" value="Получить ссылку"/>
                            <hr/>
                                <a className="new-account forgot_password" onClick={(e) => onClickNewAccount(e)}>Создать новый аккаунт</a>
                                <a className="registr-but" onClick={(e) => onClickBack(e)}>Вернуться на страницу входа</a>
                    </form>
                </main>
            </section>
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-info">E-mail: hello@aventica.ru</p>
                    <p className="footer-info">Телефон: 8(499)653-50-67</p>
                    <a href="https://www.facebook.com/Aventicalab/" className="footer-link">
                        <i className="fab fa-facebook-square"/>
                    </a>
                    <p className="footer-info">© CodeBusters, 2020</p>
                </div>
            </footer>
        </div>
    );
}
export default Failed_to_login;