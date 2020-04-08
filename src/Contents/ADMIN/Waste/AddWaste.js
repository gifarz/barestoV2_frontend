import React from 'react';

export const AddWaste = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Add Waste</h5>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Reference No :<input type="text" id="reference_no" name="reference_no" className="form-control" disabled/>
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
                        <div className="form-group col-md-12">
                            Food Menu:
                            <select name="employee" id="employee" className="form-control">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="table-responsive">
                            <table
                            id="zero_config"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                    <tr>
                                    <th>SN</th>
                                    <th>Ingredient Code</th>
                                    <th>Qty/Amount</th>
                                    <th>Loss Amount</th>
                                    <th style={{ width: "20px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Tiger Nixon</td>
                                    <td>edinburgh@kreasi.com</td>
                                    <td>Kukuruyuk</td>
                                    <td>
                                        <a
                                        className="dropdown-item"
                                        href="javascript:void(0)"
                                        >
                                        <i class="ti-trash"></i>
                                        </a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="form-group col-md-12 mt-4">
                            Total Loss :<input type="text" id="total_loss" name="total_loss" className="form-control" disabled/>
                        </div>
                        <p>Note :</p>
                        <div className="form-group col-md-12">
                            <textarea name="note" id="note" rows="10" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="button-addwaste">
                        <button rel="1" type="submit" className="btn btn-success">
                            <i className="fa fa-check" /> Save
                        </button>
                        <button className="btn btn-inverse" onClick={props.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}