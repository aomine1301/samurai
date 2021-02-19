import React from "react";
import classes from "../common/FormsControls/FormsContlols.module.css"
import {reduxForm} from "redux-form"
import {CreateField, Input} from "../common/FormsControls/FormsContlols";
import {required} from "../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField(
                'Email',
                'email',
                [required], Input)}
            {CreateField(
                'Password',
                'password',
                [required], Input,
                {type: 'password'})}
            {CreateField(
                null,
                'rememberMe',
                [required], Input,
                {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl} alt="dsd"/>}
            {captchaUrl &&   CreateField(
                "Symbols from image",
                'captcha',
                [required], Input, {})}
            {error && <div className={classes.formSummaryError}>{error}</div>}



            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) =>
    ({
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    });

export default connect(mapStateToProps, {login})(Login)
