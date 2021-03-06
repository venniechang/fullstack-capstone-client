import React, { Component } from 'react';
import './style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form'
import RegistrationForm from './register-form';
import Dashboard from './dashboard';
import NewEntry from './newEntry';
import EditEntry from './editEntry';
import Header from './header';
import Footer from './footer';
import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/auth';
import Chart from './chart';



class App extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}

//componentDidMount() {this.props.dispatch(getBudgets())}

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={About} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/new-entry" component={NewEntry} />
          <Route exact path="/edit-entry/:id" component={EditEntry} />
          <Route exact path="/chart" component={Chart} />
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);