import { useEffect, useState } from "react";
function Form(props) {
    const [driverName,setDriveName]=useState('')
    const [bolNumber,setBolNumber]=useState('')
    const [trailerNumber,setTrailerNumber]=useState('')
    const [cellPhoneNumber,setCellPhoneNumber]=useState('')
    const [driverCarrier,setDriverCarrier]=useState('')
    const [timeStamp,setTimeStamp]=useState('')
    
    function displayUserInfo(e){
        e.preventDefault()
        const driver= {driverName,bolNumber,trailerNumber,cellPhoneNumber,driverCarrier,timeStamp}
        props.addDriver(driver)

    }
    return (
        <div className="row justify-content-md-center noprint">
            <form class="col-4 row text-center">
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="inputName">Driver Name:</label>
                        <input onChange={(e)=>setDriveName(e.target.value)} required  type="text" class="form-control" id="driverName"/>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputBol">BOL Number:</label>
                        <input onChange={(e)=>setBolNumber(e.target.value)} required type="text" class="form-control" id="bolNumber" minlength="6" maxlength="6" placeholder="Example: 736957" />
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputTr">Trailer Number: </label>
                        <input onChange={(e)=>setTrailerNumber(e.target.value)} required type="text" class="form-control" id="trailerNumber" />
                    </div>
                    <div class="form-group">
                        <label for="inputCell">Cell Phone Number:</label>
                        <input onChange={(e)=>setCellPhoneNumber(e.target.value)} required type="tel" class="form-control" id="cellPhone"/>
                    </div>
                    <div class="form-group">
                        <label for="inputCarrier">Carrier:</label>
                        <input onChange={(e)=>setDriverCarrier(e.target.value)} required type="text" class="form-control" id="carrier"/>
                    </div>
                    <div class="form-group">
                        <label for="timeStamp">Time In:</label>
                        <input onChange={(e)=>setTimeStamp(e.target.value)} required type="text" class="form-control" id="carrier"/>
                    </div>
                </div> 
                <div class="form-group col-md-12">
                    <button onClick={(e) => displayUserInfo(e)} type="submit" class="btn btn-primary m-2">Sign in</button>
                </div>      
        </form>
        </div>
    );
}
export default Form;