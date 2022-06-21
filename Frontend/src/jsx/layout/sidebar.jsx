import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const home = <Tooltip id="home">Home</Tooltip>;
const exchange = <Tooltip id="exchange">Exchange</Tooltip>;
const accounts = <Tooltip id="accounts">Accounts</Tooltip>;
const data = <Tooltip id="data">Alita Center</Tooltip>;
const settings = <Tooltip id="settings">Setting</Tooltip>;

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          <ul>
            <li>
              <Link to={"./dashboard"} activeclassname="active">
                <OverlayTrigger placement="right" overlay={home}>
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
            <li>
              <Link to={"./exchange"} activeclassname="active">
                <OverlayTrigger placement="right" overlay={exchange}>
                  <span>
                    <i className="mdi mdi-tumblr-reblog"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
            <li>
              <Link to={"./account-overview"} activeclassname="active">
                <OverlayTrigger placement="right" overlay={accounts}>
                  <span>
                    <i className="mdi mdi-face-profile"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
            {/* <li>
              <Link to={"./data-tbi"} activeclassname="active">
                <OverlayTrigger placement="right" overlay={data}>
                  <span>
                    <i className="mdi mdi-database"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li> */}
            <li>
              <Link to={"./settings"} activeclassname="active">
                <OverlayTrigger placement="right" overlay={settings}>
                  <span>
                    <i className="mdi mdi-settings"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
