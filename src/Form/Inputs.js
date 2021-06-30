import React from 'react';
import './Inputs.css';
import { Currencies } from './Currencies'
import Table from '../DataDisplay/Table';

class Inputs extends React.Component {

    state = {
        start: "2021-06-29",
        end: new Date().toISOString().slice(0, 10),
        currency: "AED",
        data: {}
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.fetchHandler(this.state.start, this.state.end, this.state.currency)
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam, val)
    }

    fetchHandler(start, end, currency) {
        console.log(start, end, currency)
        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
            .then(response => response.json())
            .then(json => this.setState({ data:json }))
    }

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="start-label">Start Date: </label>
                    <input className="start" name="start" type="date" onChange={this.changeHandler}></input>
                    <label className="end-label" >End Date: </label>
                    <input className="end" name="end" type="date" onChange={this.changeHandler}></input>
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
                <Table data={this.state.data}/>
            </div>
        )
    }
}

export default Inputs;