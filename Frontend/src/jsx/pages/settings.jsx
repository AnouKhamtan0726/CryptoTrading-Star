import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TimeDatePicker from "../element/datepicker";
import Footer2 from "../layout/footer2";
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import SettingsSubmenu from "../layout/settings-submenu";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import { useCookies } from "react-cookie";
import axios from "axios";
import { SERVER_URL } from "../../server";
import countryList from "../element/country-list";

function Settings() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const [userInfo, setUserInfo] = useState({});
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [smsg, setSMsg] = useState("");
  const history = useHistory();

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = await axios.post(SERVER_URL + "/login-status");

      setUserInfo({ ...res.data });
    } catch (err) {
      history.push("/");
    }
  }

  useEffect(() => {
    init();
  }, []);

  async function saveProfile(e) {
    try {
      await axios.post(SERVER_URL + "/save-profile", {
        password1: password,
        confirmPassword1: confirmPassword,
        currentPassword,
        ...userInfo,
      });
      await init();
      setMsg("");
      setSMsg("Profile is saved successfully!");
    } catch (error) {
      if (error.response && error.response.data.status == 403) {
        history.push("/signin");
      } else if (error.response && error.response.data) {
        setMsg(error.response.data.msg);
        setSMsg("");
      }
    }
  }

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
                  <SettingsSubmenu />
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Personal Information</h4>
                    </div>
                    <div className="card-body">
                      {msg.length != 0 && (
                        <p className="error-message">{msg}</p>
                      )}
                      {smsg.length != 0 && (
                        <p className="error-message success-message">{smsg}</p>
                      )}
                      <form className="personal_validate">
                        <div className="row">
                          {/* <div className="mb-3 col-xl-6 col-md-6 col-xs-12">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Hello@example.com"
                              name="email"
                            />
                          </div> */}
                          <div className="mb-3 col-xl-6 col-md-6 col-xs-12">
                            <label className="form-label">Email</label>
                            <div className="button-input">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Hello@example.com"
                                name="email"
                                value={userInfo.email}
                                onChange={(e) => {
                                  userInfo.email = e.target.value;
                                  setUserInfo({ ...userInfo });
                                }}
                              />
                              <button
                                type="button"
                                className="btn btn-info text-white"
                              >
                                Verify
                              </button>
                            </div>
                          </div>
                          <div className="mb-3 col-xl-6 col-md-6 col-xs-12">
                            <label className="form-label">Nick Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nick Name"
                              name="nickname"
                              value={userInfo.name}
                              onChange={(e) => {
                                userInfo.name = e.target.value;
                                setUserInfo({ ...userInfo });
                              }}
                            />
                          </div>
                          <div className="mb-3 col-xl-6 col-md-6">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              name="firstname"
                              value={userInfo.first_name}
                              onChange={(e) => {
                                userInfo.first_name = e.target.value;
                                setUserInfo({ ...userInfo });
                              }}
                            />
                            <p className="small-text text-danger m-b-0">
                              * You must enable 2FA to modify this field
                            </p>
                          </div>
                          <div className="mb-3 col-xl-6 col-md-6">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              name="lastname"
                              value={userInfo.last_name}
                              onChange={(e) => {
                                userInfo.last_name = e.target.value;
                                setUserInfo({ ...userInfo });
                              }}
                            />
                            <p className="small-text text-danger m-b-0">
                              * You must enable 2FA to modify this field
                            </p>
                          </div>
                          <div className="mb-3 col-xl-6 col-md-6">
                            <label className="form-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="+1 1234567890"
                              name="phonenumber"
                              value={userInfo.phone}
                              onChange={(e) => {
                                userInfo.phone = e.target.value;
                                setUserInfo({ ...userInfo });
                              }}
                            />
                          </div>
                          <div className="mb-3 col-xl-6 col-md-6">
                            <label className="form-label">Country</label>
                            <select
                              className="form-control"
                              name="country"
                              onChange={(e) => {
                                userInfo.country = e.target.value;
                                setUserInfo({ ...userInfo });
                              }}
                            >
                              <option value="">Select</option>
                              {countryList.map((country) => {
                                return (
                                  <option
                                    value={country}
                                    key={country}
                                    selected={
                                      country == userInfo.country ? true : false
                                    }
                                  >
                                    {country}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="mb-3 col-xl-4 col-xs-4">
                            <label className="form-label">
                              Current Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="**********"
                              value={currentPassword}
                              onChange={(e) =>
                                setCurrentPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="mb-3 col-xl-4 col-xs-4">
                            <label className="form-label">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="**********"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="mb-3 col-xl-4 col-xs-4">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="**********"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="mb-3 col-xl-12 col-md-12">
                            <p class="small-text text-danger">
                              * Password must contain at least 8 letters, 1
                              uppercase, 1 special character and 1 number for
                              secure
                            </p>
                          </div>

                          <div className="mb-3 col-12">
                            <button
                              type="button"
                              className="btn btn-success px-4"
                              onClick={saveProfile}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default Settings;
