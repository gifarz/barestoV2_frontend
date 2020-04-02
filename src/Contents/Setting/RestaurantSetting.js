import React from 'react';

export const RestaurantSetting = (props) => {

    const home = () => {
        props.history.push("/")
    }
    return (
    <>
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Restaurant Setting</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href onClick={home}>Home</a>
                    </li>
                    <li className="breadcrumb-item active">Restaurant Setting</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Restaurant Name :<input type="text" className="form-control" value=""/>
                        </div>
                        <div className="form-group col-md-6">
                            Address :<input type="text" className="form-control" value=""/>
                        </div>
                        <div className="form-group col-md-6">
                            Phone :<input type="number" className="form-control" value=""/>
                        </div>
                        <div className="form-group col-md-6">
                            Invoice Footer :<input type="text" className="form-control" value=""/>
                        </div>
                        <div className="form-group col-md-6">
                            I Collect Tax
                            <div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" id="collect_yes"/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" id="collect_no"/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            Pre or Post Payment
                            <div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" id="prepost_yes"/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="radio" id="prepost_no"/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}