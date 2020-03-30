import React from "react";

export const AddIngredientCategories = props => {
  return (
    <>
      {/* Content */}
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="form-body">
              <h5 className="card-title">Add Ingredient Category</h5>
              <hr />
              <form action=""></form>
              <div className="row p-t-20">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Category Name</label>
                    <input
                      type="text"
                      id="category_name"
                      className="form-control"
                      placeholder="Category Name"
                    />
                    <small className="form-control-feedback">
                      This is inline help
                    </small>
                  </div>
                </div>
              </div>
              {/*/row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label">Description</label>
                    <input
                      type="text"
                      id="description"
                      className="form-control"
                      placeholder="Description"
                    />
                    <small className="form-control-feedback">
                      This is inline help
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
              <button type="button" className="btn btn-inverse">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
