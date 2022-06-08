import React from "react";
import { Link } from "react-router-dom";

function AccountSubmenu() {
  return (
    <>
      <ul className="d-flex">
        <li className="nav-item">
          <Link to={"./account-overview"} className="nav-link">
            <i className="mdi mdi-bullseye"></i>
            <span>Overview</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./account-deposit"} className="nav-link">
            <i className="mdi mdi-heart"></i>
            <span>Deposit</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./account-withdraw"} className="nav-link">
            <i className="mdi mdi-pentagon"></i>
            <span>Withdraw</span>
          </Link>
        </li>
        {/* <li className="nav-item">
                    <Link to={"./account-api"} className="nav-link">
                        <i className="mdi mdi-database"></i>
                        <span>API</span>
                    </Link>
                </li> */}
        <li className="nav-item">
          <Link to={"./account-affiliate"} className="nav-link">
            <i className="mdi mdi-diamond"></i>
            <span>Affiliate</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default AccountSubmenu;
