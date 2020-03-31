import React from "react";

export const AddVat = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add VAT</h5>
              <hr />
              <form action=""></form>
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">VAT Name*</label>
                    <input
                      type="text"
                      id="vat_name"
                      className="form-control"
                      placeholder="VAT Name"
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
                    <label className="control-label">Percentage*</label>
                    <input
                      type="text"
                      id="percentage"
                      className="form-control"
                      placeholder="Percentage"
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
