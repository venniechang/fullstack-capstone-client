import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <h1>Budgetfy</h1>
            <button><Link to="/login">Login</Link></button>
			<button><Link to="/register">Register</Link></button>
        </header>
    );
}