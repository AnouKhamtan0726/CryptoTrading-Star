import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-rangeslider/lib/index.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

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
                                style={{ height: "50vh" }}
                            >
                                <TradingViewWidget
                                    symbol="COINBASE:BTCUSD"
                                    theme={Themes.DARK}
                                    hide_top_toolbar={true}
                                    hide_legend={true}
                                    locale="jp"
                                    timezone="Asia/Tokyo"
                                    interval="1"
                                    details={true}
                                    autosize
                                />
                            </div>
                            {/* <!-- TradingView Widget END --> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    );
}

export default Dashboard;
