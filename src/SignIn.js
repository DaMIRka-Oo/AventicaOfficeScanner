import React,{Component} from 'react';
import logo from './image/logo.svg';
import './App.css';

function onClickEnter(){
    window.location.assign('http://localhost:3000/start/');
}

function onClickRegistrate(){
  window.location.assign('http://localhost:3000/registration/');
}
function onClickForgot(){
    window.location.assign('http://localhost:3000/failed-to-login/');
}

class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            SendMail:{
                email: '',
                password: ''
            },

            topicOptions: ['Отзыв','Вопрос','Претензия','Иное'],
            skillOptions: ['Согласен']

        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSendMail = this.handleSendMail.bind(this);

    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, email: value
                }
        }), () => console.log(this.state.SendMail))
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState( prevState => ({ SendMail :
                {...prevState.SendMail, password: value
                }
        }), () => console.log(this.state.SendMail))
    }


    handleSendMail(e) {
        e.preventDefault();
        let userData = this.state.SendMail;

        fetch('https://www.google.ru/',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })

        onClickEnter()
    }



    render() {
        return (
            <div className="wrapper-sign-in">
                <section className="section-form">
                    <main>
                        <form className="sign-in-form" action="" method="post">
                            <a href="https://aventi.ca">
                                <img src={logo} alt="Логотип Aventica Office Scanner"/>
                            </a>
                            <input className="user-info" id="user-surname-id" type="text" name="surname" value={this.state.SendMail.email} onChange={this.handleEmail}
                                   placeholder="Адрес электронной почты"/>
                            <input className="user-info" id="user-name-id" type="password" name="name" value={this.state.SendMail.password} onChange={this.handlePassword}
                                   placeholder="Пароль"/>
                            <input className="user-login" id="sign-in-id" type="submit" name="sign-in" value="Войти"
                                   onSubmit={this.handleSendMail}/>
                            <a className="forgot_password " onClick={(e) => onClickForgot(e)}>Забыли пароль?</a>
                            <hr/>
                            <a className="registr-but" onClick={(e) => onClickRegistrate(e)}>Зарегистрироваться</a>
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
}

export default SignIn;
