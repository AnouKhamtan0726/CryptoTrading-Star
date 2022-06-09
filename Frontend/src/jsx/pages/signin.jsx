import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { initOnLoad } from "apexcharts";
// import validator from 'validator'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const history = useHistory();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // const validateEmail = () => {

  //     if (validator.isEmail(email) || email == '' ) {
  //         setMsg('')
  //     } else {
  //         setMsg('Enter valid Email!')
  //         return false;
  //     }
  //     return true;
  // }

  const Auth = async (e) => {
    e.preventDefault();
    // let ret = validateEmail();
    // if (!ret) {
    //     return;
    // }
    try {
      var res = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      }, {withCredentials: true, credentials: 'include'});

      if (res.data.email_verify_status == false) {
        history.push('/email-verify')
      } else if (res.data.phone_verify_status == false) {
        history.push('/otp-1')
      } else {
        history.push("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

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
                  <h4 className="card-title">Sign in</h4>
                </div>
                <div className="card-body">
                  <form method="post" name="myform" className="signin_validate">
                    <p className="has-text-centered error-message">{msg}</p>
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="hello@example.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 position-relative">
                      <label>Password</label>
                      <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        className="password-show position-absolute"
                        onClick={togglePassword}
                      >
                        <span className="icon">
                          <i className="fa fa-eye"></i>
                        </span>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-between mt-4 mb-2">
                      <div className="mb-3 mb-0">
                        <label className="toggle">
                          <input className="toggle-checkbox" type="checkbox" />
                          <span className="toggle-switch"></span>
                          <span className="toggle-label">Remember me</span>
                        </label>
                      </div>
                      <div className="mb-3 mb-0">
                        <Link to={"./reset"}>Forgot Password?</Link>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="btn btn-success btn-block" onClick={Auth}>
                        Sign in
                      </div>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>
                      Don't have an account?{" "}
                      <Link className="text-primary" to={"./signup"}>
                        Sign up
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
};

export default Signin;
