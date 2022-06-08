import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Card } from 'react-bootstrap'

function SettingsNav() {
  return (
    <>
      <div className="card settings_menu">
        <div className="card-header">
          <h4 className="card-title">Settings</h4>
        </div>
        <div className="card-body">
          <ul>
            <li className="nav-item">
              <Link to={"./settings"} className="nav-link active">
                <i className="la la-user"></i>
                <span>Edit Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"./settings-preferences"} className="nav-link">
                <i className="la la-cog"></i>
                <span>Preferences</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"./settings-security"} className="nav-link">
                <i className="la la-lock"></i>
                <span>Security</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"./settings-account"} className="nav-link">
                <i className="la la-university"></i>
                <span>Linked Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SettingsNav;
