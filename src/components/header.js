import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {connect} from 'react-redux';

export class Header extends React.Component {

    handleLogout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

    let logoutButton;
    if(this.props.isloggedIn) {
        logoutButton = (<button onClick={() => this.handleLogout()}>Logout</button>
        );
    }
    
    return (
        <header className="appHeader">
            <h1 className="appName"><Link to="/">Budgetfy</Link></h1>
            <button><Link to="/login">Login</Link></button>
			<button><Link to="/register">Register</Link></button>
            {logoutButton}
        </header>
    );
}
}
const mapStateToProps = state ({
    isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);