import React from 'react';

export const EditExpense = (props) => {

    return (
    <>
      <div className="row">
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Edit Expense</h5>
                    <hr/>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            Date :<input type="date" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Responsible Person :
                            <select name="responsible_person" id="responsible_person" className="form-control">
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            Amount : <input type="number" id="amount" name="amount" className="form-control"/>
                        </div>
                        <div className="form-group col-md-6">
                            Category :
                            <select name="category" id="category" className="form-control">
                                <option value="">Category</option>
                            </select>
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