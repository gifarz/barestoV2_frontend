import React from 'react';

export const DailySaleReport = (props) => {

    const home = () => {
        props.history.push("/")
    }
   return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Daily Sale Report</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href onClick={home}>Home</a>
                </li>
                <li className="breadcrumb-item active">Daily Sale Report</li>
                </ol>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="content mt-5">
                        <div className="content-header">
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="form-group col-md-2">
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="form-group col-md-2">
                                    <select name="user" id="user" className="form-control">
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <button className="btn btn-info">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <button className="btn btn-secondary float-left mr-3">Print</button>
                                <button className="btn btn-secondary float-left mr-3">Excel</button>
                                <button className="btn btn-secondary float-left">PDF</button>
                            </div>
                        </div>
                        <div className="table-responsive mt-5">
                            <table
                            id="zero_config"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>Date</th>
                                        <th>Total Sale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}