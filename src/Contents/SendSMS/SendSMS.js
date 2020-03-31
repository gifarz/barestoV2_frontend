import React from 'react';

export const SendSMS = (props) => {

    const textLocal = () => {
        props.history.push("https://www.textlocal.com/")
    }

    const configureSMS = () => {
        props.history.push("/smssetting")
    }

    const testSMS = () => {
        props.history.push("/testsms")
    }

    const home = () => {
        props.history.push("/")
    }

    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Send SMS</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Send SMS</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="text-center mt-5">
                        <h3>SMS Service</h3>
                        <h5>Please Choose Option Below</h5>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary mr-2" onClick={textLocal}> Sign Up In TextLocal </button>
                        <button className="btn btn-secondary mr-2" onClick={configureSMS}> Configure SMS </button>
                        <button className="btn btn-secondary mr-2" onClick={testSMS}>Send Test SMS </button>
                        <button className="btn btn-secondary"> Check Balance </button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-secondary mr-2"> SMS to Customer Who Has Birthday Today </button>
                        <button className="btn btn-secondary mr-2"> SMS to Customer Who Has Anniversary Today </button>
                        <button className="btn btn-secondary"> Send SMS to All Customer </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}