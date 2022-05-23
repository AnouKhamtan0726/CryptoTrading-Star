import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function VerifyStep6() {
    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-body">
                                    <form className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon">
                                                <i className="fa fa-check"></i>
                                            </span>
                                            <h4>
                                                Congratulation. Your bank added
                                            </h4>
                                            <p>
                                                Efficiently provide access to
                                                installed base core competencies
                                                and end end data Interactively
                                                target equity.
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <Link
                                                to={"./settings-account"}
                                                className="btn btn-success ps-5 pe-5"
                                            >
                                                Continue
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

export default VerifyStep6;
