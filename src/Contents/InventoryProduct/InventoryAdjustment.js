import React, { useEffect, useState } from "react";
import { AddInventoryAdjustment } from "./AddInventoryAdjustment";
import { EditInventoryAdjustment } from "./EditInventoryAdjustment";

export const InventoryAdjustment = props => {

  const [hidden, setHidden] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/dist/js/content.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handleCancel = () => {
    setHidden(false);
    setEditMode(false);
    setAddMode(false);
  };

  const handleEdit = () => {
    setHidden(true);
    setEditMode(true);
    setAddMode(false);
  };

  const handleAdd = () => {
    setHidden(true);
    setEditMode(false);
    setAddMode(true);
  };

  const home = () => {
    props.history.push("/");
  };

  return (
    <>
      {/* Page Title & Bread Crumb */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Inventory Adjustment</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={home}>Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Inventory Adjustment</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="row">
        <div id="ingredient" className={hidden ? "col-md-6" : "col-md-12"}>
          <div className="card">
            <div className="card-body">
              <div className="button1">
                <button
                  type="button"
                  class="btn btn-info"
                  style={{ margin: "0px 10px 0px 10px" }}
                  onClick={handleAdd}
                >
                  <i class="fa fa-plus"></i>Add Inventory Adjustment
                </button>
              </div>
              <br />
              <div className="table-responsive">
                <table
                  id="zero_config"
                  className="table table-striped table-bordered no-wrap"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Reference No.</th>
                      <th>Date</th>
                      <th>Ingredient Count</th>
                      <th>Responsible Person</th>
                      <th>Note</th>
                      <th>Added By</th>
                      <th style={{ width: "30px" }}>Actions</th>
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
                              onClick={handleEdit}
                            >
                              <i class="ti-pencil"></i> Edit
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
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Gram</td>
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
                              onClick={handleEdit}
                            >
                              <i class="ti-pencil"></i> Edit
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
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Gram</td>
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
                              onClick={handleEdit}
                            >
                              <i class="ti-pencil"></i> Edit
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
        {hidden ? (
          <div className="col-md-6">
            {editMode ? (
              <EditInventoryAdjustment handleCancel={handleCancel} />
            ) : (
              <AddInventoryAdjustment handleCancel={handleCancel} />
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};
