import React from 'react';

export const LowInventoryReport = (props) => {

    const home = () => {
        props.history.push("/")
    }
   return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Low Inventory Report</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Low Inventory Report</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="content mt-2">
                        <div className="row mt-1">
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
                                        <th>Ingredient (Code)</th>
                                        <th>Category</th>
                                        <th>Stock Quantity/Amount</th>
                                        <th>Alert Quantity/Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
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