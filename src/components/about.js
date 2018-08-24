import React from 'react';
import {Chart} from 'chart.js';
import './about.css';


export default function About(props) {
	return(
		<div id="aboutSection">
			{/* <img class="about-background" src="https://i.imgur.com/RpXPgiE.jpg"/> */}
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