import React from 'react';
import logo from './image/logo_grey.svg';
import calendar from './image/calendar.svg';
import exit from './image/exit.svg';
import workplace from './image/workplace.jpg';
import of1 from './image/of_1.jpg';
import of2 from './image/of_2.jpg';
import of3 from './image/of_3.jpg';
import './start.css';

function Start() {
    return (
        <div>
            <header className="header">
                <div className="header_content">
                    <a href="https://aventi.ca">
                        <img src={logo} alt="Логотип Aventica Office Scanner"/>
                    </a>
                    <div className="nav">
                        <a href="#">
                            <img src={calendar} alt="Яндекс.Календарь"/>
                        </a>
                        <a href="#">
                            <img src={exit} alt="Выход"/>
                        </a>
                    </div>
                </div>
            </header>
            <section className="booking">
                <div className="info-content">
                    <div className="info-items">
                        <h1 className="info-main-text">Оформить заявку на бронирование рабочего места в офисе</h1>
                        <p className="info-text">Выбор удобной рабочей зоны</p>
                        <button className="info-but" type="button" name="button">Забронировать место</button>
                    </div>
                </div>
                <div className="wrapper">
                    <img src={workplace} alt=""/>
                </div>
            </section>
            <div className="const-instruction">
                <section className="constructor">
                    <h2 className="info-main-text">Конструктор офиса</h2>
                    <hr/>
                </section>
                <section className="information">
                    <div className="item">
                        <img src={of1} alt=""/>
                            <p className="item-text">Какой-нибудь текст о том,<br/>
                                что здесь можно посмотреть план офиса.<br/>
                                Если кто-нибудь не хочет бронировать,<br/>
                                а просто посмотреть план с разметкой<br/>
                                уже забронированных мест и тп и тд</p>
                    </div>
                    <div className="item">
                        <img src={of2} alt=""/>
                            <p className="item-text">Поддержка, связь с офисом напрямую.<br/>
                                Сюда можно написать свои предложения <br/>
                                и вопросы, если таковы есть. <br/>
                                Добавить сюда соответсвующий текст</p>
                    </div>
                    <div className="item">
                        <img src={of3} alt=""/>
                            <p className="item-text">Небольшой текст про сотрудников. По этой <br/>
                                ссылке можно посмотреть список сотрудников <br/>
                                и инфу о них (допустим мне надо созвониться <br/>
                                с сотрудником, я могу здесь посмотреть <br/>
                                не на совещани и ли он, его рабочий <br/>
                                телефон, факс и тп)</p>
                    </div>
                </section>
            </div>
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
export default Start;
