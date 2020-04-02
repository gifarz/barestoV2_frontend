import React, { useState } from "react";

export const EditInventoryAdjustment = props => {
  const [Rows, setRows] = useState([]);

  const RowIngredient = event => {
    var i = Rows.length + 1;

    var joined = Rows.concat(
      <tbody>
        <tr>
          <td>{i}</td>
          <td>System Architect</td>
          <td>
            <input
              type="number"
              id="qty"
              className="form-control"
              placeholder="Qty"
            />
            <small className="form-control-feedback">
              {/* This is inline help */}
            </small>
          </td>
          <td>
            <select className="select2 form-control custom-select">
              <option>Select</option>
              <option value="AK">Alaska</option>
            </select>
            <small className="form-control-feedback">
              {/* This is inline help */}
            </small>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              style={{ margin: "0px 10px 0px 10px" }}
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    );
    setRows(joined);
    // console.log(i);
  };

  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Edit Inventory Adjustment</h5>
              <hr />
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Reference No.*</label>
                    <input
                      type="text"
                      id="reference_no"
                      className="form-control"
                      placeholder="Reference No."
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Date*</label>
                    <input
                      type="date"
                      id="date"
                      className="form-control"
                      placeholder="Date"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Responsible Person*</label>
                    <select className="select2 form-control custom-select">
                      <option>Select</option>
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                    </select>
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Ingredient*</label>
                    <select className="select2 form-control custom-select">
                      <option>Select</option>
                      <option value="AK" onClick={RowIngredient}>
                        Alaska
                      </option>
                    </select>
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table
                      id="zero_config"
                      className="table table-striped table-bordered no-wrap"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Ingredient</th>
                          <th>Quantity/Amount</th>
                          <th>Consumption Status</th>
                          <th style={{ width: "30px" }}>Actions</th>
                        </tr>
                      </thead>
                      {Rows}
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Note</label>
                    <textarea
                      id="note"
                      className="form-control"
                      placeholder="Note"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button rel="1" type="submit" className="btn btn-success">
                <i className="fa fa-check" /> Save
              </button>
              <button
                type="button"
                className="btn btn-inverse"
                onClick={props.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
