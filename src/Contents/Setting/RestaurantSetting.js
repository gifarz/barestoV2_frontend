import React, {useEffect} from 'react';

export const RestaurantSetting = (props) => {

    useEffect(() => {

        window.$("#collect_yes").on('click',function() {
            window.$("#radio-button-yes").fadeIn();
        });
        window.$("#collect_no").on('click',function() {
            window.$("#radio-button-yes").fadeOut();
          
        });

    }, []);

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
                                    <label><input type="radio" name="collect_tax" id="collect_yes"/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="collect_tax" id="collect_no" defaultChecked/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            Pre or Post Payment
                            <div>
                                <div className="radio-user">
                                    <label><input type="radio" name="prepost_payment" id="prepost_yes" defaultChecked/>Yes<span className="checkmark"></span></label>
                                </div>
                                <div className="radio-user">
                                    <label><input type="radio" name="prepost_payment" id="prepost_no"/>No<span className="checkmark"></span></label>
                                </div>
                            </div>
                        </div>
                        <div id="radio-button-yes" style={{display: "none"}}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    My Tax Title :<input type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-md-6">
                                    My Tax Registration No. :<input type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-md-6">
                                    My Tax is GST
                                    <div>
                                        <div className="radio-user">
                                            <label><input type="radio" name="tax_gst" id="tax_yes" />Yes<span className="checkmark"></span></label>
                                        </div>
                                        <div className="radio-user">
                                            <label><input type="radio" name="tax_gst" id="tax_no" />No<span className="checkmark"></span></label>
                                        </div>
                                    </div>
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