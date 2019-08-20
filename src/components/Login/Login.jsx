import React from 'react';
import s from '../common/FormsControls/FormsControls.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../state/auth-reducer';


const LoginForm = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    component={Input}
                    validate={[required]}
                    placeholder={"Email"} />
            </div>
            <div>
                <Field
                    type={"password"}
                    name={"password"}
                    component={Input}
                    validate={[required]}
                    placeholder={"Password"} />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={Input} /> remember me
            </div>
            {
                props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, { login })(Login);
