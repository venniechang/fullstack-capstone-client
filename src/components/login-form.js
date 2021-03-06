import React from 'react';
import './login-form.css';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required} from '../validators';


export class LoginForm extends React.Component {
    onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
    .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div id="background-image">
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <h2>Enter login credentials</h2>

                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required]}
                />
                <label htmlFor="username">Username</label>

                
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required]}
                />
                <label htmlFor="password">Password</label> <br />

                <button
                    className="register-buttons" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Login
                </button><br />

                <p className="demo-info">Try it out!<br />
                    <b>Username</b>: testuser10<br />
                    <b>Password</b>: testuser10
                </p>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);