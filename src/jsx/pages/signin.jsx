import React from "react";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link className="navbar-brand" to={'./'}><img src={require('./../../images/main_assets/main_logo.svg')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Sign in</h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        method="post"
                                        name="myform"
                                        className="signin_validate"
                                    >
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="hello@example.com"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                            />
                                        </div>
                                        <div className="row d-flex justify-content-between mt-4 mb-2">
                                            <div className="mb-3 mb-0">
                                                <label className="toggle">
                                                    <input
                                                        className="toggle-checkbox"
                                                        type="checkbox"
                                                    />
                                                    <span className="toggle-switch"></span>
                                                    <span className="toggle-label">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="mb-3 mb-0">
                                                <Link to={"./reset"}>
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Link
                                                to={"./otp-1"}
                                                className="btn btn-success btn-block"
                                            >
                                                Sign in
                                            </Link>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>
                                            Don't have an account?{" "}
                                            <Link
                                                className="text-primary"
                                                to={"./signup"}
                                            >
                                                Sign up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
