import React, {useState} from 'react';
import {AddExpense} from './AddExpense';

export const Expense = (props) => {

    const [hidden, setHidden] = useState(false);

    const home = () => {
        props.history.push("/")
    }
   return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Expense</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Expense</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div id="supplierduepayment" className={hidden ? "col-md-6" : "col-md-12"}>
                <div className="card">
                    <div className="card-body">
                        <div className="button1">
                            <button
                            type="button"
                            class="btn btn-info"
                            style={{ margin: "0px 10px 0px 10px" }}
                            onClick={() => {
                                hidden ? setHidden(false) : setHidden(true);
                            }}
                            >
                            <i class="fa fa-plus"></i> Add Expense
                            </button>
                        </div>
                    <br />
                    <div className="table-responsive">
                        <table
                        id="zero_config"
                        className="table table-striped table-bordered"
                        >
                            <thead>
                                <tr>
                                <th>SN</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Responsible Person</th>
                                <th>Note</th>
                                <th>Added By</th>
                                <th style={{ width: "30px" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>System Architect</td>
                                <td>edinburgh@kreasi.com</td>
                                <td>active</td>
                                <td>Kukuruyuk</td>
                                <td>
                                    <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-success dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="ti-settings"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a
                                        className="dropdown-item"
                                        href="javascript:void(0)"
                                        >
                                        <i class="ti-pencil"></i> Edit
                                        </a>

                                        <a
                                        className="dropdown-item"
                                        href="javascript:void(0)"
                                        >
                                        <i class="ti-trash"></i> Delete
                                        </a>
                                    </div>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {hidden ? (
          <div id="add_supplier" className="col-md-6">
            <AddExpense hidden={hidden}/>
          </div>
        ) : (
          ""
        )}
        </div>
    </>
   )
}