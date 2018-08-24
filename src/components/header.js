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
            <img className="appName" src="https://i.imgur.com/GcbHhry.png"/><Link to="/"></Link>
            <nav className="navigation-buttons">
                <ul>
                    <li>{!this.props.isLoggedIn && <Link to="/login">Login</Link>}</li>
                    <li>{!this.props.isLoggedIn && <Link to="/register">Register</Link>}</li>
                    <li>{this.props.isLoggedIn && <Link to="/dashboard">Dashboard</Link>}</li>
                    <li>{this.props.isLoggedIn && <Link to="/new-entry">Add Entry</Link>}</li>
                    <li>{this.props.isLoggedIn && <Link to="/chart">Chart</Link>}</li>
                    <li>{this.props.isLoggedIn && <Link to='#' onClick={() => this.handleLogout()}>Logout</Link>}</li>
                    <li>{!this.props.isLoggedIn && <Redirect to ="/" />}</li>
                    
                </ul>
            </nav>
        </header>
    );
}
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.authToken !== null
});

export default connect(mapStateToProps)(Header);