import React from 'react';

export const PriceAdjusment = () => {
    return (
        <>
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex flex-column mb-5">
                <div className="d-flex mb-5">
                    <button className="ml-auto btn btn-sm btn-secondary mr-2">
                    Edit
                    </button>
                    <button className="btn btn-sm btn-secondary mr-2">Save</button>
                    <button className="btn btn-sm btn-secondary mr-2">Print</button>
                    <button className="btn btn-sm btn-secondary">Export</button>
                </div>
                <div className="d-flex">
                    <div className="pr-3 w-25">
                    <label>Warehouse</label>
                    <select className="form-control form-control-sm">
                        <option>select warehouse</option>
                    </select>
                </div>

                <div className="ml-auto pr-3 w-25">
                    <label>Price Adjusment</label>
                    <select className="form-control form-control-sm">
                        <option>Price Adjusment</option>
                        <option>Sales Delivery</option>
                        <option>Sales Invoice</option>
                        <option>Sales Return</option>
                        <option>Sales Order</option>
                        <option>Sales Quote</option>
                        <option>Discount</option>
                        <option>Comission Sales</option>
                    </select>
                </div>

            </div>
            </div>
            <div className="pl-0">
            <table className="table table-sm table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Code</th>
                    <th>Product</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>New Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <select className="form-control form-control-sm">
                            <option>select</option>
                        </select>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            placeholder="description" 
                            className="form-control form-control-sm"
                        />
                    </td>
                    <td>
                        <select className="form-control form-control-sm">
                            <option>select</option>
                        </select>
                    </td>
                    <td>
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend input-group-prepend-sm">
                                <span className="input-group-text" id="basic-addon1">Rp</span>
                            </div>
                            <input type="number" className="form-control form-control-sm" aria-describedby="basic-addon1"/>
                        </div>
                    </td>
                    <td>
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend input-group-prepend-sm">
                                <span className="input-group-text" id="basic-addon1">Rp</span>
                            </div>
                            <input type="number" className="form-control form-control-sm" aria-describedby="basic-addon1"/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="d-flex">
                <div className="card">
                <div className="card-body">
                    <input
                    className="form-control form-control-sm mb-2"
                    type="text"
                    placeholder="Memo"
                    />
                    <textarea
                    className="form-control form-control-sm" style={{minHeight:"6rem"}}
                    type="text"
                    placeholder=""
                    ></textarea>
                </div>
                </div>
            </div>
            <div className="d-flex mt-4 pb-5">
                <button className="btn btn-secondary ml-auto mr-2">Cancel</button>
                <button className="btn btn-secondary">Create</button>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}