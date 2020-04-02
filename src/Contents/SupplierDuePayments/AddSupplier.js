import React from 'react';

export const AddSupplier = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100" style={{height: "100vh"}}>
                <div className="card-body">
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
                            <textarea name="note" id="note" cols="35" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="button-addwaste">
                        <button className="btn btn-info mr-2">Submit</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}