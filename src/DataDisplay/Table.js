import './Table.css'

function Table(props){
    //Accepts data from Form/Input.js as props and displays BitCoin History Data in table form
    if (props.data.bpi !== undefined){
        return <div>
                    <h2 className="table-header" > Showing data from {props.start} to {props.end} </h2>
                    <table className="datable">
                        <tr>
                            <th>Date</th>
                            <th>Value</th>
                        </tr>
                        {Object.entries(props.data.bpi).map(([key, value]) => {
                            return(
                            <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                            </tr>
                            )
                        })}
                    </table>
                </div>
    } else {
        return null
    }
}

export default Table;