import React, { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-rangeslider/lib/index.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import ProgressBar from "react-bootstrap/ProgressBar";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function Dashboard() {
  let [count, setCount] = useState(5);

  function incrementCount() {
    count = count + 5;
    setCount(count);
  }
  function incrementCount10() {
    count = count + 10;
    setCount(count);
  }
  function incrementCount50() {
    count = count + 50;
    setCount(count);
  }
  function incrementCount100() {
    count = count + 100;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 5;
      setCount(count);
    }
  }
  return (
    <>
      <Header2 />
      <Sidebar />

      <div className="content-body" id="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-md-12">
              <div className="col-12">
                {/* <!-- TradingView Widget BEGIN --> */}
                <div
                  className="tradingview-widget-container card"
                  style={{ height: "600px" }}
                >
                  <TradingViewWidget
                    symbol="COINBASE:BTCUSD"
                    theme={Themes.DARK}
                    hide_top_toolbar={true}
                    hide_legend={true}
                    locale="jp"
                    timezone="Asia/Tokyo"
                    interval="1"
                    details={true}
                    autosize
                  />
                </div>
                {/* <!-- TradingView Widget END --> */}
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Transactions History</h4>
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
                              <th>Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#565845522</td>
                              <td>January 10, {new Date().getFullYear()} </td>
                              <td className="trading-status">
                                <span className="buy-thumb">
                                  <i className="mdi mdi-arrow-up"></i>
                                </span>{" "}
                                Buy
                              </td>
                              <td>0.254782 BTC</td>
                              <td>Completed</td>
                              <td>0.125476 BTC</td>
                            </tr>
                            <tr>
                              <td>#565845522</td>
                              <td>January 10, {new Date().getFullYear()} </td>
                              <td className="trading-status">
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>{" "}
                                Sell
                              </td>
                              <td>0.254782 BTC</td>
                              <td>Completed</td>
                              <td>0.125476 BTC</td>
                            </tr>
                            <tr>
                              <td>#565845522</td>
                              <td>January 10, {new Date().getFullYear()} </td>
                              <td className="trading-status">
                                <span className="buy-thumb">
                                  <i className="mdi mdi-arrow-up"></i>
                                </span>{" "}
                                Buy
                              </td>
                              <td>0.254782 BTC</td>
                              <td>Completed</td>
                              <td>0.125476 BTC</td>
                            </tr>
                            <tr>
                              <td>#565845522</td>
                              <td>January 10, {new Date().getFullYear()} </td>
                              <td className="trading-status">
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>{" "}
                                Sell
                              </td>
                              <td>0.254782 BTC</td>
                              <td>Completed</td>
                              <td>0.125476 BTC</td>
                            </tr>
                            <tr>
                              <td>#565845522</td>
                              <td>January 10, {new Date().getFullYear()} </td>
                              <td className="trading-status">
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>{" "}
                                Sell
                              </td>
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
            <div className="col-xl-2 col-lg-12">
              <div className="col-12">
                <div className="card trading-card">
                  <div className="card-header">Amount</div>
                  <div className="card-body">
                    <div className="inde-box">
                      <button
                        className="inde-btn btn btn-danger btn-block col-3"
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <div className="inde-text col-5">
                        <span className="dollar-symbol">$</span>
                        <input
                          className="inde-input form-control"
                          type="text"
                          value={count}
                        />
                      </div>
                      <button
                        className="inde-btn btn btn-success btn-block col-3"
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div className="add-amount-box">
                      <div>
                        <button
                          className="col-3 inde-btn btn btn-success btn-block"
                          onClick={incrementCount10}
                        >
                          +10
                        </button>
                        <button
                          className="col-3 inde-btn btn btn-success btn-block"
                          onClick={incrementCount50}
                        >
                          +50
                        </button>
                        <button
                          className="col-3 inde-btn btn btn-success btn-block"
                          onClick={incrementCount100}
                        >
                          +100
                        </button>
                      </div>
                      <div>
                        <button className="col-5 inde-btn btn btn-success btn-block">
                          Half
                        </button>
                        <button className="col-5 inde-btn btn btn-success btn-block">
                          All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card amount-card">
                  <div className="card-header">
                    <span>Profit</span>
                    <h3 className="profit-amount">95%</h3>
                  </div>
                  <div className="card-body">
                    <h2 className="trading-amount text-center">+$ 95</h2>
                    <div className="trading-progressbar text-center">
                      <p className="progressbar-title text-center">
                        Traders sentiments
                      </p>
                      <div className="progressbar-body text-center">
                        <ProgressBar animated variant="success" now={45} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card buysell-box">
                  <div className="card-header">Buy / Sell</div>
                  <div className="card-body">
                    <button className="mt-2 col-12 inde-btn btn btn-success btn-block">
                      BUY
                    </button>
                    <button className="mt-2 col-12 inde-btn btn btn-info btn-block">
                      Wait Time
                    </button>
                    <button className="mt-2 col-12 inde-btn btn btn-danger btn-block">
                      SELL
                    </button>
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

export default Dashboard;
