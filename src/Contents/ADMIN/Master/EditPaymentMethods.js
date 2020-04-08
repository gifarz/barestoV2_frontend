import React from "react";

export const EditPaymentMethods = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Edit Payment Method</h5>
              <hr />
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Payment Method Name*</label>
                    <input
                      type="text"
                      id="payment_method_name"
                      className="form-control"
                      placeholder="Payment Method Name"
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
