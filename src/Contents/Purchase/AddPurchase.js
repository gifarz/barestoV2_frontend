import React from 'react';

export const AddPurchase = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Add Purchase</h5>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Reference No :<input type="text" className="form-control" disabled/>
                        </div>
                        <div className="form-group col-md-6">
                            Date :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Supplier :
                            <select name="supplier" id="supplier" className="form-control">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            Ingredients :
                            <select name="ingredients" id="ingredients" className="form-control">
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
                                    <th>Unit Price</th>
                                    <th>Qty/Amount</th>
                                    <th>Total</th>
                                    <th style={{ width: "20px" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
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
                    </div>

                    <div className="form-group col-md-12 mt-4">
                        G.Total :<input type="text" className="form-control" disabled/>
                    </div>
                    <div className="form-group col-md-12">
                        Paid :<input type="text" className="form-control" disabled/>
                    </div>
                    <div className="form-group col-md-12">
                        Due :<input type="text" className="form-control" disabled/>
                    </div>

                    <div className="button-addwaste mt-4">
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