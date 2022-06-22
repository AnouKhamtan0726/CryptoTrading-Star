import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  SERVER_URL,
  RPC_URL,
  USDT_ADDRESS,
  USDT_ABI,
  USDT_DECIMALS,
} from "../../server";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Web3 from "web3";
import toastr from "toastr";
import "../../../node_modules/toastr/build/toastr.min.css";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="profile_log">
      <div className="user">
        <span className="thumb">
          <i className="mdi mdi-account"></i>
        </span>
      </div>
    </div>
  </div>
));

const AlertToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="alert_panel">
      <span className="thumb">
        <i className="mdi mdi-bell-ring"></i>
      </span>
    </div>
  </div>
));

const AccountToggle = React.forwardRef(
  ({ children, onClick, isLive, amount }, ref) => {
    return (
      <div
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        <div className="account-select">
          <div className="select-pointer d-flex justify-content-between align-items-center px-2">
            <div className="px-2">
              <p className="mb-0 text-white">
                {isLive == true ? "Live Account" : "Demo Account"}
              </p>
              <span className="text-white">${amount.toFixed(2)}</span>
            </div>
            <span className="arrow px-2">
              <i className="la la-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
);

const QuickDeposit = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="deposit-btn btn btn-info text-white">Quick Deposit</div>
  </div>
));

const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="language">
      <div className="icon">
        <i className="flag-icon flag-icon-us"></i>
        <span>English</span>
      </div>
    </div>
  </div>
));

