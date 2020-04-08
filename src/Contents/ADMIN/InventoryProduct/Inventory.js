import React, { useEffect } from "react";

export const Inventory = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/dist/js/content2.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const home = () => {
    props.history.push("/");
  };

  const inventoryAdjustment = () => {
    props.history.push("/inventoryadjustment");
  };

  return (
    <>
      {/* Page Title & Bread Crumb */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Inventory</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={home}>Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Inventory</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="row">
        <div id="ingredient" className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="button1">
                <button
                  type="button"
                  class="btn btn-info"
                  style={{ margin: "0px 10px 0px 10px" }}
                  onClick={inventoryAdjustment}
                >
                 Inventory Adjustment
                </button>
              </div>
              <br />
              <div className="table-responsive">
                <table
                  id="table_top_menu"
                  className="table table-striped table-bordered no-wrap"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Code</th>
                      <th>Ingredient</th>
                      <th>Category</th>
                      <th>Stock Qty/Amount</th>
                      <th>Alert Qty/Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Gram</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Gram</td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Gram</td>
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
