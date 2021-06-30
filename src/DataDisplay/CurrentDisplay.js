function CurrentDisplay(props){
    console.log(props.data.bpi)
    return <div className="current-display">
                <h1>Current BPI Data:</h1>
                {/* {props.data.bpi.map((item, index) => {
                    return(
                    <h3 key={index}>{item.code}: {item.symbol} {item.rate}</h3>
                    )
                })} */}
        </div>
}

export default CurrentDisplay;