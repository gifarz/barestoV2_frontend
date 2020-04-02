import React, {useEffect} from 'react';
import './style.css';

export const EditUser = (props) => {

    useEffect(() => {
        window.$("#select_all").on("click", function() {
            window.$('input:checkbox').not(this).prop('checked', this.checked);
        });

        window.$("#login_yes").on('click',function() {
            window.$("#check-radio-button").fadeIn();
        });
        window.$("#login_no").on('click',function() {
            window.$("#check-radio-button").fadeOut();
          
        });
      }, []);

    return (
    <>
      <div className="row">
            <div className="card w-100">
            <div className="card-body">
                    <h5 className="card-title">Edit User</h5>
                    <hr/>
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
                    <div id="check-radio-button">
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

                        <p>Menu Access</p>
                        <div className="form-check form-check-inline col-md-4">
                            <input className="form-check-input-lg" type="checkbox" id="select_all" value="option1"/>
                            <label className="form-check-label" for="select_all">Select All</label>
                        </div>
                        <hr/>
                        <div className="form-row">
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="attendance" value="option1"/>
                                <label className="form-check-label" for="attendance">Attendance</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="customer_due_receive" value="option2"/>
                                <label className="form-check-label" for="customer_due_receive">Customer Due</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="receive" value="option2"/>
                                <label className="form-check-label" for="receive">Expense</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="inventory_adjustmnent" value="option2"/>
                                <label className="form-check-label" for="inventory_adjustment">Inventory Adjust</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="master" value="option2"/>
                                <label className="form-check-label" for="master">Master</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="report" value="option2"/>
                                <label className="form-check-label" for="report">Report</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="sale_waiter" value="option2"/>
                                <label className="form-check-label" for="sale_waiter">Sale Waiter</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="supplier_payment" value="option2"/>
                                <label className="form-check-label" for="supplier_payment">Supplier Payment</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="waiter" value="option2"/>
                                <label className="form-check-label" for="waiter">Waiter</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="bar" value="option2"/>
                                <label className="form-check-label" for="bar">Bar</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="dashboard" value="option2"/>
                                <label className="form-check-label" for="dashboard">Dashboard</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="inventory" value="option2"/>
                                <label className="form-check-label" for="inventory">Inventory</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="kitchen" value="option2"/>
                                <label className="form-check-label" for="kitchen">Kitchen</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="purchase" value="option2"/>
                                <label className="form-check-label" for="purchase">Purchase</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="sale" value="option2"/>
                                <label className="form-check-label" for="sale">Sale</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="sms" value="option2"/>
                                <label className="form-check-label" for="sms">SMS</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="user" value="option2"/>
                                <label className="form-check-label" for="user">User</label>
                            </div>
                            <div className="form-check form-check-inline col-md-4">
                                <input className="form-check-input" type="checkbox" id="waste" value="option2"/>
                                <label className="form-check-label" for="waste">Waste</label>
                            </div>
                        </div>
                    </div>

                    <button rel="1" type="submit" className="btn btn-success mt-4">
                            <i className="fa fa-check" /> Save
                    </button>
                    <button className="btn btn-inverse mt-4" onClick={props.handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    </>
    )
}