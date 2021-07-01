import React from 'react';
import '../App.css'
import { connect } from 'react-redux';
import EditForm from './EditForm';

//Component allows user to update profile data
//This page would theoretically pull from a backend that handles login
//User can update name, birthday, email and phone number that associated with a theoretical account
//Uses redux to handle state of profile information
class Profile extends React.Component{
    render(){
        return(
            <div className="profile-comp">
                <h1>PROFILE</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Email: {this.props.email}</h3>
                <h3>Phone Number: {this.props.pn}</h3>
                <EditForm/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {name: state.name,
    email: state.email,
    pn: state.pn}
    }

export default connect(mapStateToProps)(Profile);