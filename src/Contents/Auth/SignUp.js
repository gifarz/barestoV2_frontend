import React from 'react';
import {Formik, ErrorMessage, Form, Field} from 'formik';
import * as Yup from 'yup';

export const SignUp = (props) => {

    const handleSignin = () => {
		props.history.push("/signin")
	}

    return (
        <div className="skin-default card-no-border">
            <div className="login-box card">
                <div className="card-body">
                    <Formik
                        initialValues={{
                            name: '',
                            username: '',
                            email: '',
                            nomorTelepon: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('name is required'),
                            username: Yup.string().required('username is required'),
                            email: Yup.string().required('email is required'),
                            nomorTelepon: Yup.string().required('telepon number is required'),
                            password: Yup.string().required('password is required'),
                            confirmPassword: Yup.string().required('password confirmation is required')
                        })}
                        render={({ errors, touched, isSubmitting }) => (
                        <Form className="form-horizontal form-material" id="loginform">
                            <h3 className="text-center mb-5">Sign Up</h3>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} 
                                    type="text" 
                                    name="name"
                                    required="" 
                                    placeholder="Name"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="name"/></span>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} 
                                    type="text" 
                                    name="username"
                                    required="" 
                                    placeholder="Username"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="username"/></span>    
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} 
                                    type="text" 
                                    name="email"
                                    required="" 
                                    placeholder="Email"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="email"/></span>  
                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.nomorTelepon && touched.nomorTelepon ? ' is-invalid' : '')}
                                    type="text" 
                                    name="nomorTelepon"
                                    required="" 
                                    placeholder="Telepon Number"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="nomorTelepon"/></span>                            </div>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                                    type="password" 
                                    name="password"
                                    required="" 
                                    placeholder="Password"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="name"/></span>                            
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <Field 
                                    className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} 
                                    type="password" 
                                    name="confirmPassword"
                                    required="" 
                                    placeholder="Password Confirmation"/>
                                </div>
                                <span className="text-danger"> <ErrorMessage name="confirmPassword"/></span>
                            </div>
                            <div className="form-group text-center">
                                <div className="col-xs-12">
                                    <button className="btn btn-info btn-rounded text-uppercase w-100" type="submit" disabled={isSubmitting}>Sign Up</button>
                                </div>
                            </div>
                            <div className="form-group m-b-0">
                                <div className="col-sm-12 text-center">
                                    Already have an account? <a href onClick={handleSignin} className="text-info m-l-5"><b>Sign In</b></a>
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