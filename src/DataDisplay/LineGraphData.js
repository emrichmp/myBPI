import LineGraph from 'react-line-graph';

//Recieves data as props from Input.js
//Displays BPI data in date & value
function LineGraphData(){
    const data = [10,0,-2.5,540];
    const props = {
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
 
    return <LineGraph {...props}/>
}

export default LineGraphData;