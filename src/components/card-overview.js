import React from 'react';
import './card-overview.css';

export default function CardOverview(props) {

	return (
		<div className="cardSummaryStyling">
			<h2>Date: 12/12/2012</h2>
			<section>
				<p>Current Balance: $10,000</p>
				<p>New Paycheck: $4,000</p>
				<p>Total Expenses: -$2,000</p>
				<p>Final Balance: $12,000</p>
			</section>
		</div>
	)
}
