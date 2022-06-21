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
  const [buyLabel, setBuyLabel] = useState("Send to Trading Wallet");
  const [sellLabel, setSellLabel] = useState("Send to Main Wallet");
  const web3 = new Web3(RPC_URL),
    usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
  var wallets;
  const [walletTrans, setWalletTrans] = useState([]);
  const [showLimit, setShowLimit] = useState(10);

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/get-wallets");

      wallets = res.data;
      res = await Promise.all([
        usdtContract.methods.balanceOf(wallets.main_wallet).call(),
        usdtContract.methods.balanceOf(wallets.trading_wallet).call(),
      ]);
      setMainBalance(res[0] / 10 ** USDT_DECIMALS);
      setTradingBalance(res[1] / 10 ** USDT_DECIMALS);

      var trans = (
        await axios.post(SERVER_URL + "/get-wallet-transactions", {
          type: "exchange",
          limit: showLimit,
        })
      ).data;

      setWalletTrans(trans.trans);
    } catch (err) {
      history.push("/");
    }
  }

  async function showMore() {
    setShowLimit(showLimit + 10);

    var trans = (
      await axios.post(SERVER_URL + "/get-wallet-transactions", {
        type: "exchange",
        limit: showLimit + 10,
      })
    ).data;

    if (showLimit + 10 >= trans.total) setShowLimit(0);

    setWalletTrans(trans.trans);
  }

  async function onExchange(isBuy) {
    if (isBuy) {
      setBuyLabel("Sending to Trading Wallet ...");
    } else {
      setSellLabel("Sending to Main Wallet ...");
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

    await init();

    if (isBuy) {
      setBuyLabel("Send to Trading Wallet");
    } else {
      setSellLabel("Send to Main Wallet");
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
                        disabled={buyLabel != "Send to Trading Wallet"}
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
                        disabled={sellLabel != "Send to Main Wallet"}
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
                          {walletTrans.map((trans, key) => {
                            return (
                              <tr key={key}>
                                <td>
                                  {trans.type == 3 ? (
                                    <span className="buy-thumb">
                                      <i className="mdi mdi-arrow-up"></i>
                                    </span>
                                  ) : (
                                    <span className="sold-thumb">
                                      <i className="mdi mdi-arrow-down"></i>
                                    </span>
                                  )}
                                </td>

                                <td>
                                  <span className="badge badge-info p-2">
                                    {trans.type == 3
                                      ? "Send to trading wallet"
                                      : "Send to main wallet"}
                                  </span>
                                </td>
                                <td>USDT</td>
                                <td>{trans.from_address}</td>
                                <td
                                  className={
                                    trans.type == 3
                                      ? "text-success"
                                      : "text-danger"
                                  }
                                >
                                  {trans.amount} USDT
                                </td>
                                <td>0.01 BNB</td>
                              </tr>
                            );
                          })}
                          {showLimit > 0 && (
                            <tr>
                              <td colSpan="6" align="center">
                                <button
                                  className="mt-2 col-12 inde-btn btn btn-info btn-block time-button"
                                  onClick={showMore}
                                >
                                  Show More
                                </button>
                              </td>
                            </tr>
                          )}
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
