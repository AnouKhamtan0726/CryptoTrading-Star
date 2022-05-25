import React from 'react';
// import AreaChart from '../charts/area';
import DataSubmenu from '../layout/data-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';

function Tbi() {

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
                                    <DataSubmenu />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            Stake more ALI, Earn More Bonus
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <p>Fast and easy staking service for Alita holders. Unstake immediately with 10% fee. Standard unstaking completes after 24 hours, free of charge.</p>
                                        <div className="card stake-card">
                                            <div className="card-header">
                                                <div className="box-title">
                                                    <img src={require('./../../images/main_assets/ali.png')} alt="" className="img-fluid" />
                                                    <h5 className='stakeali-text'>
                                                        Stake ALI
                                                    </h5>
                                                </div>
                                                <div className="box-amount text-center">
                                                    <span>APY</span>
                                                    <h5>
                                                        45.61%
                                                    </h5>
                                                </div>
                                                <div className="box-modalbtn">
                                                    <button className='btn btn-success btn-block'>Stake ALI</button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <span>
                                                        ALI Staked
                                                    </span>
                                                    <div className="stakedali-amount">
                                                        <h3>0</h3>
                                                        <span>~ $0</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span>
                                                        ALI Earned
                                                    </span>
                                                    <div className="earnedali-amount">
                                                        <h3>0</h3>
                                                        <span>~ $0</span>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            Transaction Records
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <Tabs defaultActiveKey="staking" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="staking" title="Staking History">
                                                <TabContainer>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="transaction-table">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped mb-0 table-responsive-sm">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Time</th>
                                                                                <th>Type</th>
                                                                                <th>Amount (ALI)</th>
                                                                                <th>Status</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabContainer>
                                            </Tab>
                                            <Tab eventKey="reward" title="Reward History">
                                                <TabContainer>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="transaction-table">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped mb-0 table-responsive-sm">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Time</th>
                                                                                <th>ALI Staked</th>
                                                                                <th>Daily Interest</th>
                                                                                <th>Rewards (ALI)</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    January 10,{" "}
                                                                                    {new Date().getFullYear()}{" "}
                                                                                </td>
                                                                                <td>Realized P&L</td>
                                                                                <td>0.254782 BTC</td>
                                                                                <td>Completed</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabContainer>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            Token Info
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="card tokeninfo-card">
                                            <div className="card-header">
                                                <div className="box-content">
                                                    <span>Maximum Supply</span>
                                                    <h3>
                                                        100M
                                                    </h3>
                                                </div>
                                                <div className="box-content">
                                                    <span>Circulating Supply</span>
                                                    <h3>
                                                        34.14M ALI
                                                    </h3>
                                                </div>
                                                <div className="box-content">
                                                    <span>Maximum Supply</span>
                                                    <h3>
                                                        4.09M
                                                    </h3>
                                                </div>
                                                <div className="box-content">
                                                    <span>Volume 24H</span>
                                                    <h3>
                                                        4.1K
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-content">
                                                    <img src={require('./../../images/main_assets/tokeninfo1.png')} alt="" className="img-fluid" />
                                                    <div>
                                                        <span>Earn up to</span>
                                                        <h2>217.59%</h2>
                                                        <span>Per year in Farms</span>
                                                    </div>
                                                </div>
                                                <div className="card-content">
                                                    <img src={require('./../../images/main_assets/tokeninfo2.png')} alt="" className="img-fluid" />
                                                    <div>
                                                        <span>Earn up to</span>
                                                        <h2>111.94%</h2>
                                                        <span>Per year in Ocean Pools</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="card staking-settingcard">
                                <div className="card-header">
                                    <h4>An easy way to buy ALI</h4>
                                    <div className="cryptocard-box">
                                        <div className='content-line'>
                                            <span>From</span>
                                            <span>Balance: 0</span>
                                        </div>
                                        <div className='content-line align-items-center'>
                                            <h4>0</h4>
                                            <div className='d-flex align-items-center'>
                                                <h5 className='text-success'>Max</h5>
                                                <div className='crypto-box'>
                                                    <img src={require('./../../images/main_assets/usdt.png')} alt="" width={24} className="img-fluid" />
                                                    <h5 className="text-white">USDT</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cryptocard-box">
                                        <div className='content-line'>
                                            <span>To</span>
                                            <span>Balance: 0</span>
                                        </div>
                                        <div className='content-line align-items-center'>
                                            <h4>0</h4>
                                            <div className='d-flex align-items-center'>
                                                <div className='crypto-box'>
                                                    <img src={require('./../../images/main_assets/ali-small.png')} width={24} alt="" className="img-fluid" />
                                                    <h5 className="text-white">ALI</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span>Price</span>
                                        <h6 className='mb-0'>8.552 ALI per USDT <img src={require('./../../images/main_assets/change.png')} alt="" className="img-fluid" /></h6>
                                    </div>
                                    <button className='btn btn-success w-100 text-white mt-3'>Buy ALI</button>
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

export default Tbi;