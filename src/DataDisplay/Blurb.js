import './Blurb.css'

//Blurb for the page, explains how the app works and what it does
function Blurb(){
    return <div className="blurb">
                <h3 className="blurb-header">myBPI - The Historical BitCoin Value Reference Tool</h3>
                <div className="blurb-words">
                    <h4 className="blurb-sentence">This tool can be used to find information on bitcoin data. Feel free</h4>
                    <h4 className="blurb-sentence">to use this tool to find the current value of bitcoin or </h4>
                    <h4 className="blurb-sentence">see the change in bitcoins value through a time frame of</h4>
                    <h4 className="blurb-sentence"> your choosing. This platform supports both tabular and</h4>
                    <h4 className="blurb-sentence"> graphic data.</h4>
                </div>
            </div>
}

export default Blurb;