import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-rangeslider/lib/index.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
// import TradeViewChart from 'react-crypto-chart';

function Dashboard() {
    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="content-body" id="dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-xxl-12">
                            {/* <!-- TradingView Widget BEGIN --> */}
                            <div
                                className="tradingview-widget-container card"
                                style={{ height: "460px" }}
                            >
                                <TradingViewWidget
                                    symbol="BTCUSD"
                                    theme={Themes.DARK}
                                    locale="jp"
                                    autosize
                                />
                            </div>
                            {/* <!-- TradingView Widget END --> */}
                        </div>
                        {/* <TradeViewChart pair="BTCBUSD" interval="1m" chartLayout="" /> */}
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default Dashboard;
