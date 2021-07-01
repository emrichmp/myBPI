function PointValue(props){
    const date = new Date(props.point[0][0]).toLocaleDateString("en-US")
    return <div>Date: {date} Value: $ {props.point[0][1]}</div>
}

export default PointValue;