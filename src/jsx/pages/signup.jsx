import React from "react";
import { Link } from "react-router-dom";

function Signup() {
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
                                    <h4 className="card-title">
                                        Sign up your account
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        method="post"
                                        name="myform"
                                        className="signup_validate"
                                    >
                                        <div className="mb-3">
                                            <label>Username *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="username"
                                                name="username"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Email *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="hello@example.com"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Invite Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Invite Code"
                                                name="invitecode"
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <Link
                                                to={"./signin"}
                                                className="btn btn-success btn-block"
                                            >
                                                Sign up
                                            </Link>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>
                                            Already have an account?{" "}
                                            <Link
                                                className="text-primary"
                                                to={"signin"}
                                            >
                                                Sign in
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

export default Signup;
