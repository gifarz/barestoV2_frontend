import React from 'react';

export const SmsSetting = (props) => {

    const sendSMS = () => {
        props.history.push("/sendsms")
    }
    const home = () => {
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">SMS Setting</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">SMS Setting</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="text-center">
                        <h3>SMS Setting</h3>
                        <h5>(Provide your TextLocal https://www.textlocal.com/ SMS Credentials)</h5>
                    </div>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            Email Address :<input type="email" placeholder="insert email" className="form-control"/>
                        </div>
                        <div className="form-group col-md-4">
                            Password :<input type="password" placeholder="insert password" className="form-control"/>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-secondary mr-2">Submit</button>
                        <button className="btn btn-secondary" onClick={sendSMS}>Go to SMS Page</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}