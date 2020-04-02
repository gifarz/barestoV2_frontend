import React from 'react';

export const ChangePassword = (props) => {

    const home = () => {
        props.historry.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Change Password</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Change Password</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Old Password :<input type="text" className="form-control" placeholder="Old Password"/>
                        </div>
                        <div className="form-group col-md-6">
                            New Password :<input type="text" className="form-control" placeholder="New Password"/>
                        </div>
                    </div>
                    <button className="btn btn-info">Submit</button>
                </div>
            </div>
        </div>
    </>
    )
}