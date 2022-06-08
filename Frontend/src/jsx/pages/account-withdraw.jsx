import React from "react";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function AccountWithdraw() {
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
                  <h4 className="card-title">Withdraw</h4>
                </div>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <form action="#" className="py-5">
                        <div className="mb-3 row align-items-center">
                          <div className="col-sm-4">
                            <label for="inputEmail3" className="col-form-label">
                              DestinationAddress
                              <br />
                              <small>Please double check this address</small>
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <label className="input-group-text  bg-primary">
                                  <i className="mdi mdi-currency-usd fs-18 text-white"></i>
                                </label>
                              </div>
                              <input
                                type="text"
                                className="form-control text-end"
                                placeholder="5000 USD"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                          <div className="col-sm-4">
                            <label for="inputEmail3" className="col-form-label">
                              Amount BTC
                              <br />
                              <small>Maximum amount withdrawable: 0 BTC</small>
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <label className="input-group-text bg-primary">
                                  <i className="cc BTC-alt text-white"></i>
                                </label>
                              </div>
                              <input
                                type="text"
                                className="form-control text-end"
                                placeholder="5000 USD"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 row align-items-center">
                          <div className="col-sm-6">
                            <label for="inputEmail3" className="col-form-label">
                              Bitcoin Network Fee (BTC)
                              <br />
                              <small>
                                Transactions on the Bitcoin network are
                                priorirized by fees
                              </small>
                            </label>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="text-end">0.005</h4>
                          </div>
                        </div>

                        <div className="text-end">
                          <button className="btn btn-primary">
                            Withdraw Now
                          </button>
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
                  <h4 className="card-title">Important Information</h4>
                </div>
                <div className="card-body">
                  <div className="important-info">
                    <ul>
                      <li>
                        <i className="mdi mdi-checkbox-blank-circle"></i>
                        For security reasons, Didi process withdrawals by review
                        once a day. For more information in this policy. Please
                        see our wallet security page.
                      </li>
                      <li>
                        <i className="mdi mdi-checkbox-blank-circle"></i>
                        Submit your withdrawals by 07:00 UTC +00 (about 11 hour)
                        to be included in the days batch
                      </li>
                    </ul>
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
  );
}

export default AccountWithdraw;
