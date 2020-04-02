import React from 'react';

export const GeneralSetting = (props) => {

    const home = () => {
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">General Setting</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">General Setting</li>
                    </ol>
                </div>
            </div>
        </div>
      <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            Date Format :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-4">
                            Country Time Zone
                            <select name="user" id="user" className="form-control">
                                <option value="user">Choose Time Zone</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            Currency :<input type="text" className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    </>
    )
}