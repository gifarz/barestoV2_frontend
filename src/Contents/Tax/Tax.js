import React from 'react';

export const Tax = (props) => {

    const handleMontlyTax = () => {
        props.history.push('/montlytax')
    }
    const handleAnnualTax = () => {
        props.history.push('/annualtax')
    }


    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleMontlyTax}>Montly Tax</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleAnnualTax}>Annual Tax</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>
            </div>
        </div>
    )
}