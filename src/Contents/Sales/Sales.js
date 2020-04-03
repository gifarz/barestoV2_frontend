import React, { useEffect } from "react";

export const Sales = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/dist/js/content.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const home = () => {
    props.history.push("/");
  };

  return (
    <>
      {/* Page Title & Bread Crumb */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Sales</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={home}>Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Sales</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Content */}
        <div
          id="ingredient_category"
          className="col-md-12"
        >
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="zero_config"
                  className="table table-striped table-bordered no-wrap"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Reference No</th>
                      <th>Order Type</th>
                      <th>Date (Time)</th>
                      <th>Customer</th>
                      <th>Total Payable</th>
                      <th>Payment Method</th>
                      <th>Added By</th>
                      <th style={{ width: "30px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
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
                              <i class="ti-book"></i> View Invoice
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
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
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
                              <i class="ti-book"></i> View Invoice
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
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
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
                              <i class="ti-book"></i> View Invoice
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
      </div>
    </>
  );
};
