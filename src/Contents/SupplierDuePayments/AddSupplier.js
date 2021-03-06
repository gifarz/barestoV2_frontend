import React from 'react';

export const AddSupplier = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
                    <h5 className="card-title">Add Supplier</h5>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Date :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Supplier :
                            <select name="supplier" id="supplier" className="form-control">
                                <option value="">Supplier</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            Amount : <input type="number" className="form-control"/>
                        </div>
                        <p>Note :</p>
                        <div className="form-group col-md-12">
                            <textarea name="note" id="note" rows="10" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="button-addwaste">
                        <button rel="1" type="submit" className="btn btn-success">
                            <i className="fa fa-check" /> Save
                        </button>
                        <button className="btn btn-inverse" onClick={props.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}