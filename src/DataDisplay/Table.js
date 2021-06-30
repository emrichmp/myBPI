function Table(props){
    //Accepts data from Form/Input.js as props and displays BitCoin History Data in table form
    console.log(props.data)
    console.log(props.start)
    console.log(props.end)
    return <div>
                <h1> Showing data from {props.start} to {props.end} </h1>
            </div>
}

export default Table;