import React from 'react';
import { Link } from 'react-router-dom';



function Otp2() {

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
                                    <Link className="page-back text-muted" to={"./otp-1"}><span><i
                                        className="fa fa-angle-left"></i></span> Back</Link>
                                    <h3 className="text-center">OTP Verification</h3>
                                    <p className="text-center mb-5">We will send one time code on this number</p>
                                    <form>
                                        <div className="mb-3">
                                            <label>Your OTP Code</label>
                                            <input type="text" className="form-control text-center font-weight-bold"
                                                value="11 22 33" />
                                        </div>
                                        <div className="text-center">
                                            <Link to={"./dashboard"} className="btn btn-success btn-block">Verify</Link>
                                        </div>
                                    </form>
                                    <div className="info mt-3">
                                        <p className="text-muted">You dont recommended to save password to browsers!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp2;