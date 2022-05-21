import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function VerifyStep1() {
    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                {/* <!-- <div className="card-header">
                                <h4 className="card-title">Link a Debit card</h4>
                            </div> --> */}
                                <div className="card-body">
                                    <form className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon">
                                                <i className="fa fa-shield"></i>
                                            </span>
                                            <h4>
                                                Please verify your identity
                                                before adding your card
                                            </h4>
                                            <p>
                                                Uploading your ID helps as
                                                ensure the safety and security
                                                of your founds
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <Link
                                                to={"./verify-step-2"}
                                                className="btn btn-success ps-5 pe-5"
                                            >
                                                Upload ID
                                            </Link>
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

export default VerifyStep1;
