import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

export const SignIn = (props) => {

	const handleRegister = () => {
		props.history.push("/signup")
	}
	
    return (
        <div className="skin-default card-no-border">
            <section id="wrapper">
                <div className="login-box card">
                    <div className="card-body">
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                            }}
                            validationSchema={Yup.object().shape({
                                username: Yup.string().required('username is required'),
                                password: Yup.string().required('password is required'),
                            })}
                            render={({ errors, touched, isSubmitting }) => (
                            <Form className="form-horizontal form-material" id="loginform" action="index.html">
                                <h3 className="text-center mb-5">Sign In</h3>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <Field 
                                        className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} 
                                        type="text" 
                                        name="username"
                                        required="" 
                                        placeholder="Userame"/>
                                        <span className="text-danger"><ErrorMessage name="username"/></span> 
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="col-xs-12">
                                        <Field 
                                        className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} 
                                        type="password" 
                                        name="password"
                                        required="" 
                                        placeholder="Password"/>
                                        <span className="text-danger"><ErrorMessage name="password"/></span> 
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <div className="col-xs-12">
                                        <button className="btn btn-info btn-rounded text-uppercase w-100" type="submit">Sign In</button>
                                    </div>
                                </div>
                                <div className="form-group m-b-0">
                                    <div className="col-sm-12 text-center">
                                        Don't have an account? <a href onClick={handleRegister} className="text-info m-l-5"><b>Sign Up</b></a>
                                    </div>
                                </div>
                            </Form>
                            )}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}