import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { reducer as formReducer } from 'redux-form'
import './editEntry.css';
import {connect} from 'react-redux';
import Input from './input';
import {editBudget} from '../actions/budgets';
import {Link} from 'react-router-dom';
import {getSingleBudget} from '../actions/budgets';

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

    componentDidMount() {this.props.dispatch(getSingleBudget(this.props.match.params.id))}

	render() {
		//if (!this.state.editing) {
	//		return (
	//			<div className="add-button" onClick={() => this.setEditing(true)}>
//					<button type="submit">Add</button>
//				</div>
//			)
//		}



		return (
            <form id="form" className="editEntry" initialValues={this.props.singleEntry} 
                  onSubmit={this.props.handleSubmit(entryValues => this.onSubmit(entryValues))}>
				<div className="editCurrentEntry">
					<h2>Edit Current Entry</h2>
					<ul className="entryDate">
						<li className="dateMonth">Month:</li>
						<label htmlFor="month" hidden>month</label>
						<Field component={Input} type="number" min="1" max="12" name="month" id="month"/>
						<li className="dateYear">Year:</li>
						<label htmlFor="year" hidden>year</label>
						<Field component={Input} type="number" min="2018" name="year" id="year"/>
						<li className="expenses">Expenses:</li>				
						<label htmlFor="expenses" hidden>amount</label>
						<Field component={Input} type="number" name="expenses" id="amount"/>
						<li className="expenseType">Expenses Type:</li>
					</ul>
                   			<ul className="entryList">
								{/* <li className="currentBalance">Current Balance:</li>				
								<label htmlFor="currentBalance" hidden>amount</label>
								<Field component={Input} type="number" name="currentBalance" id="currentBalance"/>
								<li className="paycheck">Paycheck Amount:</li>				
								<label htmlFor="paycheck" hidden>amount</label>
								<Field component={Input} type="number" name="paycheck" id="paycheck"/> */}


								
								<div className="expenseTypeContainer">	
									<label htmlFor="expenseType" hidden>type</label>
									<Field component={Input} type="radio" id="expenseFood" name="expenseType" value="food"/>
									<label htmlFor ="expenseFood">Food</label>
									<Field component={Input} type="radio" id="expenseUtilities" name="expenseType" value="utilities"/>
									<label htmlFor ="expenseUtilities">Utilities</label>
									<Field component={Input} type="radio" id="expenseRent" name="expenseType" value="rent"/>
									<label htmlFor ="expenseFood">Rent</label>
									<Field component={Input} type="radio" id="expenseShopping" name="expenseType" value="shopping"/>
									<label htmlFor ="expenseFood">Shopping</label>
									<Field component={Input} type="radio" id="expensePersonal" name="expenseType" value="personal"/>
									<label htmlFor ="expenseFood">Personal</label>
									<Field component={Input} type="radio" id="expenseOther" name="expenseType" value="other"/>
									<label htmlFor ="expenseFood">Other</label>
								</div>

								{/* <li className="finalBalance">Final Balance:</li>				
								<label htmlFor="finalBalance" hidden>amount</label>
								<Field component={Input} type="number" name="finalBalance" id="finalBalance"/> */}
							</ul>
					
					<div className="button-container">
						<button className="button-submit" type="submit">Confirm Edit</button>
						<Link to="/dashboard"><button className="button-cancel" type="button">Cancel</button></Link>
					</div>
		</div> 
			</form>
		);
	}
}

const mapStateToProps = state => ({
	initialValues: state.entry.entry
})

export default connect(mapStateToProps)(reduxForm({ form: 'newEntry', enableReinitialize: true})(EditEntry));


//const connectedEditEntry = connect(mapStateToProps)(EditEntry)

//export default reduxForm({
//	form: 'newEntry', enableReinitialize: true
//})(connectedEditEntry);