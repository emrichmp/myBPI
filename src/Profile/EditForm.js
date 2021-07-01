import React from 'react';
import { connect } from 'react-redux';

class EditForm extends React.Component {
    //While inputs change changeHandler is setting state
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    clickHandler = (e) => {
        e.preventDefault();
        const data = [
            this.state.name,
            this.state.email,
            this.state.pn
        ]
        this.props.dispatch({ type: 'UPDATE', data})
    }
    
    render(){
        return(
            <div>
                {console.log(this.props.name)}
                <form>
                    <input name="name" type="text" placeholder="Name" onChange={this.changeHandler}></input>
                    <br></br>
                    <input name="email" type="email" placeholder="Email" onChange={this.changeHandler}></input>
                    <br></br>
                    <input name="pn" type="text" placeholder="Phone Number" onChange={this.changeHandler}></input>
                    <br></br>
                    <button onClick={this.clickHandler}>Update</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {name: state.name,
    email: state.email,
    pn: state.pn}
    }

export default connect(mapStateToProps)(EditForm);