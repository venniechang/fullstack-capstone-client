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
					</ul>
                   			<ul className="entryList">
								<li className="currentBalance">Current Balance:</li>				
								<label htmlFor="currentBalance" hidden>amount</label>
								<Field component={Input} type="number" name="currentBalance" id="currentBalance"/>
								<li className="paycheck">Paycheck Amount:</li>				
								<label htmlFor="paycheck" hidden>amount</label>
								<Field component={Input} type="number" name="paycheck" id="paycheck"/>
								<li className="expenses">Expenses:</li>				
								<label htmlFor="expenses" hidden>amount</label>
								<Field component={Input} type="number" name="expenses" id="amount"/>
								<li className="finalBalance">Final Balance:</li>				
								<label htmlFor="finalBalance" hidden>amount</label>
								<Field component={Input} type="number" name="finalBalance" id="finalBalance"/>
							</ul>
					
					<button type="submit">Edit</button>
					<button type="button"> <Link to="/dashboard">Cancel</Link></button>
		</div> 
			</form>
		);
	}
}

const mapStateToProps = state => ({
    initialValues: state.entry.entry
})

export default connect(mapStateToProps)(reduxForm({ form: 'newEntry' })(EditEntry));


//const connectedEditEntry = connect(mapStateToProps)(EditEntry)

//export default reduxForm({
//	form: 'newEntry', enableReinitialize: true
//})(connectedEditEntry);