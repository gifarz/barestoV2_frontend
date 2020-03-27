import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from  'yup';

export const CompanySetting = (props) => {

    return (
        <div className="skin-default card-no-border mt-4">
            <div className="login-box card">
                <div className="card-body">
                    <Formik
                    initialValues={{
                        companyName: '',
                        companyAddress: '',
                        industry: '',
                        currency: '',
                        startDate: '',
                        accountingPeriode: ''
                    }}
                    validationSchema={Yup.object().shape({
                        companyName: Yup.string().required('company name is required'),
                        companyAddress: Yup.string().required('company address is required'),
                        industry: Yup.string().required('industry is required'),
                        currency: Yup.string().required('currency is required'),
                        startDate: Yup.string().required('start date is required'),
                        accountingPeriode: Yup.string().required('accounting periode is required')
                    })}
                    render={({ errors, touched, isSubmitting }) => (
                        <Form className="form-horizontal form-material" id="loginform">
                            <h3 className="text-center mb-5">Company Setting</h3>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="companyName"
                                    required="" 
                                    placeholder="Company Name"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="companyName"/></span>
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="companyAddress"
                                    required="" 
                                    placeholder="Company Address"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="companyAddress"/></span>
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="industry"
                                    required="" 
                                    placeholder="Industry"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="industry"/></span>
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="currency"
                                    required="" 
                                    placeholder="Currency"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="currency"/></span>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="startDate"
                                    required="" 
                                    placeholder="Start Date"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="startDate"/></span>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className="form-control" 
                                    type="text" 
                                    name="accountingPeriode"
                                    required="" 
                                    placeholder="Accounting Periode"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="accountingPeriode"/></span>
                            </div>
                            <div className="form-group text-center">
                                <div className="col-xs-12">
                                    <button className="btn btn-info btn-rounded text-uppercase w-100" type="submit">Simpan</button>
                                </div>
                            </div>
                        </Form>
                    )}
                    />
                </div>
            </div>
        </div>
    )
}