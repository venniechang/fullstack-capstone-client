import React from 'react';
import './newEntry.css';

export class NewEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="add-button" onClick={() => this.setEditing(true)}>
					<button href="#addLedgerEntry">Add</button>
				</div>
			)
		}

		return (
			<form id="Form" className="newEntry" onSubmit={this.onSubmit}>
				<div className="addNewEntry">
					<h2>Add New Entry</h2>
					<label htmlFor="month" hidden>month</label>
					<input type="number" min="1" max="12" name="month" id="month" placeholder="month"/>
					<label htmlFor="year" hidden>year</label>
					<input type="number" min="2018" name="year" id="year" placeholder="year"/>
                    <h2 className="paycheck">Add Paycheck Amount:</h2>				
					<label htmlFor="amount" hidden>amount</label>
					<input type="number" name="amount" id="amount" placeholder="amount"/>
					
					
					<div className="expenses">
						<h2 className="expenseSelect">Select Your Expense:</h2>
						<input type="radio" name="expense" id="entertainment" value="entertainment"/>
						<label htmlFor="entertainment">Entertainment</label>
						
						<input type="radio" name="expense" id="loans" value="loans"/>
						<label htmlFor="loans">Loans</label>
						
						<input type="radio" name="expense" id="bills" value="bills"/>
						<label htmlFor="bills">Bills</label>
						
						<input type="radio" name="expense" id="groceries" value="groceries"/>
						<label htmlFor="groceries">Groceries</label>
						
						<input type="radio" name="expense" id="personal" value="personal"/>
						<label htmlFor="personal">Personal</label>
						
						<input type="radio" name="expense" id="other" value="other"/>
						<label htmlFor="other">Other</label>
					</div>
					<button type="submit">Add</button>
					<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
				</div>
			</form>
		);
	}
}

export default connect(mapStateToProps)(NewEntry);