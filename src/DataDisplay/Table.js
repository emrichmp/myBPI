import './Table.css'

function Table(props){
    //Accepts data from Form/Input.js as props and displays BitCoin History Data in table form
    console.log(props.data)
    console.log(props.start)
    console.log(props.end)
    return <div>
                <h2 className="table-header" > Showing data from {props.start} to {props.end} </h2>
                <table className="datable">
                    <tr>
                        <th>Date</th>
                        <th>Value</th>
                    </tr>
                </table>
            </div>
}

export default Table;