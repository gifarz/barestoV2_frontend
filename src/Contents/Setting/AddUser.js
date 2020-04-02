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
                                    <label><input type="radio" name="radio" id="login_yes"/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" id="login_no"/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <LoginYess checked/> */}
                    <div id="form_input_user">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                Password :<input type="text" className="form-control"/>
                            </div>
                            <div className="form-group col-md-6">
                                Confirm Password :<input type="text" className="form-control"/>
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