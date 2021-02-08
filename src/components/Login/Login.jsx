import React from "react";
import classes from "../common/FormsControls/FormsContlols.module.css"
import {reduxForm} from "redux-form"
import {CreateField, Input} from "../common/FormsControls/FormsContlols";
import {required} from "../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Email', 'email', [required],Input)}
            {CreateField('Password', 'password', [required], Input, {type:'password'})}
            {CreateField(null, 'rememberMe', [required], Input, {type:'checkbox'}, 'remember me')}

            {error && <div className={classes.formSummaryError}>{error}</div>}




            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({form: 'email'})(LoginForm)


const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>
    ({
        isAuth: state.auth.isAuth
    });

export default connect(mapStateToProps, {login})(Login)
