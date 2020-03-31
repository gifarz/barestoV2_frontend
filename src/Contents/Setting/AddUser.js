import React from 'react';
import './style.css';

export const AddUser = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Name :<input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Email Address :<input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Phone Number :<input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Designation :<input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-12">
                            Will Login ? :
                            <div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio"/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" checked="checked"/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    </>
    )
}