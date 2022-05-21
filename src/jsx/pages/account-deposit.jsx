import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import AccountSubmenu from '../layout/account-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";




function AccountDeposit() {

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
                                            <Nav.Link eventKey="tab1">USDT</Nav.Link>
                                            <Nav.Link eventKey="tab2">ALI</Nav.Link>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <div className="qrcode">
                                                    <img src="./images/qr.svg" alt="" width="150" />
                                                </div>
                                                <form action="">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                            value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-primary text-white">Copy</span>
                                                        </div>
                                                    </div>
                                                </form>

                                                <ul>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-blank-circle"></i>
                                                USDT network transfers will be credited to your Tradio account after
                                                25 network confirmations.
                                            </li>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-blank-circle"></i>
                                                USDT deposits to this address are unlimited. Note that you may not
                                                be able to withdraw all of your funds at once if you deposit more
                                                than your daily withdrawal limit.
                                            </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div className="qrcode">
                                                    <img src="./images/qr.svg" alt="" width="150" />
                                                </div>
                                                <form action="">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control"
                                                            value="0xceb1b174085b0058201be4f2cd0da6a21bff85d4" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text bg-primary text-white">Copy</span>
                                                        </div>
                                                    </div>
                                                </form>

                                                <ul>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-blank-circle"></i>
                                                ALI network transfers will be credited to your Tradio account after
                                                25 network confirmations.
                                            </li>
                                                    <li>
                                                        <i className="mdi mdi-checkbox-blank-circle"></i>
                                                ALI deposits to this address are unlimited. Note that you may not
                                                be able to withdraw all of your funds at once if you deposit more
                                                than your daily withdrawal limit.
                                            </li>
                                                </ul>
                                            </Tab.Pane>
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
    )
}

export default AccountDeposit;


