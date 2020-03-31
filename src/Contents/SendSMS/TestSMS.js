import React from 'react';

export const TestSMS = (props) => {

    const backTo = () => {
        props.history.push("/sendsms")
    }
    return (
        <div className="container mt-5">
            <h3 className="text-center">Send Test SMS</h3>
            <hr/>
            <div className="form w-50">
                <div className="form-group">
                    Restaurant Name : 
                    <input className="form-control" type="text" name="restauranname" id="restauranname"/>
                </div>
                <div className="form-group">
                    Number : <span>*must include country code, otherwise sms will fail</span> 
                    <input className="form-control" type="text" name="number" id="number"/>
                </div>
                <div className="form-group">
                    Message : 
                    <textarea className="form-control" type="text" name="message" id="message"/>
                </div>
                <div>
                    <button className="btn btn-secondary mr-2">Submit</button>
                    <button className="btn btn-secondary" onClick={backTo}>Back</button>
                </div>
            </div>
        </div>
    )
}