import React from 'react';
import AccountSubmenu from '../layout/account-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



function AccountApi() {

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
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Create API Key</h4>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Generate New Key</label>
                                                    <input type="text" name="usd_amount" className="form-control" placeholder="Enter Passphrase" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Confirm Passphrase</label>
                                                    <input type="text" name="usd_amount" className="form-control" placeholder="Re-enter passphrase" />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-primary">Create API Keys</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Your API Keys</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Key</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" checked />
                                                            <span className="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i className="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" />
                                                            <span className="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i className="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" />
                                                            <span className="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i className="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" checked />
                                                            <span className="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i className="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                    <td>
                                                        <label className="toggle">
                                                            <input className="toggle-checkbox" type="checkbox" />
                                                            <span className="toggle-switch"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <i className="mdi mdi-delete fs-20"></i>
                                                        </span>
                                                    </td>
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

            <Footer2 />
        </>
    )
}

export default AccountApi;