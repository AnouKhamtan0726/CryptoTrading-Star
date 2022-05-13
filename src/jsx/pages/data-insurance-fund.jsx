import React from 'react';
import DataSubmenu from '../layout/data-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



function InsuranceFund() {

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
                                <h4 className="card-title">Insurance Fund Balance</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Start Time</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
                                            </tr>
                                            <tr>
                                                <td>15th March, {new Date().getFullYear()} </td>
                                                <td>1.0215 BTC</td>
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

export default InsuranceFund;