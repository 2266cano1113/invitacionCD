import React, { Component } from 'react';
import './App.css';
import DateCountdown from 'react-date-countdown-timer';
class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            toHold:'2028-03-03',
            msfHold:'year',
            nofHold:6,
            dateTo:'2028-03-03',
            mostSignificantFigure:'none',
            numberOfFigures:6
        }
    }
    onToChange = (event) => {
        this.setState({toHold:event.target.value})
    }

    onMsfChange = (event) => {
        this.setState({msfHold:event.target.value})
    }
    onNofChange = (event) => {
        this.setState({nofHold:parseInt(event.target.value,10)})
    }
    onRenderClick = () => {
        let { toHold, msfHold, nofHold } = this.state;
        this.setState({dateTo:toHold,mostSignificantFigure:msfHold,numberOfFigures:nofHold});
    }
  render() {
    let { dateTo, mostSignificantFigure, numberOfFigures } = this.state;
    return (
      <div className="App">
        <label>dateTo: <input type="text" defaultValue={dateTo} onChange={this.onToChange} /></label><br/>
        <label>mostSignificantFigure:
            <select onChange={this.onMsfChange} defaultValue={mostSignificantFigure} >
                <option value="year">year</option>
                <option value="month">month</option>
                <option value="day">day</option>
                <option value="hour">hour</option>
                <option value="min">min</option>
                <option value="sec">sec</option>
            </select>
        </label>
            <br/>
        <label>numberOfFigures: <input type="number" onChange={this.onNofChange}  defaultValue={numberOfFigures}/></label><br/>
        <button onClick={this.onRenderClick}>Render</button>
        <br/>
        <br/>
        <br/>
        <DateCountdown callback={() => {alert('Time\'s up!')}} dateTo={dateTo} mostSignificantFigure={mostSignificantFigure} numberOfFigures={numberOfFigures} />
      </div>
    );
  }
}

export default App;
