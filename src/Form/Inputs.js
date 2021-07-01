import React from 'react';
import './Inputs.css';
import { Currencies } from './Currencies'
import Table from '../DataDisplay/Table';

class Inputs extends React.Component {
    //initialization of state, set default values to handle instance of user clicking the button without changing inputs
    state = {
        start: "2021-06-29",
        end: new Date().toISOString().slice(0, 10),
        currency: "AED",
        data: {}
    }

    //when button is clicked, submit handler prevent page reload and passes the states as args to the fetchHandler
    submitHandler = (e) => {
        e.preventDefault()
        this.fetchHandler(this.state.start, this.state.end, this.state.currency)
    }

    //While inputs change changeHandler is setting state
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam, val)
    }

    //takes in the state, end and currency to make a fetch the to coindesk to pull specific history data, then sets the response to the data state
    //this data is then passed into the table component as props
    fetchHandler(start, end, currency) {
        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
            .then(response => response.json())
            .then(json => this.setState({ data:json }))
    }

    //displays form, takes in currencies object to show the options for select, also mounts table component
    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="start-label">Start Date: </label>
                    <input className="start" name="start" type="date" onChange={this.changeHandler}></input>
                    <label className="end-label" >End Date: </label>
                    <input className="end" name="end" type="date" onChange={this.changeHandler}></input>
                    {/* CoinDesk does not currently support custom currency for historical data requests, only USD */}
                    <label className="currency-label" >Currency: </label>
                    <select className="currency" name="currency" onChange={this.changeHandler}>
                        {Currencies.map((item, index) => {
                            return(
                                <option key={index} value={item.currency}>{item.currency} - {item.country}</option>
                            )
                        })}
                    </select>
                    <button className="inputbutton">Pull History</button>
                </form>
                <Table start={this.state.start} end={this.state.end} data={this.state.data}/>
            </div>
        )
    }
}

export default Inputs;