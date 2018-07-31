import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { reducer as formReducer } from 'redux-form'
import './newEntry.css';
import {connect} from 'react-redux';
import Input from './input';
import {editBudget} from '../actions/budgets';
import {Link} from 'react-router-dom';

export class EditEntry extends React.Component {
	constructor(props) {
		super(props);
		//this.state = {
		//	editing: false
		//}
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(entryValues) {
		console.log(this.props.match.params.id)
		const {currentBalance, paycheckAmount, expenses, finalBalance} = entryValues;
        const values = {currentBalance, paycheckAmount, expenses, finalBalance};
		this.props.dispatch(editBudget(this.props.match.params.id, entryValues))
		.then(() => this.props.history.push('/dashboard'))
	}


	render() {
		//if (!this.state.editing) {
	//		return (
	//			<div className="add-button" onClick={() => this.setEditing(true)}>
//					<button type="submit">Add</button>
//				</div>
//			)
//		}



		return (
			<form id="form" className="editEntry" onSubmit={this.props.handleSubmit(entryValues => this.onSubmit(entryValues))}>
				<div className="addNewEntry">
					<h2>Add New Entry</h2>
					<ul className="entryDate">
						<li className="dateMonth">Month:</li>
						<label htmlFor="month" hidden>month</label>
						<Field component={Input} type="number" min="1" max="12" name="month" id="month" placeholder="month"/>
						<li className="dateYear">Year:</li>
						<label htmlFor="year" hidden>year</label>
						<Field component={Input} type="number" min="2018" name="year" id="year" placeholder="year"/>
					</ul>
                   			<ul className="entryList">
								<li className="currentBalance">Current Balance:</li>				
								<label htmlFor="currentBalance" hidden>amount</label>
								<Field component={Input} type="number" name="currentBalance" id="currentBalance" placeholder="enter current balance"/>
								<li className="paycheck">Paycheck Amount:</li>				
								<label htmlFor="paycheck" hidden>amount</label>
								<Field component={Input} type="number" name="paycheck" id="paycheck" placeholder="enter your paycheck amount"/>
								<li className="expenses">Expenses:</li>				
								<label htmlFor="expenses" hidden>amount</label>
								<Field component={Input} type="number" name="expenses" id="amount" placeholder="enter total expenses"/>
								<li className="finalBalance">Final Balance:</li>				
								<label htmlFor="finalBalance" hidden>amount</label>
								<Field component={Input} type="number" name="finalBalance" id="finalBalance" placeholder="enter your total balance"/>
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


					<button type="submit">Edit</button>
					<button type="button"> <Link to="/dashboard">Cancel</Link></button>
		</div> 
			</form>
		);
	}
}

const mapStateToProps = state => ({

})

export default reduxForm({
	form: 'newEntry'
})(EditEntry);