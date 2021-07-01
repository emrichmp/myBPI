import LineGraph from 'react-line-graph';
import './Graph.css';
import GraphLabel from './GraphLabel';
import PointValue from './PointValue';
import React, { useState } from 'react';

//Recieves data as props from Input.js
//Displays BPI data in date & value
function LineGraphData(props){
    const [point, setPoint] = useState([0,0])

    //Uses hook to set state of point onHover this is then
    //passed into PointValue component
    const hoverHandler = (x,y) => {
        setPoint([x,y])
    }
    //if bpi data is present, we iterate through the object to change it into array
    //We then use these data pairs to pass into the graph
    if (props.data.bpi !== undefined){
        const data = Object.entries(props.data.bpi).map(([key, value]) => {
            return [new Date(key).getTime(), value]
        })
        const specs = {
        data,
        smoothing: 0.3,
        accent: 'palevioletred',
        fillBelow: 'rgba(200,67,23,0.1)',
        hover: true,
        gridX: true,
        gridY: true,
        onHover:(x,y) => {hoverHandler(x,y)}
        };
        return <div className="Graph" >
                <h4>BPI History Graph</h4>
                <GraphLabel />
                <LineGraph {...specs}/>
                <PointValue point={point}/>
            </div>
    } else {
        return null
    }
}

export default LineGraphData;