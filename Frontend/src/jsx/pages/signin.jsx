import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { initOnLoad } from "apexcharts";
import { SERVER_URL } from "../../server";
// import validator from 'validator'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const history = useHistory();
  const [loginMethod, setLoginMethod] = useState('email')

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

  function onLoginMethod(val) {
    setLoginMethod(val)
  }

  const Auth = async (e) => {
    e.preventDefault();
    // let ret = validateEmail();
    // if (!ret) {
    //     return;
    // }
    try {
      var res = await axios.post(
        SERVER_URL + "/login",
        {
          email: email,
          password: password,
          loginMethod: loginMethod,
        },
        { withCredentials: true, credentials: "include" }
      );

      console.log(res)

      if (res.data.loginMethod == 'email') {
        history.push("/email-verify");
      } else if (res.data.loginMethod == 'sms') {
        history.push("/otp-1");
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
                        onKeyUp={(e) => {
                          if (e.key === 'Enter' || e.keyCode === 13) Auth(e)
                        }}
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
                        onKeyUp={(e) => {
                          if (e.key === 'Enter' || e.keyCode === 13) Auth(e)
                        }}
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
                      <div className="mb-3 col-md-6 mb-0">
                        <label className="toggle">
                          <input className="toggle-checkbox" type="checkbox" checked={loginMethod == 'email'} onClick={(e) => onLoginMethod('email')} />
                          <span className="toggle-switch"></span>
                          <span className="toggle-label">Using Email</span>
                        </label>
                      </div>
                      <div className="mb-3 col-md-6 mb-0">
                        <label className="toggle">
                          <input className="toggle-checkbox" type="checkbox" checked={loginMethod == 'sms'} onClick={(e) => onLoginMethod('sms')} />
                          <span className="toggle-switch"></span>
                          <span className="toggle-label">Using SMS</span>
                        </label>
                      </div>

                      <div className="mb-3 mb-0 col-md-12">
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
