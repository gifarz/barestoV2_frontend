import React from 'react';

export const CheckBalance = (props) => {

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
                <h4 className="text-themecolor">Check Balance</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item" onClick={sendSMS} style={{cursor: "pointer"}}>Send SMS</li>
                    <li className="breadcrumb-item active">Check Balance</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form-row">
                        <h3>Your current textlocal sms credit balance is Connection is not properly established, please check in TextLocal to know how many sms you can send by this credit.</h3>
                        <button className="btn btn-inverse mt-4" onClick={sendSMS}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}