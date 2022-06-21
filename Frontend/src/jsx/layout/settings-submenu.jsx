import React from "react";
import { Link } from "react-router-dom";

function SettingsSubmenu() {
  return (
    <>
      <ul className="d-flex">
        <li className="nav-item">
          <Link to={"./settings"} className="nav-link">
            <i className="mdi mdi-account-settings-variant"></i>
            <span>Edit Profile</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to={"./settings-preferences"} className="nav-link">
            <i className="mdi mdi-settings"></i>
            <span>Preferences</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./settings-security"} className="nav-link">
            <i className="mdi mdi-lock"></i>
            <span>Security</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./settings-account"} className="nav-link">
            <i className="mdi mdi-bank"></i>
            <span>Linked Account</span>
          </Link>
        </li> */}
      </ul>
    </>
  );
}

export default SettingsSubmenu;
