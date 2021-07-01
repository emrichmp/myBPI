import LineGraph from 'react-line-graph';
import './Graph.css';

//Recieves data as props from Input.js
//Displays BPI data in date & value
function LineGraphData(props){
    console.log(props.data)
    const data = [340,10,-2.5,540];
    const specs = {
    data,
    smoothing: 0.3,
    accent: 'palevioletred',
    fillBelow: 'rgba(200,67,23,0.1)',
    hover: true,
    gridX: true,
    gridY: true,
    width: '40%',
    height: '80%'
    };
 
    return <LineGraph className="Graph" {...specs}/>
}

export default LineGraphData;