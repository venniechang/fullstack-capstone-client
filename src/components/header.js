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
            <div className="appName"><Link to="/">Budgetfy</Link></div>
            <nav>
                <ul>
                    <li>{!this.props.isLoggedIn && <button><Link to="/login">Login</Link></button>}</li>
                    <li>{!this.props.isLoggedIn && <button><Link to="/register">Register</Link></button>}</li>
                    <li>{this.props.isLoggedIn && <button><Link to="/dashboard">Dashboard</Link></button>}</li>
                    <li>{this.props.isLoggedIn && <button><Link to="/new-entry">Add Entry</Link></button>}</li>
                    <li>{this.props.isLoggedIn && <button><Link to="/chart">Chart</Link></button>}</li>
                    <li>{!this.props.isLoggedIn && <Redirect to ="/" />}</li>
                    <li>{this.props.isLoggedIn && <button onClick={() => this.handleLogout()}>Logout</button>}</li>
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