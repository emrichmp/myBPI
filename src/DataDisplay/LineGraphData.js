import LineGraph from 'react-line-graph';
import './Graph.css';
import GraphLabel from './GraphLabel';
import PointValue from './PointValue';

//Recieves data as props from Input.js
//Displays BPI data in date & value
function LineGraphData(props){

    const hoverHandler = (x,y) => {
        console.log(x,y)
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
                <PointValue />
            </div>
    } else {
        return null
    }
}

export default LineGraphData;