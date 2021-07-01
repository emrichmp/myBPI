import LineGraph from 'react-line-graph';
import './Graph.css';

//Recieves data as props from Input.js
//Displays BPI data in date & value
function LineGraphData(props){
    console.log(props.data)
    if (props.data.bpi !== undefined){
        const data = Object.entries(props.data.bpi).map(([key, value]) => {
            return [new Date(key).getTime(), value]
        })
        console.log(data)
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
    } else {
        return null
    }
}

export default LineGraphData;