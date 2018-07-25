import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { reducer as formReducer } from 'redux-form'
import './newEntry.css';
import {connect} from 'react-redux';

export class NewEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(entryValues) {
		console.log(entryValues)
		const {currentBalance, paycheckAmount, expenses, finalBalance} = entryValues;
		const values = {currentBalance, paycheckAmount, expenses, finalBalance};
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
			<form id="form" className="newEntry" onSubmit={this.props.handleSubmit(entryValues => this.onSubmit(entryValues))}>
				<div className="addNewEntry">
					<h2>Add New Entry</h2>
						<label htmlFor="month" hidden>month</label>
						<Field input type="number" min="1" max="12" name="month" id="month" placeholder="month"/>
						<label htmlFor="year" hidden>year</label>
						<Field input type="number" min="2018" name="year" id="year" placeholder="year"/>
                   			<ul className="entryList">
								<li className="currentBalance">Current Balance:</li>				
								<label htmlFor="currentBalance" hidden>amount</label>
								<Field input type="number" name="currentBalance" id="currentBalance" placeholder="enter current balance"/>
								<li className="paycheckAmount">Paycheck Amount:</li>				
								<label htmlFor="paycheckAmount" hidden>amount</label>
								<Field input type="number" name="paycheckAmount" id="paycheckAmount" placeholder="enter your paycheck amount"/>
								<li className="expenses">Expenses:</li>				
								<label htmlFor="expenses" hidden>amount</label>
								<Field input type="number" name="expenses" id="amount" placeholder="enter total expenses"/>
								<li className="finalBalance">Final Balance:</li>				
								<label htmlFor="finalBalance" hidden>amount</label>
								<Field input type="number" name="finalBalance" id="finalBalance" placeholder="enter your total balance"/>
							</ul>
					
					
					{/*<div className="expenses">
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
					</div>*/}


					<button type="submit">Add</button>
					<button type="button" onClick={() => this.setEditing(false)}>Cancel</button>
		</div> 
			</form>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect()(NewEntry);