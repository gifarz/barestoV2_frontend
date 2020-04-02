import React from 'react';

export const ChangeProfile = (props) => {

    const home = () => {
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Change Profile</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Change Profile</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            Name :<input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group col-md-4">
                            Email Address :<input type="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="form-group col-md-4">
                            Phone :<input type="number" className="form-control" placeholder="Phone Number"/>
                        </div>
                    </div>
                    <button className="btn btn-info">Submit</button>
                </div>
            </div>
        </div>
    </>
    )
}