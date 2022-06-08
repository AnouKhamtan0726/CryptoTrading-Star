import React from "react";
import { Link } from "react-router-dom";

function Lock() {
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
                  <h4 className="card-title">Locked</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3 mb-4">
                      <label>Enter Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <Link
                      className="btn-success btn-block btn-lg border-0 text-center"
                      to={"./dashboard"}
                    >
                      Unlock
                    </Link>
                  </form>
                  <div className="new-account text-center mt-3">
                    <Link className="text-primary" to={"./reset"}>
                      <h5>Reset Password?</h5>
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

export default Lock;
