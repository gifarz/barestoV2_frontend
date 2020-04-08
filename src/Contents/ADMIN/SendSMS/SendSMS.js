import React from 'react';

export const SendSMS = (props) => {

    const configureSMS = () => {
        props.history.push("/smssetting")
    }

    const testSMS = () => {
        props.history.push("/testsms")
    }

    const checkBalance = () => {
        props.history.push("/checkbalance")
    }

    const smsAllCustomer = () => {
        props.history.push("/smsallcustomer")
    }

    const customerWhoBirthday = () => {
        props.history.push("/customerwhobirthday")
    }

    const customerWhoAnniversary = () => {
        props.history.push("/customerwhoanniversary")
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
            <div className="card w-100">
                <div className="card-body">
                    <div className="text-center mt-2">
                        <h3>SMS Service</h3>
                        <h5>Please Choose Option Below</h5>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info mr-2" onClick={()=> window.open("https://www.textlocal.com/", "_blank")}>Sign Up In TextLocal </button>
                        <button className="btn btn-info mr-2" onClick={configureSMS}> Configure SMS </button>
                        <button className="btn btn-info mr-2" onClick={testSMS}>Send Test SMS </button>
                        <button className="btn btn-info" onClick={checkBalance}> Check Balance </button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-info mr-2" onClick={customerWhoBirthday}> SMS to Customer Who Has Birthday Today </button>
                        <button className="btn btn-info mr-2" onClick={customerWhoAnniversary}> SMS to Customer Who Has Anniversary Today </button>
                        <button className="btn btn-info" onClick={smsAllCustomer}> Send SMS to All Customer </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}