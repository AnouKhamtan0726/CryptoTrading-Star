import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from '../element/popup';
import Footer2 from '../layout/footer2';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



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
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                    </option>
                                                        <option value="litecoin">Litecoin</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control text-end"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Payment Method</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                    </option>
                                                        <option value="litecoin">Litecoin</option>
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
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                    </option>
                                                        <option value="litecoin">Litecoin</option>
                                                    </select>
                                                    <input type="text" name="usd_amount" className="form-control text-end"
                                                        value="125.00 USD" />
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Payment Method</label>
                                                <div className="input-group mb-3">
                                                    <select name='currency' className="form-control">
                                                        <option data-display="Bitcoin" value="bitcoin">Bitcoin
                                                    </option>
                                                        <option value="litecoin">Litecoin</option>
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
                        <div className="col-xl-9 col-lg-9 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="buyer-seller">
                                        <div className="d-flex justify-content-between mb-3">
                                            <div className="buyer-info">
                                                <div className="d-flex">
                                                    <img className="me-3 rounded" src={require("../../images/avatar/2.jpg")} alt="" />
                                                    <div className="media-body">
                                                        <h4>Buyer</h4>
                                                        <h5 className="text-body">Michael John</h5>
                                                        <Link to={'#'} className="text-body">hello@example.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="seller-info text-end">
                                                <div className="d-flex">
                                                    <div className="media-body">
                                                        <h4>Seller</h4>
                                                        <h5 className="text-body">John Doe</h5>
                                                        <Link to={'#'} className="text-body">hello@example.com</Link>
                                                    </div>
                                                    <img className="ms-3 rounded" src={require("../../images/avatar/5.jpg")} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td><span className="text-primary">You are selling</span></td>
                                                        <td><span className="text-primary">0.00254 BTC</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Method</td>
                                                        <td>Bank of America Bank ***********5245</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Exchange Rate</td>
                                                        <td>0.00212455 BTC</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fee</td>
                                                        <td>$28.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>$854.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vat</td>
                                                        <td>
                                                            <div className="text-danger">$25.00 USD</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Sub Total</td>
                                                        <td> $1232.00 USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3">
                            <div className="apps-download">
                                <div className="apps-download-content">
                                    <h4>Get the best mobile app to exchange or buy crypto on the go:</h4>
                                    <div className="mt-4 text-center">
                                        <Link to={'#'} className="btn btn-primary m-2"><img src={require("../../images/android.svg")} alt="" /></Link>
                                        <Link to={'#'} className="btn btn-success m-2"><img src={require("../../images/apple.svg")} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">All Activities</h4>
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
                                                            Using - Bank *******5264
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
                                                            Using - Card *******8475
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
                                                            Using - Card *******8475
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
                                                            Using - Card *******2321
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
                                                            Using - Card *******2321
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
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">FAQ</h4>
                                </div>
                                <div className="card-body">
                                    <Accordion defaultActiveKey="0" id="accordion-faq" className="accordion">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                <h5>What Shipping Methods are Available?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                <h5>How Long Will it Take To Get My Package?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                <h5>How Do I Track My Order?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                                <h5>How Do I Track My Order?</h5>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>Anim pariatur cliche reprehenderit, enim eiusmod high
                                                life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                    eiusmod.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                        <Popup />
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default Exchange;