import React from 'react';
import './register-form.css';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)))
            .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        return (
            <div id="background-image">
            <form
                className="register-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Create a new account</h2>
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                />
                <label htmlFor="firstName">First name</label>

                
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                />
                <label htmlFor="lastName">Last name</label>

                
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="username">Username</label>

                
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="password">Password</label>

                
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label><br />

                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
                <button
                    type="submit">
                    Log-in
                </button>    
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
   // onSubmitFail: (errors, dispatch) => {
   // console.log(errors)
    //    dispatch(focus('registration', Object.keys(errors)[0]))}
})(RegistrationForm);