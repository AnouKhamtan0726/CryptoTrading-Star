import React from 'react';
import AccountSubmenu from '../layout/account-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



function AccountAffiliate() {

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
                                    <h4 className="card-title">Affiliate Program</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-6">
                                            <h5>Affiliate Link</h5>
                                            <p>Copy and paste this link to send to friends or use in your articles. When
                                            users sign up using this link, your account will be credited with referral
                                            bonuses.</p>
                                        </div>
                                        <div className="col-xl-5 col-lg-6">
                                            <h5>Share your link</h5>
                                            <form action="">
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        value="https://exchange.tradio.com/register?ref=0595b6ff8865ee37" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text bg-primary text-white">Copy</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Affiliate Status</h4>
                                    <small className="mb-0">Pay on a daily basis</small>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Index</th>
                                                    <th>Total</th>
                                                    <th>Previous Day</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Invites</td>
                                                    <td>5 User</td>
                                                    <td>3 User</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Turnover</td>
                                                    <td>0.248 BTC</td>
                                                    <td>0.354 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>Free Paid</td>
                                                    <td>0.255 BTC</td>
                                                    <td>0.253 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>Affiliate Level (% of Commissions)</td>
                                                    <td>50%</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Affiliate Payouts
                                                    <br />
                                                        <small>Not listed on affiliate leaderboard</small>
                                                    </th>
                                                    <th>0.925 BTC</th>
                                                    <th>0.235 BTC</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Affiliate Payout Status</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Free Paid (BTC)</th>
                                                    <th>Affiliate Level</th>
                                                    <th>Payouts (BTC)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>March 8th, {new Date().getFullYear()} </td>
                                                    <td>0.2954 BTC</td>
                                                    <td>Level 3</td>
                                                    <td>0.2547 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>March 8th, {new Date().getFullYear()} </td>
                                                    <td>0.2954 BTC</td>
                                                    <td>Level 3</td>
                                                    <td>0.2547 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>March 8th, {new Date().getFullYear()} </td>
                                                    <td>0.2954 BTC</td>
                                                    <td>Level 3</td>
                                                    <td>0.2547 BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>March 8th, {new Date().getFullYear()} </td>
                                                    <td>0.2954 BTC</td>
                                                    <td>Level 3</td>
                                                    <td>0.2547 BTC</td>
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

export default AccountAffiliate;