import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import SettingsSubmenu from "../layout/settings-submenu";
import Sidebar from "../layout/sidebar";

function SettingAccount() {
    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

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
                                    <h4 className="card-title">
                                        Linked Account or Card
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table linked_account ">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="me-3">
                                                                <i className="fa fa-bank"></i>
                                                            </span>
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-1">
                                                                    Bank of
                                                                    America
                                                                </h5>
                                                                <p>
                                                                    Bank
                                                                    **************5421
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="edit-option">
                                                            <Link to={"#"}>
                                                                <i className="fa fa-eye"></i>
                                                            </Link>
                                                            <Link to={"#"}>
                                                                <i className="fa fa-pencil"></i>
                                                            </Link>
                                                            <Link to={"#"}>
                                                                <i className="fa fa-trash"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="verify">
                                                            <div className="verified">
                                                                <span>
                                                                    <i className="la la-check"></i>
                                                                </span>
                                                                <Link to={"#"}>
                                                                    Verified
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="me-3">
                                                                <i className="fa fa-credit-card"></i>
                                                            </span>
                                                            <div className="media-body">
                                                                <h5 className="mt-0 mb-1">
                                                                    Debit Card
                                                                </h5>
                                                                <p>
                                                                    Prepaid Card
                                                                    *********5478
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="edit-option">
                                                            <Link to={"#"}>
                                                                <i className="fa fa-eye"></i>
                                                            </Link>
                                                            <Link to={"#"}>
                                                                <i className="fa fa-pencil"></i>
                                                            </Link>
                                                            <Link to={"#"}>
                                                                <i className="fa fa-trash"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="verify">
                                                            <div className="not-verify">
                                                                <span>
                                                                    <i className="la la-close"></i>
                                                                </span>
                                                                <Link to={"#"}>
                                                                    Not verified
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="mt-3">
                                            <Link
                                                to={"./verify-step-5"}
                                                className="btn btn-primary px-4 py-2 me-3 my-2"
                                            >
                                                Add Bank Account
                                            </Link>
                                            <Link
                                                to={"./verify-step-1"}
                                                className="btn btn-success px-4 py-2 my-2"
                                            >
                                                Add Debit Account
                                            </Link>
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

export default SettingAccount;
