import React from "react";
import DataSubmenu from "../layout/data-submenu";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";

function LastPrice() {
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
                  <h4 className="card-title">Last Price</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Start Time</th>
                          <th>Symbol</th>
                          <th>Last Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
                        </tr>
                        <tr>
                          <td>{new Date().getFullYear()} /03/09 11:13:47</td>
                          <td>BTC - USDQ</td>
                          <td>$7847.33</td>
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
      <Chatbot />
    </>
  );
}

export default LastPrice;
