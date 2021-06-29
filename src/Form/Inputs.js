import React from 'react';
import './Inputs.css';

class Inputs extends React.Component {
    render(){
        return(
            <div>
                <form className="form">
                    <label>Start Date:</label>
                    <input type="date"></input>
                    <label>End Date:</label>
                    <input type="date"></input>
                    <label>Currency</label>
                    <select name="currency">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button>Pull Data</button>
                </form>
            </div>
        )
    }
}

export default Inputs;