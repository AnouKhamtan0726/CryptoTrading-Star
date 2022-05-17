import React from "react";
import { Link } from "react-router-dom";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

function AccountOverview() {
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
                                    <AccountSubmenu />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card profile_card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <img
                                            className="me-3 rounded-circle me-0 me-sm-3"
                                            src={require("../../images/profile/3.png")}
                                            width="60"
                                            height="60"
                                            alt=""
                                        />
                                        <div className="media-body">
                                            <span>Hello</span>
                                            <h4 className="mb-2">Big Star</h4>
                                            <p className="mb-1">
                                                {" "}
                                                <span>
                                                    <i className="fa fa-phone me-2 text-primary"></i>
                                                </span>{" "}
                                                +1 235 5547
                                            </p>
                                            <p className="mb-1">
                                                {" "}
                                                <span>
                                                    <i className="fa fa-envelope me-2 text-primary"></i>
                                                </span>
                                                hello@example.com
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="card-profile__info">
                                        <li>
                                            <h5 className="me-4">Address</h5>
                                            <span className="text-muted">
                                                House 14, Road 9, Gulshan, Dhaka
                                            </span>
                                        </li>
                                        <li className="mb-1">
                                            <h5 className="me-4">Total Log</h5>
                                            <span>
                                                103 Time (Today 5 Times)
                                            </span>
                                        </li>
                                        <li>
                                            <h5 className="text-danger me-4">
                                                Last Log
                                            </h5>
                                            <span className="text-danger">
                                                3 February,{" "}
                                                {new Date().getFullYear()} ,
                                                10:00 PM
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="social-icons">
                                        <Link
                                            className="facebook text-center"
                                            to={"#"}
                                        >
                                            <span>
                                                <i className="fa fa-facebook"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            className="twitter text-center"
                                            to={"#"}
                                        >
                                            <span>
                                                <i className="fa fa-twitter"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            className="youtube text-center"
                                            to={"#"}
                                        >
                                            <span>
                                                <i className="fa fa-youtube"></i>
                                            </span>
                                        </Link>
                                        <Link
                                            className="googlePlus text-center"
                                            to={"#"}
                                        >
                                            <span>
                                                <i className="fa fa-google"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card acc_balance">
                                <div className="card-header">
                                    <h4 className="card-title">Wallet</h4>
                                </div>
                                <div className="card-body">
                                    <span>Available BTC</span>
                                    <h3>0.0230145 BTC</h3>

                                    <div className="d-flex justify-content-between my-3">
                                        <div>
                                            <p className="mb-1">Total Equity</p>
                                            <h4>78950.35 USD</h4>
                                        </div>
                                        <div>
                                            <p className="mb-1">Available Margin</p>
                                            <h4>56845.25 USD</h4>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between my-3">
                                        <div>
                                            <p className="mb-1">Buy this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                        <div>
                                            <p className="mb-1">Sell this month</p>
                                            <h4>3.0215485 BTC</h4>
                                        </div>
                                    </div>

                                    <div className="btn-group mb-3">
                                        <button className="btn btn-success">
                                            Buy
                                        </button>
                                        <button className="btn btn-danger">
                                            Sell
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="card text-center pt-2">
                                        <div className="card-body">
                                            <p className="mb-1">Maintainance</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="card text-center pt-2">
                                        <div className="card-body">
                                            <p className="mb-1">Unrealized P&L</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="card text-center pt-2">
                                        <div className="card-body">
                                            <p className="mb-1">Open Positions</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="card text-center pt-2">
                                        <div className="card-body">
                                            <p className="mb-1">Active Orders</p>
                                            <h4>0.03654 BTC</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Transactions History
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0 table-responsive-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Transaction ID</th>
                                                        <th>Time</th>
                                                        <th>Type</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>
                                                            January 10,{" "}
                                                            {new Date().getFullYear()}{" "}
                                                        </td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>
                                                            January 10,{" "}
                                                            {new Date().getFullYear()}{" "}
                                                        </td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>
                                                            January 10,{" "}
                                                            {new Date().getFullYear()}{" "}
                                                        </td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>
                                                            January 10,{" "}
                                                            {new Date().getFullYear()}{" "}
                                                        </td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>#565845522</td>
                                                        <td>
                                                            January 10,{" "}
                                                            {new Date().getFullYear()}{" "}
                                                        </td>
                                                        <td>Realized P&L</td>
                                                        <td>0.254782 BTC</td>
                                                        <td>Completed</td>
                                                        <td>0.125476 BTC</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default AccountOverview;
