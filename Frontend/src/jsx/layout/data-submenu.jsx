import React from "react";
import { Link } from "react-router-dom";

function DataSubmenu() {
  return (
    <>
      <ul className="d-flex">
        <li className="nav-item">
          <Link to={"./data-tbi"} className="nav-link">
            <i className="mdi mdi-database-plus"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./data-funding-rate"} className="nav-link">
            <i className="mdi mdi-book"></i>
            <span>Trusted User</span>
          </Link>
        </li>
        {/* <li className="nav-item">
                    <Link to={"./data-insurance-fund"} className="nav-link">
                        <i className="mdi mdi-book-multiple"></i>
                        <span>Premium Pass</span>
                    </Link>
                </li> */}
      </ul>
    </>
  );
}

export default DataSubmenu;
