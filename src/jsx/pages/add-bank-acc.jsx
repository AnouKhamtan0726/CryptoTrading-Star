import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

function BankAcc() {
    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding mb-5">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center  my-5">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Link a bank account
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form className="identity-upload">
                                        <div className="row">
                                            <div className="mb-3 col-xl-12">
                                                <label className="form-label">
                                                    Routing number{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="25487"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-12">
                                                <label className="form-label">
                                                    Account number{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="36475"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-12">
                                                <label className="form-label">
                                                    Fulll name{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Big Star"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-12">
                                                <img
                                                    src="./images/routing.png"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>

                                            <div className="text-center col-12">
                                                <Link
                                                    to={"./verify-step-5"}
                                                    className="btn btn-primary mx-2"
                                                >
                                                    Back
                                                </Link>
                                                <Link
                                                    to={"./verify-step-6"}
                                                    className="btn btn-success mx-2"
                                                >
                                                    Save
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default BankAcc;
