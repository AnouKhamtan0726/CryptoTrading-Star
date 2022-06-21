import React, { useState, useEffect } from "react";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import axios from "axios";
import { SERVER_URL } from "../../server";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function AccountWithdraw() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "refreshToken",
    "field_2fa",
    "withdrawWallet",
    "withdrawAmount",
  ]);
  const history = useHistory();
  const [withdrawWallet, setWithdrawWallet] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [msg, setMsg] = useState("");
  const [smsg, setSMsg] = useState("");
  const [withdrawLabel, setWithdrawLabel] = useState("Withdraw Now");

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      await axios.post(SERVER_URL + "/login-status");

      if (cookies.field_2fa == "withdraw") {
        setWithdrawLabel("Withdrawing ...");
        setWithdrawWallet(cookies.withdrawWallet);
        setWithdrawAmount(cookies.withdrawAmount);

        await axios.post(SERVER_URL + "/withdraw", {
          withdrawWallet: cookies.withdrawWallet,
          withdrawAmount: cookies.withdrawAmount,
        });

        setSMsg(
          "Your withdraw is confirmed. Please check your wallet about 5 mins later."
        );
        setMsg("");

        removeCookie("field_2fa");
        removeCookie("withdrawWallet");
        removeCookie("withdrawAmount");
      }
    } catch (error) {
      if (error.response && error.response.data.status == 403) {
        history.push("/signin");
      } else if (error.response && error.response.data) {
        setMsg(error.response.data.msg);
        setSMsg("");
      }
    }

    setWithdrawLabel("Withdraw Now");
  }

  async function onWithdraw(e) {
    try {
      await axios.post(SERVER_URL + "/login-status");

      if (cookies.field_2fa == "withdraw") {
        setWithdrawLabel("Withdrawing ...");

        await axios.post(SERVER_URL + "/withdraw", {
          withdrawWallet: withdrawWallet,
          withdrawAmount: withdrawAmount,
        });

        setSMsg(
          "Your withdraw is confirmed. Please check your wallet about 5 mins later."
        );
        setMsg("");

        removeCookie("field_2fa");
        removeCookie("withdrawWallet");
        removeCookie("withdrawAmount");
      } else {
        setCookie("field_2fa", "withdraw");
        setCookie("withdrawAmount", withdrawAmount);
        setCookie("withdrawWallet", withdrawWallet);

        await axios.post(SERVER_URL + "/request-2fa", {
          field: "withdraw",
        });

        history.push("/email-verify");
      }
    } catch (error) {
      if (error.response && error.response.data.status == 403) {
        history.push("/signin");
      } else if (error.response && error.response.data) {
        setMsg(error.response.data.msg);
        setSMsg("");
      }
    }

    setWithdrawLabel("Withdraw Now");
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Withdraw</h4>
                </div>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <div className="col-xl-12">
                        {msg.length != 0 && (
                          <p className="error-message">{msg}</p>
                        )}
                        {smsg.length != 0 && (
                          <p className="error-message success-message">
                            {smsg}
                          </p>
                        )}
                      </div>
                      <div className="mb-3 row align-items-center">
                        <div className="col-sm-4">
                          <label for="inputEmail3" className="col-form-label">
                            Withdraw Address
                            <br />
                            <small>Please double check this address</small>
                          </label>
                        </div>
                        <div className="col-sm-8">
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="0xcf96178161586b8C9c5096E35Ac2Ef3Ad1fAd2A7"
                              value={withdrawWallet}
                              onChange={(e) =>
                                setWithdrawWallet(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <div className="col-sm-4">
                          <label for="inputEmail3" className="col-form-label">
                            Amount USDT
                            <br />
                            <small>
                              Available amount
                              <br />
                              (only main wallet amount)
                            </small>
                          </label>
                        </div>
                        <div className="col-sm-8">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <label className="input-group-text bg-primary text-white">
                                USDT
                              </label>
                            </div>
                            <input
                              type="text"
                              className="form-control text-end"
                              placeholder="5000 USDT"
                              value={withdrawAmount}
                              onChange={(e) =>
                                setWithdrawAmount(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 row align-items-center">
                        <div className="col-sm-6">
                          <label for="inputEmail3" className="col-form-label">
                            Binance Smart Chain Network Fee (BNB)
                            <br />
                            <small>
                              Transactions on the BSC network are priorirized by
                              fees
                            </small>
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <h4 className="text-end">0.01</h4>
                        </div>
                      </div>

                      <div className="text-end">
                        <button
                          type="button"
                          onClick={onWithdraw}
                          className="btn btn-primary text-white"
                          disabled={withdrawLabel != "Withdraw Now"}
                        >
                          {withdrawLabel}
                        </button>
                      </div>
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
