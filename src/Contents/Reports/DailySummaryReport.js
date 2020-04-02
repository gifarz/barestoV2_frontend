import React from 'react';

export const DailySummaryReport = (props) => {

    const home = () => {
        props.history.push("/")
    }
   return (
       <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Daily Summary Report</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href onClick={home}>Home</a>
                </li>
                <li className="breadcrumb-item active">Daily Summary Report</li>
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
                                    <button className="btn btn-info">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-secondary float-left mr-3">Print</button>
                                <button className="btn btn-secondary float-left mr-3">Excel</button>
                                <button className="btn btn-secondary float-left">PDF</button>
                            </div>
                        </div>
                        <h1 className="text-center mt-3">Warung Kukuruyuk</h1>
                        <h4 className="text-center">Daily Summary Report</h4>
                        <h4 className="text-center">Date :</h4>
                        <div className="table-responsive mt-5">
                            <h3>Purchase</h3>
                            <table
                            id="zero_config"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Reference No.</th>
                                    <th>Supplier</th>
                                    <th>G.Total</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-responsive mt-5">
                            <h3>Sales</h3>
                            <table
                            id="zero_config2"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Reference No.</th>
                                    <th>Order Type</th>
                                    <th>Customer</th>
                                    <th>Total Payable</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-responsive mt-5">
                            <h3>Total Sale With Payment Method</h3>
                            <table
                            id="zero_config3"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Payment Method</th>
                                    <th>Total Income</th>
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

                        <div className="table-responsive mt-5">
                            <h3>Expense</h3>
                            <table
                            id="zero_config4"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Responsible Person</th>
                                    <th>Note</th>
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

                        <div className="table-responsive mt-5">
                            <h3>Supplier Due Payments</h3>
                            <table
                            id="zero_config5"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Amount</th>
                                    <th>Supplier</th>
                                    <th>Note</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-responsive mt-5">
                            <h3>Customer Due Receive</h3>
                            <table
                            id="zero_config6"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Amount</th>
                                    <th>Customer</th>
                                    <th>Note</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="table-responsive mt-5">
                            <h3>Wastes</h3>
                            <table
                            id="zero_config7"
                            className="table table-striped table-bordered"
                            >
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Reference No</th>
                                    <th>Loss Amount</th>
                                    <th>Responsible Person</th>
                                    <th>Note</th>
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