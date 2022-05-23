import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Signup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/signin");
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
                                <Link className="navbar-brand" to={'./'}><img src={require('./../../images/main_assets/main_logo.svg')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">
                                        Sign up your account
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        method="post"
                                        name="myform"
                                        className="signup_validate"
                                        onSubmit={Signup}
                                    >
                                        <p className="has-text-centered error-message">{msg}</p>
                                        <div className="mb-3">
                                            <label>Username *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                name="username"
                                                value={name} onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Email *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="hello@example.com"
                                                name="email"
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Confirm Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Re-type Password"
                                                name="password"
                                                value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label>Invite Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Invite Code"
                                                name="invitecode"
                                            />
                                        </div> */}
                                        <div className="text-center mt-4">
                                            <button
                                                // to={"./signin"}
                                                className="btn btn-success btn-block"
                                            >
                                                Sign up
                                            </button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>
                                            Already have an account?{" "}
                                            <Link
                                                className="text-primary"
                                                to={"signin"}
                                            >
                                                Sign in
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
}

export default Signup;
