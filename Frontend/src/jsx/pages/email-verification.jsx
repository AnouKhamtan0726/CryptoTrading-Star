import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function EmailVerification() {
    const [verifyCode, setVerifyCode] = useState('')
    const [msg, setMsg] = useState("");
    const history = useHistory();

    async function init() {
        var refreshToken = (await window.cookieStore.get('refreshToken')).value

        axios.defaults.headers.common['Authorization'] = "Basic " + refreshToken;
    }

    useEffect(() => {
        init()
    }, [])

    async function Verify() {
        try {
            await axios.post('http://localhost:5000/verify-email', {
                code: verifyCode
            })
            history.push('/otp-1')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

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
                <div className="card-body">
                  <Link className="page-back text-muted" to={"./signin"}>
                    <span>
                      <i className="fa fa-angle-left"></i>
                    </span>{" "}
                    Back
                  </Link>
                  <h3 className="text-center">Email Verification</h3>
                  <p className="text-center mb-5">
                    We will send one time code on your email
                  </p>
                  <form>
                    <div className="mb-3">
                        <p className="has-text-centered error-message">{msg}</p>
                      <label>Your Email Verify Code(Code will be expired after 1 minute)</label>
                      <input
                        type="text"
                        className="form-control text-center font-weight-bold"
                        value={verifyCode}
                        onChange={(e) => setVerifyCode(e.target.value)}
                      />
                    </div>
                    <div className="text-center">
                      <button type="button" className="btn btn-success btn-block" onClick={Verify}>Verify</button>
                    </div>
                  </form>
                  <div className="info mt-3">
                    <p className="text-muted">
                      You dont recommended to save password to browsers!
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
}

export default EmailVerification;
