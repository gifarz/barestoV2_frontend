import React from 'react';

export const CustomerWhoBirthday = (props) => {

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
                <h4 className="text-themecolor">Customer Who Birthday</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item" onClick={sendSMS} style={{cursor: "pointer"}}>Send SMS</li>
                    <li className="breadcrumb-item active">Customer Who Birthday</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form-row">
                        <div className="form w-50">
                            <div className="form-group">
                                Restaurant Name : 
                                <input className="form-control" type="text" name="restauranname" id="restauranname"
                                value="Warung Kukuruyuk"
                                />
                            </div>
                            <div className="form-group">
                                Message : 
                                <textarea className="form-control" type="text" name="message" id="message"
                                value="Wishing you Happy Birthday from Warung Kukuruyuk. Please come to our restaurant and enjoy discount in your special day."
                                />
                            </div>
                            <p>There are 0 customer has birthday today. </p>
                            <div>
                                <button className="btn btn-info mr-2">Submit</button>
                                <button className="btn btn-inverse" onClick={sendSMS}>Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}