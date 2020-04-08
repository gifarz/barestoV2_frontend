import React, {useEffect} from 'react';
import Swal from 'sweetalert2';
import GST_Invoice from './GST_Invoice.jpg'

export const RestaurantSetting = (props) => {

    const getAlert = () => {
        Swal.fire({
            imageUrl: "https://3sixtycyclingstudio.b-cdn.net/wp-content/uploads/2018/03/Restaurant-Receipt-Format.jpg",
            showCloseButton: true,
        })
    }

    const taxTitleAlert = () => {
        Swal.fire({
            title: "Show how Tax Title works",
            html: 
            "<hr>"+
            "Which will be shown in Invoice <br>"+
            "Like GST for India <br>"+
            "HST for Canada <br>"+
            "VAT for Bangladesh <br>"+
            "Sales Tax for Other etc. <br>"+
            "It will be shown at Top of the invoice like: <br>"+
            "TAX TITLE Registration Number: XXXXXXX <br>"+
            "It will be shown at bottom of the invoice like: <br>"+
            "Total TAX TITLE = XXX Amount <br>"+
            "Note that UPPERCASE texts are variable <br>",
            showCloseButton: true,
        })
    }

    const taxGSTAlert = () => {
        Swal.fire({
            title: "What will happen if I say Yes",
            html: 
            "<hr>"+
            "You will get two additional reports: <br>"+
            "If you dont enter customer's GST number, system will apply CGST and SGST <br>"+
            "But for this you have to add CGST, SGST, IGST and VAT in Tax Fields <br>"+
            "In POS, when selecting customer you will get option to set customer's GST Number and system will match your state code with customer's state code, if these match, system will apply CGST and IGST, if does not, system will apply CGST and SGST <br>"+
            "1. GST Report in Excel and (coming soon) <br>"+
            "2. GST Report in JSON (coming soon) <br>",
            showCloseButton: true,
        })
    }

    const taxFieldAlert = () => {
        Swal.fire({
            title: "What will happen if I say Yes",
            html: 
            "<hr>"+
            "All of these input fields will be appeared in each of your Item profile. You can then set amount application for all of these for that specific item. If an item does not have any of these's tax, you just put that's value 0. Like if you use GST and the item is an alchohol item you will set value in only VAT field and leave other field blank, then only VAT will be applicable for that item. If you are using GST, you should put value in all CGST, SGST and IGST, system will determine where to select SGST or IGST as you have chosen My Tax is GST above."+
            "And if you are dealing with a single Tax amount, just add one field here. Note that which names you add here, will be appeared in your invoice.",
            showCloseButton: true,
        })
    }

    useEffect(() => {

        window.$("#collect_yes").on('click',function() {
            window.$("#radio-button-yes").fadeIn();
        });
        window.$("#collect_no").on('click',function() {
            window.$("#radio-button-yes").fadeOut();
          
        });
        window.$("#tax_yes").on('click',function() {
            console.log("yes");
            window.$("#radio-tax-yes").fadeIn();
        });
        window.$("#tax_no").on('click',function() {
            console.log("no");
            window.$("#radio-tax-yes").fadeOut();
          
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
                <img src="" alt=""/>
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
                            <div id="btn-tax-title">
                                <button className="btn btn-info" onClick={()=>getAlert()}>Show Sample Invoice With Tax</button>
                            </div>
                            <div className="form-row mt-4">
                                <div className="form-group col-md-6">
                                    My Tax Title :<input type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-md-12">
                                    <button className="btn btn-info" onClick={()=>taxTitleAlert()}>Show How Tax Title Work</button>
                                </div>
                                <div className="form-group col-md-6">
                                    My Tax Registration No. :<input type="text" className="form-control"/>
                                </div>
                                <div className="form-group col-md-12">
                                    My Tax is GST
                                    <div>
                                        <div className="radio-user">
                                            <label><input type="radio" name="tax_gst" id="tax_yes" />Yes<span className="checkmark"></span></label>
                                        </div>
                                        <div className="radio-user">
                                            <label><input type="radio" name="tax_gst" id="tax_no" defaultChecked/>No<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div id="radio-tax-yes" style={{display: "none"}}>
                                        <div className="form-group col-md-6" >
                                            State Code :<input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <button className="btn btn-info" onClick={()=>taxGSTAlert()}>What Will Happen If I Say Yes</button>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                <th style={{width: "20px"}}>SN</th>
                                                <th>Name</th>
                                                <th style={{width: "20px"}}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>1</td>
                                                <td>Tiger Nixon</td>
                                                <td>
                                                    <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0)"
                                                    >
                                                    <i class="ti-trash"></i>
                                                    </a>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <button className="btn btn-info">Add More</button>
                                </div>
                                <div className="form-group col-md-12">
                                    <button className="btn btn-info" onClick={()=>taxFieldAlert()}>Show How Tax Field Work</button>
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