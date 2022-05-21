import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function DebitCard() {
    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Link a debit card
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form className="identity-upload">
                                        <div className="row">
                                            <div className="mb-3 col-xl-12">
                                                <label className="form-label">
                                                    Name on card{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Big Star"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-12">
                                                <label className="form-label">
                                                    Card number{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="5658 4258 6358 4756"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-4">
                                                <label className="form-label">
                                                    Expiration{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="10/22"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-4">
                                                <label className="form-label">
                                                    CVC{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="125"
                                                />
                                            </div>
                                            <div className="mb-3 col-xl-4">
                                                <label className="form-label">
                                                    Postal code{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="2368"
                                                />
                                            </div>

                                            <div className="text-center col-12">
                                                <Link
                                                    to={"./verify-step-6"}
                                                    className="btn btn-success ps-5 pe-5"
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
<Chatbot />
        </>
    );
}

export default DebitCard;