function Header2() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [liveAmount, setLiveAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [demoAmount, setDemoAmount] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const current = new Date();
  const [cookies, setCookie, removeCookie] = useCookies([
    "refreshToken",
    "liveAmount",
    "demoAmount",
    "isLive",
    "tradingProfit",
  ]);
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  var wallets;
  const web3 = new Web3(RPC_URL),
    usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
  var intervalID = 0;

  async function getWalletAmounts() {
    try {
      var res = await Promise.all([
        usdtContract.methods.balanceOf(wallets.trading_wallet).call(),
        usdtContract.methods.balanceOf(wallets.main_wallet).call(),
      ]);
      var res1 = await axios.post(SERVER_URL + "/login-status");

      setCookie("liveAmount", res[0] / 10 ** USDT_DECIMALS);
      setCookie("demoAmount", res1.data.demo_amount);
      setCookie("tradingProfit", res1.data.trading_profit);
      setLiveAmount(res[0] / 10 ** USDT_DECIMALS);
      setTotalAmount(res[1] / 10 ** USDT_DECIMALS);
      setDemoAmount(parseFloat(res1.data.demo_amount));
    } catch (error) {
      if (error.response && error.response.status == 403) {
        history.push("/signin");
      }
    }
  }

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/login-status");
      wallets = await axios.post(SERVER_URL + "/get-wallets");
      wallets = wallets.data;

      setUsername(res.data.name);
      setEmail(res.data.email);
      setCookie("tradingProfit", res.data.trading_profit);

      if (!cookies.liveAmount) {
        setCookie("liveAmount", 0);
        setCookie("demoAmount", 0);
        setCookie("isLive", false);
      }

      setIsLive(cookies.isLive == "true");
      setLiveAmount(parseFloat(cookies.liveAmount));
      setDemoAmount(parseFloat(cookies.demoAmount));
    } catch (error) {
      if (error.response && error.response.status == 403) {
        history.push("/signin");
      }
    }
  }

  useEffect(() => {
    init();
    intervalID = setInterval(getWalletAmounts, 5000);
  }, []);

  useEffect(() => {
    return async () => {
      clearInterval(intervalID);
    };
  }, []);

  const Logout = async () => {
    try {
      await axios.post(SERVER_URL + "/logout");
      removeCookie("refreshToken");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onRecharge = async () => {
    try {
      var res = await axios.post(SERVER_URL + "/restore-demo-account");

      toastr.success(res.data.msg);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        history.push("/signin");
      } else if (error.response && error.response.status == 400) {
        toastr.error(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="header dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                <Link className="navbar-brand" to={"./dashboard"}>
                  <img
                    src={require("./../../images/main_assets/main_logo.svg")}
                    alt=""
                  />
                </Link>
                <div className="header-right d-flex my-2 align-items-center">
                  {/* <div className="prize-pool mx-3">
                    <Link to={"./prize-pool"}>
                      <img
                        className="prize-icon"
                        src={require("./../../images/main_assets/center.png")}
                        alt=""
                      />
                      <div className="btn px-3 py-0">
                        <p className="mb-0 text-white">Prize Pool</p>
                        <span className="text-white">$100K</span>
                      </div>
                    </Link>
                  </div> */}
                  <div
                    className="account-change"
                    style={{ marginRight: "10px" }}
                  >
                    <Dropdown className="account-select">
                      <Dropdown.Toggle
                        as={AccountToggle}
                        isLive={isLive}
                        amount={isLive ? liveAmount : demoAmount}
                      />
                      <Dropdown.Menu size="sm" title="">
                        <div
                          className="live-account d-flex align-items-center justify-content-between py-1 px-3"
                          onClick={(e) => {
                            setIsLive(true);
                            setCookie("isLive", true);
                          }}
                        >
                          <div className="live-left">
                            <p className="mb-0">Live Account</p>
                            <span>${liveAmount.toFixed(2)}</span>
                          </div>
                          {/* <div className="live-modal">
                            <svg
                              data-v-b495ff56=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="46"
                              height="29"
                              viewBox="0 0 46 29"
                            >
                              <g
                                data-v-b495ff56=""
                                id="Group_13378"
                                data-name="Group 13378"
                                transform="translate(-230 -71)"
                              >
                                <g
                                  data-v-b495ff56=""
                                  id="Group_13375"
                                  data-name="Group 13375"
                                >
                                  <g
                                    data-v-b495ff56=""
                                    id="Group_13376"
                                    data-name="Group 13376"
                                  >
                                    <rect
                                      data-v-b495ff56=""
                                      id="Rectangle_4298"
                                      data-name="Rectangle 4298"
                                      width="46"
                                      height="29"
                                      rx="4"
                                      transform="translate(230 71)"
                                      fill="#34D1D6"
                                    ></rect>
                                  </g>
                                </g>
                                <g
                                  data-v-b495ff56=""
                                  id="Group_13377"
                                  data-name="Group 13377"
                                >
                                  <g
                                    data-v-b495ff56=""
                                    id="conversion"
                                    transform="translate(246.725 78.133)"
                                  >
                                    <path
                                      data-v-b495ff56=""
                                      id="Path_13963"
                                      data-name="Path 13963"
                                      d="M15.692,7.459H1V6.123H14.079L10.072,2.116l.945-.944,5.147,5.147a.668.668,0,0,1-.472,1.14Z"
                                      transform="translate(-1 -1.172)"
                                      stroke=""
                                      className="fill-color"
                                    ></path>
                                    <path
                                      data-v-b495ff56=""
                                      id="Path_13964"
                                      data-name="Path 13964"
                                      d="M6.342,34.287,1.2,29.14A.668.668,0,0,1,1.668,28H16.359v1.336H3.28l4.007,4.007Z"
                                      transform="translate(-1 -19.042)"
                                      stroke=""
                                      className="fill-color"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div> */}
                        </div>
                        <div
                          className="demo-account d-flex align-items-center justify-content-between py-1 px-3"
                          onClick={(e) => {
                            setIsLive(false);
                            setCookie("isLive", false);
                          }}
                        >
                          <div className="demo-left">
                            <p className="mb-0">Demo Account</p>
                            <span>${demoAmount.toFixed(2)}</span>
                          </div>
                          <div className="demo-recharge" onClick={onRecharge}>
                            <svg
                              data-v-b495ff56=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.795"
                              height="18.488"
                              viewBox="0 0 17.795 18.488"
                              id="refill-balance"
                            >
                              <g
                                data-v-b495ff56=""
                                id="refresh-01"
                                transform="translate(-1 0.081)"
                              >
                                <path
                                  data-v-b495ff56=""
                                  id="Path_26259"
                                  data-name="Path 26259"
                                  d="M18.8,7.366,17.555-.081,14.993,2.481a8.8,8.8,0,1,0,2.9,10.641.8.8,0,0,0-1.468-.642,7.215,7.215,0,1,1-2.573-8.854l-2.5,2.5Z"
                                  fill="#fff"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* <div className="quick-deposit mx-3">
                    <Dropdown className="deposit-btn">
                      <Dropdown.Toggle as={QuickDeposit} />
                      <Dropdown.Menu size="sm" title="">
                        <form className="p-3">
                          <p className="text-white mb-1 small-text">
                            Wallet Balance
                          </p>
                          <div className="btn btn-light w-100">
                            <img
                              src={require("./../../images/main_assets/usdt.png")}
                              className="wallet-icon"
                              alt=""
                            />
                            <span>100.00</span>
                          </div>
                          <p className="text-white mb-1 small-text mt-3">
                            Deposit Amount
                          </p>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control deposit-amount w-100"
                              placeholder="Please enter amount"
                            />
                            <span className="position-absolute">All</span>
                          </div>
                          <p className="text-white mb-1 small-text mt-3">
                            *Total Receive Amount
                          </p>
                          <h3>$150.00</h3>
                          <Link className="w-100" to={"./exchange"}>
                            <div className="text-white btn btn-success btn-block w-100 mt-3">
                              Deposit Now
                            </div>
                          </Link>
                          <p className="mb-1 small-text mt-2 text-center">
                            *Subject to change
                          </p>
                        </form>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div> */}
                  <div className="dashboard_log">
                    <Dropdown className="profile_log">
                      <Dropdown.Toggle as={ProfileToggle} />
                      <Dropdown.Menu size="sm" title="">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <i className="mdi mdi-account"></i>
                            </span>
                            <div className="user-info">
                              <h6>{username}</h6>
                              <span>{email}</span>
                            </div>
                          </div>
                        </div>
                        <div className="user-balance">
                          <div className="available">
                            <p>Available</p>
                            <span>{liveAmount.toFixed(2)} USDT</span>
                          </div>
                          <div className="total">
                            <p>Total</p>
                            <span>
                              {(totalAmount + liveAmount).toFixed(2)} USDT
                            </span>
                          </div>
                        </div>
                        <div className="quick-deposit dropdown-item responsive-dropdown-item">
                          <Dropdown className="deposit-btn">
                            {/* <Dropdown.Toggle as={QuickDeposit} /> */}
                            <Dropdown.Menu size="sm" title="">
                              <form className="p-3">
                                <p className="text-white mb-1 small-text">
                                  Wallet Balance
                                </p>
                                <div className="btn btn-light w-100">
                                  <img
                                    src={require("./../../images/main_assets/usdt.png")}
                                    className="wallet-icon"
                                    alt=""
                                  />
                                  <span>100.00</span>
                                </div>
                                <p className="text-white mb-1 small-text mt-3">
                                  Deposit Amount
                                </p>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control deposit-amount w-100"
                                    placeholder="Please enter amount"
                                  />
                                  <span className="position-absolute">All</span>
                                </div>
                                <p className="text-white mb-1 small-text mt-3">
                                  *Total Receive Amount
                                </p>
                                <h3>$150.00</h3>
                                <Link className="w-100" to={"./exchange"}>
                                  <div className="text-white btn btn-success btn-block w-100 mt-3">
                                    Deposit Now
                                  </div>
                                </Link>
                                <p className="mb-1 small-text mt-2 text-center">
                                  *Subject to change
                                </p>
                              </form>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        {/* <div className="language dropdown-item">
                          <Dropdown>
                            <Dropdown.Toggle as={LanguageToggle} />
                            <Dropdown.Menu size="sm" title="">
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-us"></i>{" "}
                                English
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-ua"></i>{" "}
                                український
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-bd"></i> বাংলা
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-fr"></i>{" "}
                                Français
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-kr"></i>{" "}
                                한국어
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-kh"></i>{" "}
                                ប្រទេសកម្ពុជា
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-th"></i> Thai
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-vn"></i> Tiếng
                                Việt
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-id"></i>{" "}
                                Indonesian
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-la"></i> Lao
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-ru"></i>{" "}
                                Русский
                              </Link>
                              <Link to={"#"} className="dropdown-item">
                                <i className="flag-icon flag-icon-de"></i>{" "}
                                Deutsch
                              </Link>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div> */}
                        <Link
                          to={"./dashboard"}
                          className="dropdown-item responsive-dropdown-item"
                        >
                          <i className="mdi mdi-view-dashboard"></i> Trading
                        </Link>
                        <Link
                          to={"./exchange"}
                          className="dropdown-item responsive-dropdown-item"
                        >
                          <i className="mdi mdi-tumblr-reblog"></i> Exchange
                        </Link>
                        <Link
                          to={"./account-overview"}
                          className="dropdown-item"
                        >
                          <i className="mdi mdi-account"></i> Account
                        </Link>
                        <Link to={"./settings"} className="dropdown-item">
                          <i className="mdi mdi-settings"></i> Setting
                        </Link>
                        {/* <Link to={"./lock"} className="dropdown-item">
                          <i className="mdi mdi-lock"></i> Lock
                        </Link> */}
                        <button
                          onClick={Logout}
                          className="dropdown-item logout"
                        >
                          <i className="mdi mdi-logout"></i> Logout
                        </button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* <div className="alert-panel">
                    <Dropdown className="alert-btn">
                      <Dropdown.Toggle as={AlertToggle} />
                      <Dropdown.Menu size="sm" title="">
                        <div className="panel-container">
                          <div className="panel-header d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <h5 className="text-white mb-0">Notifications</h5>
                              <span className="mx-2 pointer btn btn-success py-0 px-2 text-white">
                                <i className="mdi mdi-check-all"></i>
                              </span>
                            </div>
                            <div className="btn">View All</div>
                          </div>
                          <div className="panel-body">
                            <div className="d-flex justify-content-between body-content">
                              <span className="thumb">
                                <i className="mdi mdi-bell-ring"></i>
                              </span>
                              <div className="alert-box">
                                <span className="box-title text-bold">
                                  Streak Challenge Result Summary
                                </span>
                                <p className="notification-item-text mb-1">
                                  There are
                                  <b className="textnote-notidesc"> 97 </b>
                                  users who hit the Jackpot of total
                                  <b className="textnote-notidesc">
                                    {" "}
                                    $12,083.45{" "}
                                  </b>
                                  and
                                  <b className="textnote-notidesc">
                                    {" "}
                                    Stevepham{" "}
                                  </b>
                                  account who won the Mega prize of total
                                  <b className="textnote-notidesc"> $420.62 </b>
                                  yesterday.
                                </p>
                                <span className="box-date">{date}</span>
                              </div>
                              <p className="alert-status unread"></p>
                            </div>
                            <div className="d-flex justify-content-between body-content">
                              <span className="thumb">
                                <i className="mdi mdi-bell-ring"></i>
                              </span>
                              <div className="alert-box">
                                <span className="box-title text-white">
                                  Streak Challenge Result Summary
                                </span>
                                <p className="notification-item-text mb-1">
                                  There are
                                  <b className="textnote-notidesc"> 97 </b>
                                  users who hit the Jackpot of total
                                  <b className="textnote-notidesc">
                                    {" "}
                                    $12,083.45{" "}
                                  </b>
                                  and
                                  <b className="textnote-notidesc">
                                    {" "}
                                    Stevepham{" "}
                                  </b>
                                  account who won the Mega prize of total
                                  <b className="textnote-notidesc"> $420.62 </b>
                                  yesterday.
                                </p>
                                <span className="box-date">{date}</span>
                              </div>
                              <span className="alert-status unread"></span>
                            </div>
                            <div className="d-flex justify-content-between body-content">
                              <span className="thumb">
                                <i className="mdi mdi-bell-ring"></i>
                              </span>
                              <div className="alert-box">
                                <span className="box-title text-white">
                                  Streak Challenge Result Summary
                                </span>
                                <p className="notification-item-text mb-1">
                                  There are
                                  <b className="textnote-notidesc"> 97 </b>
                                  users who hit the Jackpot of total
                                  <b className="textnote-notidesc">
                                    {" "}
                                    $12,083.45{" "}
                                  </b>
                                  and
                                  <b className="textnote-notidesc">
                                    {" "}
                                    Stevepham{" "}
                                  </b>
                                  account who won the Mega prize of total
                                  <b className="textnote-notidesc"> $420.62 </b>
                                  yesterday.
                                </p>
                                <span className="box-date">{date}</span>
                              </div>
                              <span className="alert-status"></span>
                            </div>
                            <div className="d-flex justify-content-between body-content">
                              <span className="thumb">
                                <i className="mdi mdi-bell-ring"></i>
                              </span>
                              <div className="alert-box">
                                <span className="box-title text-white">
                                  Streak Challenge Result Summary
                                </span>
                                <p className="notification-item-text mb-1">
                                  There are
                                  <b className="textnote-notidesc"> 97 </b>
                                  users who hit the Jackpot of total
                                  <b className="textnote-notidesc">
                                    {" "}
                                    $12,083.45{" "}
                                  </b>
                                  and
                                  <b className="textnote-notidesc">
                                    {" "}
                                    Stevepham{" "}
                                  </b>
                                  account who won the Mega prize of total
                                  <b className="textnote-notidesc"> $420.62 </b>
                                  yesterday.
                                </p>
                                <span className="box-date">{date}</span>
                              </div>
                              <span className="alert-status"></span>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
