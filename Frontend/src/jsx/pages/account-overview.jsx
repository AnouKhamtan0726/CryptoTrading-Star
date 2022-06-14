import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountSubmenu from "../layout/account-submenu";
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

function AccountOverview() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});
  const [walletTrans, setWalletTrans] = useState([]);
  const [mainBalance, setMainBalance] = useState(0);
  const [tradingBalance, setTradingBalance] = useState(0);
  const web3 = new Web3(RPC_URL),
    usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
  var wallets;

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/get-wallets");
      var user = await axios.post(SERVER_URL + "/login-status");

      wallets = res.data;
      setUserInfo(user.data);

      res = await Promise.all([usdtContract.methods.balanceOf(wallets.main_wallet).call(), usdtContract.methods.balanceOf(wallets.trading_wallet).call()])
      setMainBalance(res[0] / 10 ** USDT_DECIMALS);
      setTradingBalance(res[1] / 10 ** USDT_DECIMALS);

      var trans = await axios.post(SERVER_URL + "/get-wallet-transactions", {
        type: 'withdraw'
      })

      setWalletTrans(trans.data)
    } catch (err) {
      console.log(err);
      // history.push("/");
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
              <div className="card sub-menu">
                <div className="card-body">
                  <AccountSubmenu />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="card profile_card">
                <div className="card-body">
                  <div className="d-flex">
                    <img
                      className="me-3 rounded-circle me-0 me-sm-3"
                      src={require("../../images/profile/3.png")}
                      width="60"
                      height="60"
                      alt=""
                    />
                    <div className="media-body">
                      <span>Hello</span>
                      <h4 className="mb-2">
                        {userInfo.first_name && userInfo.first_name != ""
                          ? userInfo.first_name + " " + userInfo.last_name
                          : userInfo.name}
                      </h4>
                      <p className="mb-1">
                        {" "}
                        <span>
                          <i className="fa fa-phone me-2 text-primary"></i>
                        </span>{" "}
                        {userInfo.phone}
                      </p>
                      <p className="mb-1">
                        {" "}
                        <span>
                          <i className="fa fa-envelope me-2 text-primary"></i>
                        </span>
                        {userInfo.email}
                      </p>
                    </div>
                  </div>

                  <ul className="card-profile__info">
                    <li className="mb-1">
                      <h5 className="me-4">Total Log</h5>
                      <span>103 Time (Today 5 Times)</span>
                    </li>
                    <li>
                      <h5 className="text-danger me-4">Last Log</h5>
                      <span className="text-danger">
                        3 February, {new Date().getFullYear()} , 10:00 PM
                      </span>
                    </li>
                  </ul>
                  {/* <div className="social-icons">
                    <Link className="facebook text-center" to={"#"}>
                      <span>
                        <i className="fa fa-facebook"></i>
                      </span>
                    </Link>
                    <Link className="twitter text-center" to={"#"}>
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                    </Link>
                    <Link className="youtube text-center" to={"#"}>
                      <span>
                        <i className="fa fa-youtube"></i>
                      </span>
                    </Link>
                    <Link className="googlePlus text-center" to={"#"}>
                      <span>
                        <i className="fa fa-google"></i>
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="card acc_balance">
                <div className="card-header">
                  <h4 className="card-title">Wallet</h4>
                </div>
                <div className="card-body">
                  <span>Available USDT</span>
                  <h3>{(mainBalance + tradingBalance).toFixed(2)} USDT</h3>

                  <div className="d-flex justify-content-between my-3">
                    <div>
                      <p className="mb-1">Main Wallet</p>
                      <h4>{mainBalance.toFixed(2)} USDT</h4>
                    </div>
                    <div>
                      <p className="mb-1">Trading Wallet</p>
                      <h4>{tradingBalance.toFixed(2)} USDT</h4>
                    </div>
                  </div>

                  {/* <div className="d-flex justify-content-between my-3">
                    <div>
                      <p className="mb-1">Buy this month</p>
                      <h4>3.0215485 BTC</h4>
                    </div>
                    <div>
                      <p className="mb-1">Sell this month</p>
                      <h4>3.0215485 BTC</h4>
                    </div>
                  </div>

                  <div className="btn-group mb-3">
                    <button className="btn btn-success">Buy</button>
                    <button className="btn btn-danger">Sell</button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">Total Rounds</p>
                      <h4>0</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">Buy / Sell</p>
                      <h4>0 / 0</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">Earned</p>
                      <h4>0 USDT</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">Lost</p>
                      <h4>0 USDT</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
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
                            <th>Type (Deposit / Withdraw)</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Commission</th>
                          </tr>
                        </thead>
                        <tbody>
                          {walletTrans.map((trans, key) => {
                            return <tr key={key}>
                              <td>#{trans.id}</td>
                              <td>{new Date(trans.transaction_at).toISOString().slice(0, 19).replace("T", " ")} </td>
                              <td>{trans.type == 1 ? 'Deposit' : 'Withdraw'}</td>
                              <td>{trans.amount.toFixed(2)} USDT</td>
                              <td>Completed</td>
                              <td>0.01 BNB</td>
                            </tr>
                          })}
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

export default AccountOverview;
