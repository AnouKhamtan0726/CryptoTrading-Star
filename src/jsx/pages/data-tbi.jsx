import React from 'react';
import AreaChart from '../charts/area';
import DataSubmenu from '../layout/data-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';



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
                                <DataSubmenu/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">TBI Details</h4>
                                </div>
                                <div className="card-body">
                                    <div id="timeline-chart">
                                    <AreaChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Bitcoin Index History</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Index Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
                                                </tr>
                                                <tr>
                                                    <td>{new Date().getFullYear()} /03/09 10:53:20</td>
                                                    <td>$7873.07</td>
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

export default Tbi;