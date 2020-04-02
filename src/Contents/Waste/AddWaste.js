import React from 'react';

export const AddWaste = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Reference No :<input type="text" className="form-control" disabled/>
                        </div>
                        <div className="form-group col-md-6">
                            Date :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Responsible Person :
                            <select name="employee" id="employee" className="form-control">
                                <option value="">Employee</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            Ingredients :
                            <select name="employee" id="employee" className="form-control">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            Food Menu:
                            <select name="employee" id="employee" className="form-control">
                                <option value="">Select</option>
                            </select>
                        </div>

                    </div>
                    <div className="button-addwaste">
                        <button className="btn btn-info mr-2">Submit</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}