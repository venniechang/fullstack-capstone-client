import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {getBudgets} from '../actions/budgets';
import {connect} from 'react-redux';
import './chart.css';


class Chart extends React.Component {

    componentDidMount() {

    this.props.dispatch(getBudgets())
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(this.props);
        if(nextProps.listOfEntries!==this.props.listOfEntries) {

        let label = [];
        let data = [];

        const byCategory = nextProps.listOfEntries.reduce((acc, next) => { 
            return { ...acc, [next.expenseType]: acc[next.expenseType] ? acc[next.expenseType] + next.expenses : next.expenses } 
        }, {})

        Object.keys(byCategory).forEach(expenseType => { label.push(expenseType); 
            data.push(byCategory[expenseType]) })

        //nextProps.listOfEntries.forEach((entry) => {
            //label.push(entry.month + "-" + entry.year);
        //    label.push(entry.expenseType);
        //    data.push(entry.finalBalance);
        //    });

            let chartData = this.state.chartData
            chartData.labels = label;
            chartData.datasets[0].data = data;

            this.setState({chartData: chartData})


        }
     }

    constructor(props) {
        super(props);
        
        //this.props.dispatch(getBudgets())
        this.state={
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: "Each of your expenses totaled by category",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
    }

  render() {
    return (
      <div className="chart">
        <h2>Expense Overview</h2>
        <Bar
          data={this.state.chartData}
          width={80}
          height={40}
          options={{
            legend: {
                display: true,
                position: 'right'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }]
            }
          }}
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({
    listOfEntries: state.reducer.listOfEntries
})

export default connect(mapStateToProps)(Chart);

//export default Chart;