import React from 'react';
import CurrentDisplay from './CurrentDisplay';

class Current extends React.Component{

    state = {
        data: {}
    }

    //When component mounts, Current.js fetches to coindesk to get current BitCoin prices, sets json response to data state
    //data is then passed into Current Display as prop
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }

    render(){
        return(
            <CurrentDisplay data={this.state.data}/>
        )
    }
}

export default Current;