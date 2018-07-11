import React from 'react';
import {Link} from 'react-router-dom';
import './about.css'

export default function About(props) {
	return(
		<div id="aboutSection">
			<div className="intro">
				<p className="about">
                Budgetfy is an tool that will help you keep track of your paychecks and spending habits!
                By adding and modifying your budget categories, you will be able to easily keep track of how much to spend and save. 
                Sign up and start budgeting your life today!
                </p>
			</div>
			<button><Link to="/login">Login</Link></button>
			<button><Link to="/register">Register</Link></button>
		</div>
	);
}