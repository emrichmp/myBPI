import React from 'react';
import './App.css'

//Component allows user to update profile data
//This page would theoretically pull from a backend that handles login
//User can update name, birthday, email and phone number that associated with a theoretical account
//Uses redux to handle state of profile information
class Profile extends React.Component{

    state = {
        name: "User",
        email: "email@vian.ai",
        pn: "917-123-4567"
    }

    render(){
        return(
            <div className="profile-comp">
                <h1>PROFILE</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Email: {this.state.email}</h3>
                <h3>Phone Number: {this.state.pn}</h3>
            </div>
        )
    }
}

export default Profile;