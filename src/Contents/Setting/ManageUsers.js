import React, {useState, useEffect} from 'react';
import {AddUser} from './AddUser';
import {EditUser} from './EditUser';

export const ManageUsers = (props) => {

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
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Manage Users</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Manage Users</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
        {/* Content */}
        <div id="ingredient_category" className={hidden ? "col-md-6" : "col-md-12"}>
          <div className="card">
            <div className="card-body">
              <div className="button1">
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ margin: "0px 10px 0px 10px" }}
                  onClick={handleAdd}
                >
                  <i className="fa fa-plus"></i> Add User
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
                      <th>SN</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Restaurant Name</th>
                      <th style={{ width: "30px" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>edinburgh@kreasi.com</td>
                      <td>active</td>
                      <td>Kukuruyuk</td>
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
                              href
                              onClick={handleEdit}
                            >
                              <i className="ti-pencil"></i> Edit
                            </a>

                            <a
                              className="dropdown-item"
                              href
                            >
                              <i className="ti-trash"></i> Delete
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
            {editMode ?
              <EditUser handleCancel={handleCancel}/>
              :
              <AddUser handleCancel={handleCancel}/>
            }
          </div>
        ) : (
          ""
        )}
      </div>
    </>
    )
}