import React from "react";

export const AddDiscount = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add Discount</h5>
              <hr />
              <form action=""></form>
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Discount Name</label>
                    <input
                      type="text"
                      id="discount_name"
                      className="form-control"
                      placeholder="Category Name"
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
                    <label className="control-label">Amount</label>
                    <input
                      type="number"
                      id="amount"
                      className="form-control"
                      placeholder="Amount"
                    />
                    <small className="form-control-feedback">
                      {/* This is inline help */}
                    </small>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="control-label">Price</label>
                  <div className="form-group">
                    <div className="btn-group" data-toggle="buttons">
                      <label className="btn btn-info active">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="customRadio"
                            className="custom-control-input"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio4"
                          >
                            Rp.
                          </label>
                        </div>
                      </label>
                      <label className="btn btn-info">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio5"
                          >
                            %
                          </label>
                        </div>
                      </label>
                    </div>
                  </div>
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
