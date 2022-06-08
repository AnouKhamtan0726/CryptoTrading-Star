import React from "react";
import { Link } from "react-router-dom";

function Reset() {
  return (
    <>
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <Link className="navbar-brand" to={"./"}>
                  <img
                    src={require("./../../images/main_assets/main_logo.svg")}
                    alt=""
                  />
                </Link>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Reset password</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value="hello@example.com"
                      />
                    </div>
                    <div className="text-center">
                      <Link
                        to={"./signin"}
                        className="btn btn-success btn-block"
                      >
                        Reset
                      </Link>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p className="mb-1">Don't Received? </p>
                    <Link className="text-primary" to={"./reset"}>
                      Resend{" "}
                    </Link>
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

export default Reset;
