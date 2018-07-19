import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form'
import RegistrationForm from './register-form';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import {getBudgets} from '../actions/budgets';


class App extends Component {
  componentDidMount() {this.props.dispatch(getBudgets())}
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default connect()(App);