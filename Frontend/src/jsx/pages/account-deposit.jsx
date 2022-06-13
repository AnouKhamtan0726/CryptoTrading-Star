import React, {useState, useEffect} from "react";
import { Nav, Tab } from "react-bootstrap";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import QrcodeBox from "../element/qrcode-box";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import axios from "axios";
import { SERVER_URL } from "../../server";
import { useCookies } from "react-cookie";
import {useHistory} from 'react-router-dom';

function AccountDeposit() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const history = useHistory()
  const [mainWallet, setMainWallet] = useState('')
  const [msg, setMsg] = useState('')

  const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      setMsg('Address is copied!')
      return navigator.clipboard.writeText(str);
    }
    
    return Promise.reject('The Clipboard API is not available.');
  };

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/get-wallets");

      setMainWallet(res.data.main_wallet);
    } catch (err) {
      history.push("/");
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Cold Wallet Deposit Address</h4>
                </div>
                <div className="card-body" id="deposits">
                  <Tab.Container defaultActiveKey="tab1">
                    <Nav variant="pills">
                      <Nav.Link eventKey="tab1">USDT(BEP-20)</Nav.Link>
                      {/* <Nav.Link eventKey="tab2">ALI</Nav.Link> */}
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="tab1">
                        {/* <div className="qrcodebox">
                          <div className="qrcode">
                            <QrcodeBox />
                          </div>
                        </div> */}
                        <form>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              value={mainWallet}
                              readOnly={true}
                            />
                            <div className="input-group-append">
                              <button type="button" className="input-group-text bg-primary text-white" onClick={(e) => {
                                copyToClipboard(mainWallet)
                              }}>
                                Copy
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              {msg.length != 0 && <p className="error-message success-message">{msg}</p>}
                            </div>
                          </div>
                        </form>

                        <ul>
                          <li>
                            <i className="mdi mdi-checkbox-blank-circle"></i>
                            Reminder: For the safety of your funds, please
                            confirm again that the blockchain you wish to use is
                            BSC.
                          </li>
                        </ul>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="tab2">
                        <div className="qrcodebox">
                          <div className="qrcode">
                            <QrcodeBox />
                          </div>
                        </div>
                        <form action="">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4"
                            />
                            <div className="input-group-append">
                              <span className="input-group-text bg-primary text-white">
                                Copy
                              </span>
                            </div>
                          </div>
                        </form>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
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

export default AccountDeposit;
