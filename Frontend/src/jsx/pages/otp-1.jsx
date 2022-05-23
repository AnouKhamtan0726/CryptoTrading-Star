import React from "react";
import { Link } from "react-router-dom";

function Otp1() {
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
                                <div className="card-body">
                                    <Link
                                        className="page-back text-muted"
                                        to={"./signin"}
                                    >
                                        <span>
                                            <i className="fa fa-angle-left"></i>
                                        </span>{" "}
                                        Back
                                    </Link>
                                    <h3 className="text-center">
                                        OTP Verification
                                    </h3>
                                    <p className="text-center mb-5">
                                        We will send one time code on this
                                        number
                                    </p>
                                    <form>
                                        <div className="mb-3">
                                            <label>Your phone number</label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text ps-4 pe-4">
                                                        <i className="fa fa-phone"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value="+1 12365480"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <Link
                                                to={"./otp-2"}
                                                className="btn btn-success btn-block"
                                            >
                                                Send
                                            </Link>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3 d-flex justify-content-between">
                                        <p>
                                            Don't get code?{" "}
                                            <Link
                                                className="text-primary"
                                                to={"./otp-1"}
                                            >
                                                Resend
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

export default Otp1;
