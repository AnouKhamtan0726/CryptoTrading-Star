import React from "react";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function VerifyStep3() {
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
                  <form action="verify-step-4.html" className="identity-upload">
                    <div className="identity-content">
                      <span className="icon">
                        <i className="fa fa-shield"></i>
                      </span>
                      <h4>We are verifying your ID</h4>
                      <p>
                        Your identity is being verified. We will email you once
                        your verification has completed.
                      </p>
                    </div>

                    <div className="upload-loading text-center mb-3">
                      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
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

export default VerifyStep3;
