import React from "react";

export const AddTables = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add Table</h5>
              <hr />
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Table Name*</label>
                    <input
                      type="text"
                      id="table_name"
                      className="form-control"
                      placeholder="Table Name"
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
                    <label className="control-label">Seat Capacity*</label>
                    <input
                      type="number"
                      id="seat_capacity"
                      className="form-control"
                      placeholder="Seat Capacity"
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
                    <label className="control-label">Position*</label>
                    <input
                      type="text"
                      id="position"
                      className="form-control"
                      placeholder="Position"
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
