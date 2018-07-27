import React from 'react';
//import './card-overview.css';

export default function CardOverview(props) {

	


	return (
		<div className="cardSummaryStyling">
			<h2>Date: {props.month}-{props.year}</h2>
			<section>
				<p>Current Balance: ${props.currentBalance}</p>
				<p>New Paycheck: ${props.paycheck}</p>
				<p>Total Expenses: ${props.expenses}</p>
				<p>Final Balance: ${props.finalBalance}</p>
			</section>
			<div className="buttons">
			<button className="editEntryButton">Edit Budget</button>
			<button className="deleteEntryButton" onClick={() => props.onDelete(props.entryId)}>Delete Budget</button>
			</div>
		</div>
	)
}
