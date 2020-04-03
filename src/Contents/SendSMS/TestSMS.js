import React from 'react';

export const TestSMS = (props) => {

    const backTo = () => {
        props.history.push("/sendsms")
    }

    const home = () => {
        props.history.push("/")
    }

    const sendSMS = () => {
        props.history.push("/sendsms")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Test SMS</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item" onClick={sendSMS} style={{cursor: "pointer"}}>Send SMS</li>
                    <li className="breadcrumb-item active">Test SMS</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form w-50">
                        <div className="form-group">
                            Restaurant Name : 
                            <input className="form-control" type="text" name="restauranname" id="restauranname"/>
                        </div>
                        <div className="form-group">
                            Number : <span style={{fontSize: "11px", color: "red"}}>*must include country code, otherwise sms will fail</span> 
                            <input className="form-control" type="text" name="number" id="number"/>
                        </div>
                        <div className="form-group">
                            Message : 
                            <textarea className="form-control" type="text" name="message" id="message"/>
                        </div>
                        <div>
                            <button className="btn btn-info mr-2">Submit</button>
                            <button className="btn btn-inverse" onClick={backTo}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}