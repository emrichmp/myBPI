import './Graph.css'

function PointValue(props){
    const date = new Date(props.point[0][0]).toLocaleDateString("en-US")
    return <div className="pointval">Date:{date} <br></br> Value: ${parseInt(props.point[0][1])}</div>
}

export default PointValue;