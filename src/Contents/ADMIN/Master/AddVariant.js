import React from "react";

export const AddVariant = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add Variant</h5>
              <hr />
              <form action=""></form>
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Name*</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              {/*/row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Price*</label>
                    <input
                      type="text"
                      id="price"
                      className="form-control"
                      placeholder="Price"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/*/row*/}
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
            {/*/row*/}
            <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Description*</label>
                    <textarea
                      type="text"
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
            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                {" "}
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
