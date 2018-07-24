import React from 'react';
import {connect} from 'react-redux';
import {getBudgets} from '../actions/budgets';
import CardOverview from './card-overview';

export class Dashboard extends React.Component {

    componentDidMount() {this.props.dispatch(getBudgets())}
    render() {
        return(
            <div className="dashboard">
                <h2>Overview</h2>
                {this.props.listOfEntries.map((entry) =>
                <CardOverview 
                month={entry.month}
                year={entry.year}
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