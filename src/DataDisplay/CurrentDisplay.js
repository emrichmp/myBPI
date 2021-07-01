import he from 'he';
import './Current.css'

function CurrentDisplay(props){
    //presentation component that takes in prop data from Current.js and displays it on page
    //utilized function component because state is not required
    console.log(props.data.bpi)
    if (props.data.bpi !== undefined){
        console.log("yeet")
        return <div>
                <h3 className="current-display" >Current BitCoin Values</h3>
                    {Object.entries(props.data.bpi).map(([key, value]) => {
                        return <h3 className="current-data" key={key}> {value.code} {he.decode(value.symbol)} {value.rate} </h3>
                    })}
             </div>
    } else {
        console.log(":(")
        return <div>fook</div>
    }
}

export default CurrentDisplay;