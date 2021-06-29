import React from 'react';
import './Inputs.css';

class Inputs extends React.Component {

    submitHandler(e){
        e.preventDefault()
        console.log("hi")
    }

    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="start">Start Date: </label>
                    <input className="start" type="date"></input>
                    <label className="end" >End Date: </label>
                    <input className="end" type="date"></input>
                    <label className="currency" >Currency</label>
                    <select className="currency" name="currency">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button className="inputbutton">Pull Data</button>
                </form>
            </div>
        )
    }
}

export default Inputs;