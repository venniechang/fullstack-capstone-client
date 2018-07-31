import React from 'react';
import {connect} from 'react-redux';
import {getBudgets} from '../actions/budgets';
import CardOverview from './card-overview';
import {deleteBudget} from '../actions/budgets';

export class Dashboard extends React.Component {

    componentDidMount() {this.props.dispatch(getBudgets())}

    onDelete= (id) => {
		this.props.dispatch(deleteBudget(id))
	}

    render() {
        return(
            <div className="dashboard">
                <h2>Overview</h2>
                {this.props.listOfEntries.map((entry) =>
                <CardOverview key={entry._id}
                month={entry.month}
                year={entry.year}
                entryId={entry._id}
                onDelete={this.onDelete}
                currentBalance={entry.currentBalance}
                paycheck={entry.paycheck}
                expenses={entry.expenses}
                finalBalance={entry.finalBalance} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listOfEntries: state.reducer.listOfEntries
})

export default connect(mapStateToProps)(Dashboard);