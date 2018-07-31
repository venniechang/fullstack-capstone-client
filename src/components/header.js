import React from 'react';
import './header.css';
import {Link, Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {connect} from 'react-redux';

export class Header extends React.Component {

    handleLogout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {


    return (
        <header className="appHeader">
            <h1 className="appName"><Link to="/">Budgetfy</Link></h1>
            {!this.props.isLoggedIn && <button><Link to="/login">Login</Link></button>}
			{!this.props.isLoggedIn && <button><Link to="/register">Register</Link></button>}
            {this.props.isLoggedIn && <button><Link to="/new-entry">Add Entry</Link></button>}
            {!this.props.isLoggedIn && <Redirect to ="/" />}
            {this.props.isLoggedIn && <button onClick={() => this.handleLogout()}>Logout</button>}
        </header>
    );
}
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.authToken !== null
});

export default connect(mapStateToProps)(Header);