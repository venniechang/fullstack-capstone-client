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
            <Link to="/"><img className="appName" src="https://i.imgur.com/GcbHhry.png"/></Link>
            <nav className="navigation-buttons">
                <ul>
                    {!this.props.isLoggedIn && <li className="register-link"><Link to="/login">Login</Link></li>}
                    {!this.props.isLoggedIn && <li className="register-link"><Link to="/register">Register</Link></li>}
                    {this.props.isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
                    {this.props.isLoggedIn &&  <li><Link to="/new-entry">Add Entry</Link></li>}
                    {this.props.isLoggedIn && <li><Link to="/chart">Chart</Link></li>}
                    {this.props.isLoggedIn && <li><Link to='#' onClick={() => this.handleLogout()}>Logout</Link></li>}
                    {!this.props.isLoggedIn && <Redirect to ="/" />}
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