import React from 'react';
import './Inputs.css';
import { Currencies } from './Currencies'

class Inputs extends React.Component {

    state = {
        current: []
    }

    submitHandler(e){
        e.preventDefault()
        console.log("hi")
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam, val)
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
            </div>
        )
    }
}

export default Inputs;