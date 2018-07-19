import React from 'react';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {

    render() {
        return(
            <div className="dashboard">
                <h2>Overview</h2>
                <CardOverview />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    //somethng
})

export default connect(mapStateToProps)(Dashboard);