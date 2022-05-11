import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

function VerifyStep5() {
    return (
        <>
            <Header2 />
            <Sidebar />
            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-7">
                            <div className="auth-form card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Add New Account
                                    </h4>
                                </div>
                                <div className="card-body py-0">
                                    <div className="add-bank-card">
                                        <div className="row my-4">
                                            <div className="col-md-6">
                                                <Link
                                                    to={"./add-bank-acc"}
                                                    className="d-block"
                                                >
                                                    <div className="d-flex">
                                                        <span className="me-3">
                                                            <i className="fa fa-bank"></i>
                                                        </span>
                                                        <div className="media-body">
                                                            <h4 className="mt-0 mb-3">
                                                                Bank account
                                                            </h4>
                                                            <p>
                                                                Use bank account
                                                                to make purchase
                                                                and sells.
                                                                Prices are
                                                                locked today.
                                                                Trades may take
                                                                4-5 days to
                                                                process
                                                            </p>
                                                            <p className="text-muted">
                                                                Recommended for
                                                                invest large
                                                                amount
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-md-6">
                                                <Link
                                                    to={"./add-debit-card"}
                                                    className="d-block"
                                                >
                                                    <div className="d-flex">
                                                        <span className="me-3">
                                                            <i className="fa fa-credit-card"></i>
                                                        </span>
                                                        <div className="media-body">
                                                            <h4 className="mt-0 mb-3">
                                                                Debit card
                                                            </h4>
                                                            <p>
                                                                Use any visa or
                                                                mastercard debit
                                                                card to make
                                                                small
                                                                investment. Add
                                                                a bank or wallet
                                                                to sell
                                                            </p>
                                                            <p className="text-muted">
                                                                Recommended for
                                                                invest small
                                                                amount
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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

export default VerifyStep5;
