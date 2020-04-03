import React from 'react';

export const EditAttendance = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Edit Attendance</h5>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Date :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Employee :
                            <select name="employee" id="employee" className="form-control">
                                <option value="">Employee</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            In Time :<input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Out Time :<input type="text" className="form-control"/>
                        </div>
                            Note : 
                        <div className="form-group col-md-12">
                            <textarea name="note" id="note" cols="30" rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-info">Submit</button>
                    <button className="btn btn-inverse" onClick={props.handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    </>
    )
}