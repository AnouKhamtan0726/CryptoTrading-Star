import React from 'react';
import { Link } from 'react-router-dom';
import Footer1 from '../layout/footer1';
// import { Row, Col, Card } from 'react-bootstrap';
import Header3 from '../layout/header3';



function Demo() {

    return (
        <>
            <Header3 />
            <div className="intro section-padding position-relative" id="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="intro-content">
                                <h1>Trade Cryptocurrency <br /> With <span className="text-primary">Tradio</span></h1>
                                <p>Tradio is the complete UI of Front end and Backend. Sign in, Signup, Phone and ID card
                                verification, One time password verify and add bank, debit card settings and profile etc
                                pages included. </p>
                                {/* <Link tp={"https://themeforest.net/item/tradio-cryptocurrency-exchange-react-app-dashboard/27503351"} className="btn btn-primary px-3 mx-2 my-2">Buy Now</Link> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 py-md-5">
                            <div className="intro-demo_img">
                                <img src={require("../../images/portfolio.jpg")} alt="" className="img-fluid" />
                                <img src={require("../../images/portfolio-dark.jpg")} alt="" className="img-fluid dark-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="demo section-padding page-section" id="demo">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-heading text-center">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/landing.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Landing</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./dashboard"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/dashboard.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Dashboard</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./exchange"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/buy-sell.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Exchange</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./account-overview"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/accounts.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>

                                <h4>Accounts</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./account-deposit"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/deposit.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>

                                <h4>Deposit</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./account-withdraw"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/withdraw.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Withdraw</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./account-api"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/api.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>API</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./account-affiliate"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/affiliate.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Affiliate</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-tbi"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/tbi.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Tradio Bitcoin Index</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-founding-rate"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/funding-rate.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Funding Rate</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-insurance-found"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/insurance-fund.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Insurance Found</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-last-price"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/last-price.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Last Price</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-index-price"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/index-price.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Index Price</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./data-mark-price"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/mark-price.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Mark Price</h4>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./settings"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/settings.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>

                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./settings-preferences"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/preferences.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Preferences</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./settings-security"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/security.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Security</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./settings-account"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/linked-account.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Linked Account</h4>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./signin"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/signin.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Signin</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./signup"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/signup.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Signup</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./reset"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/reset.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Reset</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./lock"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/lock.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Locked</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./otp-1"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/otp-phone.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>OTP Number</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./otp-2"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/otp-code.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>OTP Code</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-1"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/verify-id.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Verify ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-2"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/upload-id.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Upload ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-3"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/id-verifing.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>ID Verifying</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-4"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/id-verified.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>ID Verified</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./add-debit-card"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/add-debit-card.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Add Debit Card</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-6"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/success.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Success</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./verify-step-5"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/choose-account.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Recommendation</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./add-bank-acc"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/add-bank.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>Add Bank Account</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./400"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/400.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>400</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./403"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/403.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>403</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./404"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/404.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>404</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./500"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/500.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>500</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="demo_img">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"./503"} target="_blank">
                                            <div className="img-wrap">
                                                <img src={require("../../images/demo/dashboard/dark/503.jpg")} alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
                                <h4>503</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer1 />
        </>
    )
}

export default Demo;