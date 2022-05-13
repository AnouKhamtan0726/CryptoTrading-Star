import React from 'react';
import DataSubmenu from '../layout/data-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



function FundingRate() {

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
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Founding History</h4>
                                </div>
                                <div className="card-body">
                                    <p>This table contains all historical funding rates on the exchange</p>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Start Time</th>
                                                    <th>Symbol</th>
                                                    <th>Founding Interval</th>
                                                    <th>Funding Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
                                                </tr>
                                                <tr>
                                                    <td>10th March {new Date().getFullYear()} </td>
                                                    <td>BTC - USDO</td>
                                                    <td>Every 8 Hours</td>
                                                    <td>0.0100%</td>
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

            <Footer2 />
        </>
    )
}

export default FundingRate;