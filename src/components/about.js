import React from 'react';
import './about.css'

export default function About(props) {
	return(
		<div id="aboutSection">
			<div className="intro">
				<h3 className="about">
                	<p>Budgetfy is an tool that will help you keep track of your paychecks and spending habits!<br /></p>
                	<p>By adding and modifying your budget categories, you will be able to easily keep track of how much to spend and save.<br /></p>
                	<p>Sign up and start budgeting your life today!</p>
				</h3>
			</div>
		</div>
	);
}