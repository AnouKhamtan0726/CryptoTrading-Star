import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import axios from "axios";
import {
  SERVER_URL,
  RPC_URL,
  USDT_ADDRESS,
  USDT_ABI,
  USDT_DECIMALS,
} from "../../server";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import Web3 from "web3";

function Exchange() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const history = useHistory();
  const [buyAmount, setBuyAmount] = useState(0);
  const [sellAmount, setSellAmount] = useState(0);
  const [mainBalance, setMainBalance] = useState(0);
  const [tradingBalance, setTradingBalance] = useState(0);
  const [msg, setMsg] = useState("");
  const [smsg, setSMsg] = useState("");
  const [buyLabel, setBuyLabel] = useState("Send to Trading Wallet")
  const [sellLabel, setSellLabel] = useState("Send to Main Wallet")
  const web3 = new Web3(RPC_URL),
    usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
  var wallets;

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/get-wallets");

      wallets = res.data;
      res = await Promise.all([usdtContract.methods.balanceOf(wallets.main_wallet).call(), usdtContract.methods.balanceOf(wallets.trading_wallet).call()])
      setMainBalance(res[0] / 10 ** USDT_DECIMALS);
      setTradingBalance(res[1] / 10 ** USDT_DECIMALS);
    } catch (err) {
      history.push("/");
    }
  }

  async function onExchange(isBuy) {
    if (isBuy) {
      setBuyLabel("Buying ...")
    } else {
      setSellLabel("Selling ...")
    }

    try {
      await axios.post(SERVER_URL + "/exchange", {
        exchangeAmount: isBuy ? buyAmount : sellAmount,
        isBuy,
      });

      setSMsg(
        "Exchange is confirmed. Please check your wallet about 5 mins later."
      );
      setMsg("");
    } catch (error) {
      if (error.response && error.response.data.status == 403) {
        history.push("/signin");
      } else if (error.response && error.response.data) {
        setMsg(error.response.data.msg);
        setSMsg("");
      }
    }

    await init()

    if (isBuy) {
      setBuyLabel("Buy Now")
    } else {
      setSellLabel("Sell Now")
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Header2 />
      <Sidebar />

      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {msg.length != 0 && <p className="error-message">{msg}</p>}
              {smsg.length != 0 && (
                <p className="error-message success-message">{smsg}</p>
              )}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Main Wallet</h4>
                </div>
                <div className="card-body">
                  <div className="buy-sell-widget">
                    <form
                      method="post"
                      name="myform"
                      className="currency_validate"
                    >
                      <div className="mb-3">
                        <label className="form-label">Amount</label>
                        <div className="input-group mb-3">
                          <select
                            name="currency"
                            className="form-control mw-150"
                          >
                            <option data-display="USDT" value="USDT">
                              USDT
                            </option>
                          </select>
                          <input
                            type="text"
                            name="usd_amount"
                            className="form-control text-end"
                            value={mainBalance.toFixed(2) + " USDT"}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Enter your amount</label>
                        <div className="input-group">
                          <input
                            type="text"
                            name="currency_amount"
                            className="form-control"
                            placeholder="5000 USDT"
                            value={buyAmount}
                            onChange={(e) => setBuyAmount(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={(e) => onExchange(true)}
                        disabled={buyLabel != 'Send to Trading Wallet'}
                      >
                        {buyLabel}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Trading Wallet</h4>
                </div>
                <div className="card-body">
                  <div className="buy-sell-widget">
                    <form
                      method="post"
                      name="myform"
                      className="currency_validate"
                    >
                      <div className="mb-3">
                        <label className="form-label">Amount</label>
                        <div className="input-group mb-3">
                          <select
                            name="currency"
                            className="form-control mw-150"
                          >
                            <option data-display="USDT" value="USDT">
                              USDT
                            </option>
                          </select>
                          <input
                            type="text"
                            name="usd_amount"
                            className="form-control text-end"
                            value={tradingBalance.toFixed(2) + " USDT"}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Enter your amount</label>
                        <div className="input-group">
                          <input
                            type="text"
                            name="currency_amount"
                            className="form-control"
                            placeholder="5000 USDT"
                            value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger btn-block"
                        onClick={(e) => onExchange(false)}
                        disabled={sellLabel != 'Send to Main Wallet'}
                      >
                        {sellLabel}
                      </button>
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
                            <td>
                              <span className="sold-thumb">
                                <i className="mdi mdi-arrow-down"></i>
                              </span>
                            </td>

                            <td>
                              <span className="badge badge-danger p-2">
                                Sold
                              </span>
                            </td>
                            <td>
                              <i className="cc BTC"></i> BTC
                            </td>
                            <td>0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="buy-thumb">
                                <i className="mdi mdi-arrow-up"></i>
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-success p-2">
                                Buy
                              </span>
                            </td>
                            <td>
                              <i className="cc BTC"></i> BTC
                            </td>
                            <td>0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sold-thumb">
                                <i className="mdi mdi-arrow-down"></i>
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-danger p-2">
                                Sold
                              </span>
                            </td>
                            <td>
                              <i className="cc BTC"></i> BTC
                            </td>
                            <td>0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="buy-thumb">
                                <i className="mdi mdi-arrow-up"></i>
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-success p-2">
                                Buy
                              </span>
                            </td>
                            <td>
                              <i className="cc BTC"></i> BTC
                            </td>
                            <td>0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sold-thumb">
                                <i className="mdi mdi-arrow-down"></i>
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-danger p-2">
                                Sold
                              </span>
                            </td>
                            <td>
                              <i className="cc BTC"></i> BTC
                            </td>
                            <td>0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91</td>
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
  );
}

export default Exchange;
