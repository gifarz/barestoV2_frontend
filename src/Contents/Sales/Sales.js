import React from 'react';

export const Sales = (props) => {

    const home = () => {
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Sales</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Sales</li>
                    </ol>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form-row">

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}