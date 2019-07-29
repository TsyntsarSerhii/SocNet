import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';


const LoginForm = (props) => {
    return (<div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (FormData) => {

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;