import React from "react";
import { Link } from "react-router-dom";

function PageTitle() {
  return (
    <>
      <div className="page-title dashboard">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="page-title-content">
                <p>
                  Welcome Back,
                  <span> Big Star</span>
                </p>
              </div>
            </div>
            <div className="col-6">
              <ul className="text-end breadcrumbs list-unstyle">
                <li>
                  <Link to={"./settings"}>Settings </Link>
                </li>
                <li className="active">
                  <Link to={"#"}>Security</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTitle;

// 0170 55 99 058
