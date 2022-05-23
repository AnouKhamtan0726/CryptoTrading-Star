import React from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../layout/footer2';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";



function Exchange() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Buy</h4>
                                </div>
                                <div className="card-body">
                                    <div className="buy-sell-widget">
                                        <form method="post" name="myform" className="currency_validate">
                                            <div className="mb-3">
                                                <label className="form-label">Currency</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control mw-150">
                                                        <option data-display="USDT" value="USDT">USDT
                                                        </option>
                                                        <option value="ALI">ALI</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control text-end"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Payment Method</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="USDT" value="USDT">USDT
                                                        </option>
                                                        <option value="ALI">ALI</option>
                                                    </select>
                                                    {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    value="125.00 USD"/> --> */}
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Enter your amount</label>
                                                <div className="input-group">
                                                    <input type="text" name="currency_amount" className="form-control"
                                                        placeholder="0.0214 BTC" />
                                                    {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    placeholder="125.00 USD"/> --> */}
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <p className="mb-0">Monthly Limit</p>
                                                    <h6 className="mb-0">$49750 remaining</h6>
                                                </div>
                                            </div>
                                            <Link to={'#'} className="btn btn-success btn-block">Buy
                                                Now</Link>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Sell</h4>
                                </div>
                                <div className="card-body">
                                    <div className="buy-sell-widget">
                                        <form method="post" name="myform" className="currency_validate">
                                            <div className="mb-3">
                                                <label className="form-label">Currency</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control mw-150">
                                                        <option data-display="USDT" value="USDT">USDT
                                                        </option>
                                                        <option value="ALI">ALI</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control text-end"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Payment Method</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="USDT" value="USDT">USDT
                                                        </option>
                                                        <option value="ALI">ALI</option>
                                                    </select>
                                                    {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    value="125.00 USD"/> --> */}
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Enter your amount</label>
                                                <div className="input-group">
                                                    <input type="text" name="currency_amount" className="form-control"
                                                        placeholder="0.0214 BTC" />
                                                    {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    placeholder="125.00 USD"/> --> */}
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <p className="mb-0">Monthly Limit</p>
                                                    <h6 className="mb-0">$49750 remaining</h6>
                                                </div>
                                            </div>
                                            <Link to={'#'} className="btn btn-danger btn-block">Sell
                                                Now</Link>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Transaction</h4>
                                </div>
                                <div className="card-body">
                                    <div className="transaction-table">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0 table-responsive-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="mdi mdi-arrow-down"></i></span>
                                                        </td>

                                                        <td>
                                                            <span className="badge badge-danger p-2">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> BTC
                                                        </td>
                                                        <td>
                                                            0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91
                                                        </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="mdi mdi-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success p-2">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc LTC"></i> LTC
                                                        </td>
                                                        <td>
                                                            0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91
                                                        </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="mdi mdi-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger p-2">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc XRP"></i> XRP
                                                        </td>
                                                        <td>
                                                            0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91
                                                        </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="buy-thumb"><i className="mdi mdi-arrow-up"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-success p-2">Buy</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc DASH"></i> DASH
                                                        </td>
                                                        <td>
                                                            0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91
                                                        </td>
                                                        <td className="text-success">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="sold-thumb"><i className="mdi mdi-arrow-down"></i></span>
                                                        </td>
                                                        <td>
                                                            <span className="badge badge-danger p-2">Sold</span>
                                                        </td>
                                                        <td>
                                                            <i className="cc BTC"></i> BTC
                                                        </td>
                                                        <td>
                                                            0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91
                                                        </td>
                                                        <td className="text-danger">-0.000242 BTC</td>
                                                        <td>-0.125 USD</td>
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
            <Chatbot />
        </>
    )
}

export default Exchange;