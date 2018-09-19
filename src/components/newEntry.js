import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './newEntry.css';
import Input from './input';
import {addBudget} from '../actions/budgets';
import {Link} from 'react-router-dom';

export class NewEntry extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(entryValues) {
		console.log(entryValues)
		this.props.dispatch(addBudget(entryValues))
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
			<form id="form" className="newEntry" onSubmit={this.props.handleSubmit(entryValues => this.onSubmit(entryValues))}>
				<div className="addNewEntry">
					<h2 className="expenseTitle">enter your expense here</h2>
					<ul className="entryDate">
						
						<label htmlFor="month" hidden>month</label>
						<Field 
							component={Input} 
							type="number" 
							min="1" 
							max="12" 
							name="month" 
							id="month" 
							placeholder="enter month (ex: 05)" 
							maxlength="2"
						/>
						<li className="dateMonth">Month</li>
						
						<label htmlFor="year" hidden>year</label>
						<Field 
							component={Input} 
							type="number" 
							min="2018" 
							name="year" 
							id="year" 
							placeholder="enter year (ex: 2018)" 
							maxlength="4"
						/>
						<li className="dateYear">Year</li>
									
						<label htmlFor="expenses" hidden>amount</label>
						<Field 
							component={Input} 
							type="number" 
							name="expenses" 
							id="amount" 
							placeholder="enter expense (ex: 450)"
						/>
						<li className="expenses">Expense Amount</li><br />
							
						<li className="expenseType">Expenses Type:</li>	
					</ul>	
					
                   			<ul className="entryList">
								<div className="expenseTypeContainer">
									<label htmlFor="expenseType" hidden>type</label>
									<Field component={Input} type="radio" id="expenseFood" name="expenseType" value="food"/>
									<label htmlFor="expenseFood">Food</label>
									<Field component={Input} type="radio" id="expenseUtilities" name="expenseType" value="utilities"/>
									<label htmlFor="expenseUtilities">Utilities</label>
									<Field component={Input} type="radio" id="expenseRent" name="expenseType" value="rent"/>
									<label htmlFor="expenseFood">Rent</label>
									<Field component={Input} type="radio" id="expenseShopping" name="expenseType" value="shopping"/>
									<label htmlFor="expenseFood">Shopping</label>
									<Field component={Input} type="radio" id="expensePersonal" name="expenseType" value="personal"/>
									<label htmlFor="expenseFood">Personal</label>
									<Field component={Input} type="radio" id="expenseOther" name="expenseType" value="other"/>
									<label htmlFor="expenseFood">Other</label>
								</div>
							</ul>
					
					<div className="button-container">
						<button className="button-submit" type="submit">Add Your Entry</button>
						<Link to="/dashboard"><button className="button-cancel" type="button">Cancel</button></Link>
					</div>
		</div> 
			</form>
		);
	}
}

export default reduxForm({
	form: 'newEntry'
})(NewEntry);