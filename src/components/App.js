import React, { Component } from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form'
import RegistrationForm from './register-form';
import Header from './header';
import Footer from './footer';


class App extends Component {
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

export default App;