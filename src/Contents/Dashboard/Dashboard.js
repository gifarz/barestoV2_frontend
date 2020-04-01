import React from "react";
// import './style.css';

export const Dashboard = () => {
  return (
    <>
      {/* Page Title & Bread Crumb */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Dashboard</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h3>
                      <i className="icon-cup" />
                    </h3>
                    <p className="text-muted">Food Menus</p>
                  </div>
                  <div className="ml-auto">
                    <h2 className="counter text-primary">23</h2>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Column */}
        {/* Column */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h3>
                      <i className="icon-star" />
                    </h3>
                    <p className="text-muted">Ingredients</p>
                  </div>
                  <div className="ml-auto">
                    <h2 className="counter text-cyan">169</h2>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-cyan" style={{ width: "100%" }}>
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Column */}
        {/* Column */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h3>
                      <i className="icon-people" />
                    </h3>
                    <p className="text-muted">Customers</p>
                  </div>
                  <div className="ml-auto">
                    <h2 className="counter text-purple">157</h2>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-purple" style={{ width: "100%" }}>
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Column */}
        {/* Column */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex no-block align-items-center">
                  <div>
                    <h3>
                      <i className="icon-user" />
                    </h3>
                    <p className="text-muted">Users</p>
                  </div>
                  <div className="ml-auto">
                    <h2 className="counter text-success">431</h2>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-success" style={{ width: "100%" }}>
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Column */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-b-40">Data Sales Each Month</h5>
              <div className="row">
                <div className="col-md-12">
                  <div id="morris-line-chart" style={{ height: 300 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Column */}
      </div>
      <div className="row">
        {/* Column */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-b-40">Sales by Type Order (This Month)</h5>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box bg-info text-center">
                      <h1 className="font-light text-white">2,064</h1>
                      <h6 className="text-white">
                        <b>Dine In</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box bg-primary text-center">
                      <h1 className="font-light text-white">2,064</h1>
                      <h6 className="text-white">
                        <b>Takeaway</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="box bg-success text-center">
                      <h1 className="font-light text-white">2,064</h1>
                      <h6 className="text-white">
                        <b>Go Food</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Column */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-b-40">
                Top 10 Food Menus (This Month)
              </h5>
              <table id="table_top_menu" className="table table-striped table-bordered no-wrap">
                  <thead>
                    <tr>
                      <th>Food Name</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
            </div>
          </div>
        </div>
        {/* Column */}
        <div className="col-lg-6">
          <div className="card">
            <div
              className="card-body"
            >
              <h5 className="card-title m-b-40">
                Ingredients in Alert/Low Stock
              </h5>
              <div className="table-responsive">
                <table id="table_ingredient_alert" className="table table-striped table-bordered no-wrap">
                  <thead>
                    <tr>
                      <th>Ingredient Name</th>
                      <th>Current Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>System Architect</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Column */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-b-40">Operational Comparison (This Month)</h5>
              <div className="row">
                <div className="col-md-12">
                  <div id="morris-area-chart" style={{ height: 300 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
