import React from "react";

export const AddFoodMenus = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add Food Menu</h5>
              <hr />
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Name*</label>
                    <input
                      type="text"
                      id="unit_name"
                      className="form-control"
                      placeholder="Unit Name"
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
                    <label className="control-label">Code</label>
                    <input
                      type="text"
                      id="code_ingredient"
                      className="form-control"
                      placeholder="Code"
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
                    <label className="control-label">Category*</label>
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
                    <label className="control-label">
                      Ingredient Consumptions*
                    </label>
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
                  <table
                    id="zero_config"
                    className="table table-striped table-bordered no-wrap"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Ingredient</th>
                        <th>Consumption</th>
                        <th style={{ width: "30px" }}>Actions</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Price*</label>
                    <div className="input-group">
                      <div
                        className="input-group-prepend"
                        style={{ width: "20%" }}
                      >
                        <span className="input-group-text" id="dine_in">
                          Dine In
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Dine In Price"
                        aria-label="Dine In"
                        aria-describedby="dine_in"
                      />
                    </div>
                    <div className="input-group">
                      <div
                        className="input-group-prepend"
                        style={{ width: "20%" }}
                      >
                        <span className="input-group-text" id="take_away" style={{ width: "100%" }}>
                          Take Away
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Take Away Price"
                        aria-label="Take Away"
                        aria-describedby="take_away"
                      />
                    </div>
                    <div className="input-group">
                    <div
                        className="input-group-prepend"
                        style={{ width: "20%" }}
                      >
                        <span className="input-group-text" id="gofood">
                          Go Food
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Go Food Price"
                        aria-label="Go Food"
                        aria-describedby="gofood"
                      />
                    </div>
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Description</label>
                    <textarea
                      id="description"
                      className="form-control"
                      placeholder="Description"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-success">
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
