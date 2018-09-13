import React from 'react';
import './about.css';


export default function About(props) {
	return(
		<div id="aboutSection">
			<div className="intro">
				<h3 className="about">
                	<p>Keep track of your expenses with expensciate!</p><br />
                	<p>Add & Modify expense categories, monitor your spendings!</p><br />
                	<p>Sign up and start recording your expenses today!</p>
				</h3>
			</div>
		</div>
	);
}