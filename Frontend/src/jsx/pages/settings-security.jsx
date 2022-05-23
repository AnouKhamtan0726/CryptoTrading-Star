import React from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/footer2';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import SettingsSubmenu from '../layout/settings-submenu';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";



function Security() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card sub-menu">
                                <div className="card-body">
                                    <SettingsSubmenu />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Security</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-xl-4">
                                            <div className="id_card">
                                                <img src={require("../../images/id.png")} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="id_info">
                                                <h4>Big Star </h4>
                                                <p className="mb-1 mt-3">ID: 0024 5687 2254 3698 </p>
                                                <p className="mb-1">Status: <span className="font-weight-bold">Verified</span></p>
                                                <Link href="verify-step-2.html" className="btn btn-success mt-3">New ID</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="phone_verify">
                                                <h4 className="card-title mb-3">Email Address</h4>
                                                <form action="otp-2.html">
                                                    <div className="row align-items-center">
                                                        <div className="mb-3 col-xl-5">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="hello@example.com " />
                                                                <div className="input-group-append">
                                                                    <button className=" btn input-group-text bg-primary text-white">Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="phone_verified">
                                                <h5> <span><i className="fa fa-envelope"></i></span> hello@example.com</h5>
                                                <div className="verify">
                                                    <div className="verified">
                                                        <span><i className="la la-check"></i></span>
                                                        <Link to={"#"}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="phone_verify">
                                                <h4 className="card-title mb-3">Add Phone Number</h4>
                                                <form action="otp-2.html">
                                                    <div className="row align-items-center">
                                                        <div className="mb-3 col-xl-5">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="+1 2335 2458 " />
                                                                <div className="input-group-append">
                                                                    <button className=" btn input-group-text bg-primary text-white">Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="phone_verified">
                                                <h5> <span><i className="fa fa-phone"></i></span> +1 23584 2659</h5>
                                                <div className="verify">
                                                    <div className="verified">
                                                        <span><i className="la la-check"></i></span>
                                                        <Link to={"#"}>Verified</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
<Chatbot />
        </>
    )
}

export default Security;