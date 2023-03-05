
function Tables (props){
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Driver Name</th>
                    <th scope="col">BOL#</th>
                    <th scope="col">TR#</th>
                    <th scope="col">Cell Phone #</th>
                    <th scope="col">Carrier</th>
                    <th scope="col">Time In</th>
                </tr>
            </thead>
            <tbody>
                {props.drivers.map((d,i) => (
                    <tr>
                    <td>{i+1}</td>  
                    <td>{d.driverName}</td>
                    <td>{d.bolNumber}</td>
                    <td>{d.trailerNumber}</td>
                    <td>{d.cellPhoneNumber}</td>
                    <td>{d.driverCarrier}</td>
                    <td>{d.timeStamp}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}
export default Tables;