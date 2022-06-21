import React from "react";
import Footer2 from "../layout/footer2";
import { Link } from "react-router-dom";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";

function PrizePool() {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  return (
    <>
      <Header2 />
      <Sidebar />
      <div className="prize-content-body">
        <div className="prize-pool-container">
          <div className="prize-intro position-relative">
            <img
              src={require("./../../images/main_assets/prizeman1.png")}
              alt=""
              className="img-fluid prizeman-img position-absolute"
            />
            <h2 className="text-center font-frizon">Streak Challenge</h2>
            <div className="d-flex justify-content-center">
              <div className="prize-amount position-relative ">
                <div className="prize-amount-number text-center font-frizon">
                  $89,464.28
                </div>
                <div className="prize-pool-label position-absolute">
                  <span className="font-frizon">Prize Pool</span>
                </div>
                <img
                  src={require("./../../images/main_assets/prizefire.png")}
                  alt=""
                  className="img-fluid prizefire-img position-absolute"
                />
                <img
                  src={require("./../../images/main_assets/prizebox1.png")}
                  alt=""
                  className="img-fluid prizebox1-img position-absolute"
                />
                <img
                  src={require("./../../images/main_assets/prizebox2.png")}
                  alt=""
                  className="img-fluid prizebox2-img position-absolute"
                />
                <span className="prize-pool-mega-fund">$474.07</span>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link className="" to={"./dashboard"}>
                <div className="btn btn-info mt-5 mb-4 px-4 py-2">
                  Trade & Win Challenge
                </div>
              </Link>
              <span className="go-help mt-4 mb-5">More Information</span>
            </div>
          </div>
          <div className="prize-last position-relative">
            <p className="text-center mb-0">Meet The Latest Winners</p>
            <h2 className="text-center font-frizon">Latest Winners</h2>
            <div className="d-flex justify-content-center">
              <div className="prize-amount position-relative ">
                <div className="prize-amount-number text-center">HAM***</div>
                <p className="last-man-info">Won Mega Prizes {date}</p>
                <div className="prize-pool-label position-absolute">
                  <span>MEGA JACKPOT WINNER</span>
                </div>
                <img
                  src={require("./../../images/main_assets/goldbox1.png")}
                  alt=""
                  className="img-fluid prizebox1-img position-absolute"
                />
                <img
                  src={require("./../../images/main_assets/goldbox2.png")}
                  alt=""
                  className="img-fluid prizebox2-img position-absolute"
                />
                <span className="prize-pool-mega-fund">$420.62</span>
              </div>
            </div>
            <div className="text-center my-5 statistic-table">
              <div className="container">
                <Tabs
                  defaultActiveKey="winning"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="winning" title="Winning History">
                    <TabContainer>
                      <div className="card">
                        <div className="card-body">
                          <div className="transaction-table">
                            <div className="table-responsive">
                              <table className="table table-striped mb-0 table-responsive-sm">
                                <thead>
                                  <tr>
                                    <th>Time</th>
                                    <th>Nick Name</th>
                                    <th>Streak</th>
                                    <th>Prize</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{date}</td>
                                    <td>989***</td>
                                    <td className="win-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$94.51</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td>big***</td>
                                    <td className="lose-streak">
                                      Lose Streak 9x
                                    </td>
                                    <td>$94.51</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td>star***</td>
                                    <td className="win-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$94.51</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td>989***</td>
                                    <td className="win-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$94.51</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td>gold***</td>
                                    <td className="lose-streak">
                                      Lose Streak 9x
                                    </td>
                                    <td>$94.51</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContainer>
                  </Tab>
                  <Tab eventKey="your" title="Your History">
                    <TabContainer>
                      <div className="card">
                        <div className="card-body">
                          <div className="transaction-table">
                            <div className="table-responsive">
                              <table className="table table-striped mb-0 table-responsive-sm">
                                <thead>
                                  <tr>
                                    <th>Time</th>
                                    <th>Streak</th>
                                    <th>Prize</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{date}</td>
                                    <td className="win-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$299.99</td>
                                    <td>Completed</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td className="win-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$299.99</td>
                                    <td>Completed</td>
                                  </tr>
                                  <tr>
                                    <td>{date}</td>
                                    <td className="lose-streak">
                                      Win Streak 9x
                                    </td>
                                    <td>$299.99</td>
                                    <td>Completed</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContainer>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="prize-help" id="#prize-help">
            <img
              src={require("./../../images/main_assets/roket1.png")}
              alt=""
              className="img-fluid prizeroket1-img position-absolute"
            />
            <img
              src={require("./../../images/main_assets/roket2.png")}
              alt=""
              className="img-fluid prizeroket2-img position-absolute"
            />
            <div className="container text-white">
              <p className="help-title mb-1">Guidelines</p>
              <h2 className="help-challenge-title font-frizon">
                How To Join Challenge
              </h2>
              <div className="help-card-box my-5 d-flex">
                <div className="help-card text-center">
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79.343"
                      height="84.019"
                      viewBox="0 0 79.343 84.019"
                      className="swiper-slide-icon"
                    >
                      <g
                        id="Group_21270"
                        data-name="Group 21270"
                        transform="translate(-354.969 -2485.583)"
                      >
                        <g id="页面1" transform="translate(361.869 2487.832)">
                          <g
                            id="_1_未登录"
                            data-name="1_未登录"
                            transform="translate(-5.258 -2.249)"
                          >
                            <g id="编组-7" transform="translate(0 0)">
                              <g id="编组备份" transform="translate(0 0)">
                                <g id="Group-6" transform="translate(0 0)">
                                  <g id="分组" transform="translate(0 0)">
                                    <path
                                      id="合并形状-copy-2"
                                      d="M2.553,30.776a24.9,24.9,0,0,0,6.33.813A25.189,25.189,0,0,0,33.953,6.282V3.848h2.435A38.337,38.337,0,1,1-1.642,42.183,38.688,38.688,0,0,1-.424,32.524l.61-2.369Z"
                                      transform="translate(1.642 1.859)"
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width="3.283"
                                      fill-rule="evenodd"
                                    ></path>
                                    <path
                                      id="_1"
                                      data-name="1"
                                      d="M14.653,0l-4.2,22.419H6.782L10.155,4.471,5.361,8.155l.829-4.5L10.984,0Z"
                                      transform="translate(5.025 0)"
                                      fill="#fff"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="skill" transform="translate(370 2512.416)">
                          <path
                            id="Path_35025"
                            data-name="Path 35025"
                            d="M10.275,5.284c9.074,0,15.306-4.7,19.678-4.7S43.509,3.1,43.509,23.213,31.155,46.279,26.346,46.279C3.825,46.281-5.8,5.284,10.275,5.284Z"
                            transform="translate(0.09)"
                            fill="#efefef"
                          ></path>
                          <g
                            id="Group_21244"
                            data-name="Group 21244"
                            transform="translate(33.355 24.623)"
                          >
                            <path
                              id="Path_35026"
                              data-name="Path 35026"
                              d="M0,0H2.624V1.312H0Z"
                              transform="translate(5.335 1.855) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                            <path
                              id="Path_35027"
                              data-name="Path 35027"
                              d="M0,0H2.624V1.312H0Z"
                              transform="translate(0 7.188) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                            <path
                              id="Path_35028"
                              data-name="Path 35028"
                              d="M0,0H1.312V2.624H0Z"
                              transform="translate(5.333 6.02) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                          </g>
                          <path
                            id="Path_35029"
                            data-name="Path 35029"
                            d="M16.755,8.062A1.316,1.316,0,0,1,18.067,6.75h2.65a2.624,2.624,0,1,0,4.539,0h2.65a1.316,1.316,0,0,1,1.312,1.312v2.65a2.624,2.624,0,1,1,0,4.539V17.9a1.316,1.316,0,0,1-1.312,1.312H18.045A1.312,1.312,0,0,1,16.733,17.9Z"
                            transform="translate(4.595 1.923)"
                            fill="#2fdf84"
                          ></path>
                          <circle
                            id="Ellipse_2092"
                            data-name="Ellipse 2092"
                            cx="4.264"
                            cy="4.264"
                            r="4.264"
                            transform="translate(13.479 16.544)"
                            fill="#f3f3f1"
                          ></circle>
                          <path
                            id="Path_35030"
                            data-name="Path 35030"
                            d="M25.772,32.261V28a5.246,5.246,0,0,0-5.248-5.248H12A5.246,5.246,0,0,0,6.75,28v4.264Z"
                            transform="translate(1.481 6.913)"
                            fill="#f3f3f1"
                          ></path>
                          <path
                            id="Path_35031"
                            data-name="Path 35031"
                            d="M19.685,17.9l.022-9.835a1.3,1.3,0,0,1,.983-1.245c.012-.021.016-.046.028-.067h-2.65a1.316,1.316,0,0,0-1.312,1.312L16.733,17.9a1.311,1.311,0,0,0,1.312,1.316H21A1.312,1.312,0,0,1,19.685,17.9Z"
                            transform="translate(4.595 1.923)"
                            fill="#00b871"
                          ></path>
                          <path
                            id="Path_35032"
                            data-name="Path 35032"
                            d="M13.7,17.014a4.253,4.253,0,0,1,2.788-3.985,4.264,4.264,0,1,0,0,7.971A4.253,4.253,0,0,1,13.7,17.014Z"
                            transform="translate(2.729 3.794)"
                            fill="#d5dbe1"
                          ></path>
                          <path
                            id="Path_35033"
                            data-name="Path 35033"
                            d="M14.949,22.75H12A5.246,5.246,0,0,0,6.75,28v4.264H9.7V28A5.246,5.246,0,0,1,14.949,22.75Z"
                            transform="translate(1.481 6.913)"
                            fill="#d5dbe1"
                          ></path>
                          <path
                            id="Path_35034"
                            data-name="Path 35034"
                            d="M28.135,20.431H21.221V18.463h6.914a.332.332,0,0,0,.328-.328v-2.65a.983.983,0,0,1,1.481-.849,1.64,1.64,0,1,0,0-2.842.983.983,0,0,1-1.481-.849V8.3a.332.332,0,0,0-.328-.328H26.807c.01.109.016.219.016.328a3.608,3.608,0,1,1-7.215,0c0-.109.005-.219.016-.328H18.3a.332.332,0,0,0-.328.328V11.9H16V8.3A2.3,2.3,0,0,1,18.3,6h2.65a.984.984,0,0,1,.849,1.481,1.64,1.64,0,1,0,2.842,0A.984.984,0,0,1,25.485,6h2.65a2.3,2.3,0,0,1,2.3,2.3V9.622a3.608,3.608,0,1,1,0,7.186v1.326A2.3,2.3,0,0,1,28.135,20.431Z"
                            transform="translate(4.366 1.689)"
                          ></path>
                          <path
                            id="Path_35035"
                            data-name="Path 35035"
                            d="M15.248,22.5A5.248,5.248,0,1,1,20.5,17.248,5.253,5.253,0,0,1,15.248,22.5Zm0-8.527a3.28,3.28,0,1,0,3.28,3.28A3.283,3.283,0,0,0,15.248,13.968Z"
                            transform="translate(2.495 3.56)"
                          ></path>
                          <path
                            id="Path_35036"
                            data-name="Path 35036"
                            d="M26.99,32.5H25.022V28.231a4.269,4.269,0,0,0-4.264-4.264H12.231a4.269,4.269,0,0,0-4.264,4.264V32.5H6V28.231A6.239,6.239,0,0,1,12.231,22h8.527a6.239,6.239,0,0,1,6.231,6.231Z"
                            transform="translate(1.248 6.679)"
                          ></path>
                          <path
                            id="Path_35037"
                            data-name="Path 35037"
                            d="M2,28.5H43.98v1.968H2Z"
                            transform="translate(0 8.706)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5>SIGN UP</h5>
                  <span className="help-card-text">Register to didi.biz</span>
                </div>
                <div className="help-card text-center">
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="79.343"
                      height="84.019"
                      viewBox="0 0 79.343 84.019"
                      className="swiper-slide-icon"
                    >
                      <g
                        id="Group_21270"
                        data-name="Group 21270"
                        transform="translate(-354.969 -2485.583)"
                      >
                        <g id="页面1" transform="translate(361.869 2487.832)">
                          <g
                            id="_1_未登录"
                            data-name="1_未登录"
                            transform="translate(-5.258 -2.249)"
                          >
                            <g id="编组-7" transform="translate(0 0)">
                              <g id="编组备份" transform="translate(0 0)">
                                <g id="Group-6" transform="translate(0 0)">
                                  <g id="分组" transform="translate(0 0)">
                                    <path
                                      id="合并形状-copy-2"
                                      d="M2.553,30.776a24.9,24.9,0,0,0,6.33.813A25.189,25.189,0,0,0,33.953,6.282V3.848h2.435A38.337,38.337,0,1,1-1.642,42.183,38.688,38.688,0,0,1-.424,32.524l.61-2.369Z"
                                      transform="translate(1.642 1.859)"
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width="3.283"
                                      fill-rule="evenodd"
                                    ></path>
                                    <path
                                      id="_1"
                                      data-name="1"
                                      d="M14.653,0l-4.2,22.419H6.782L10.155,4.471,5.361,8.155l.829-4.5L10.984,0Z"
                                      transform="translate(5.025 0)"
                                      fill="#fff"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="skill" transform="translate(370 2512.416)">
                          <path
                            id="Path_35025"
                            data-name="Path 35025"
                            d="M10.275,5.284c9.074,0,15.306-4.7,19.678-4.7S43.509,3.1,43.509,23.213,31.155,46.279,26.346,46.279C3.825,46.281-5.8,5.284,10.275,5.284Z"
                            transform="translate(0.09)"
                            fill="#efefef"
                          ></path>
                          <g
                            id="Group_21244"
                            data-name="Group 21244"
                            transform="translate(33.355 24.623)"
                          >
                            <path
                              id="Path_35026"
                              data-name="Path 35026"
                              d="M0,0H2.624V1.312H0Z"
                              transform="translate(5.335 1.855) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                            <path
                              id="Path_35027"
                              data-name="Path 35027"
                              d="M0,0H2.624V1.312H0Z"
                              transform="translate(0 7.188) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                            <path
                              id="Path_35028"
                              data-name="Path 35028"
                              d="M0,0H1.312V2.624H0Z"
                              transform="translate(5.333 6.02) rotate(-45)"
                              fill="#a4afc1"
                            ></path>
                          </g>
                          <path
                            id="Path_35029"
                            data-name="Path 35029"
                            d="M16.755,8.062A1.316,1.316,0,0,1,18.067,6.75h2.65a2.624,2.624,0,1,0,4.539,0h2.65a1.316,1.316,0,0,1,1.312,1.312v2.65a2.624,2.624,0,1,1,0,4.539V17.9a1.316,1.316,0,0,1-1.312,1.312H18.045A1.312,1.312,0,0,1,16.733,17.9Z"
                            transform="translate(4.595 1.923)"
                            fill="#2fdf84"
                          ></path>
                          <circle
                            id="Ellipse_2092"
                            data-name="Ellipse 2092"
                            cx="4.264"
                            cy="4.264"
                            r="4.264"
                            transform="translate(13.479 16.544)"
                            fill="#f3f3f1"
                          ></circle>
                          <path
                            id="Path_35030"
                            data-name="Path 35030"
                            d="M25.772,32.261V28a5.246,5.246,0,0,0-5.248-5.248H12A5.246,5.246,0,0,0,6.75,28v4.264Z"
                            transform="translate(1.481 6.913)"
                            fill="#f3f3f1"
                          ></path>
                          <path
                            id="Path_35031"
                            data-name="Path 35031"
                            d="M19.685,17.9l.022-9.835a1.3,1.3,0,0,1,.983-1.245c.012-.021.016-.046.028-.067h-2.65a1.316,1.316,0,0,0-1.312,1.312L16.733,17.9a1.311,1.311,0,0,0,1.312,1.316H21A1.312,1.312,0,0,1,19.685,17.9Z"
                            transform="translate(4.595 1.923)"
                            fill="#00b871"
                          ></path>
                          <path
                            id="Path_35032"
                            data-name="Path 35032"
                            d="M13.7,17.014a4.253,4.253,0,0,1,2.788-3.985,4.264,4.264,0,1,0,0,7.971A4.253,4.253,0,0,1,13.7,17.014Z"
                            transform="translate(2.729 3.794)"
                            fill="#d5dbe1"
                          ></path>
                          <path
                            id="Path_35033"
                            data-name="Path 35033"
                            d="M14.949,22.75H12A5.246,5.246,0,0,0,6.75,28v4.264H9.7V28A5.246,5.246,0,0,1,14.949,22.75Z"
                            transform="translate(1.481 6.913)"
                            fill="#d5dbe1"
                          ></path>
                          <path
                            id="Path_35034"
                            data-name="Path 35034"
                            d="M28.135,20.431H21.221V18.463h6.914a.332.332,0,0,0,.328-.328v-2.65a.983.983,0,0,1,1.481-.849,1.64,1.64,0,1,0,0-2.842.983.983,0,0,1-1.481-.849V8.3a.332.332,0,0,0-.328-.328H26.807c.01.109.016.219.016.328a3.608,3.608,0,1,1-7.215,0c0-.109.005-.219.016-.328H18.3a.332.332,0,0,0-.328.328V11.9H16V8.3A2.3,2.3,0,0,1,18.3,6h2.65a.984.984,0,0,1,.849,1.481,1.64,1.64,0,1,0,2.842,0A.984.984,0,0,1,25.485,6h2.65a2.3,2.3,0,0,1,2.3,2.3V9.622a3.608,3.608,0,1,1,0,7.186v1.326A2.3,2.3,0,0,1,28.135,20.431Z"
                            transform="translate(4.366 1.689)"
                          ></path>
                          <path
                            id="Path_35035"
                            data-name="Path 35035"
                            d="M15.248,22.5A5.248,5.248,0,1,1,20.5,17.248,5.253,5.253,0,0,1,15.248,22.5Zm0-8.527a3.28,3.28,0,1,0,3.28,3.28A3.283,3.283,0,0,0,15.248,13.968Z"
                            transform="translate(2.495 3.56)"
                          ></path>
                          <path
                            id="Path_35036"
                            data-name="Path 35036"
                            d="M26.99,32.5H25.022V28.231a4.269,4.269,0,0,0-4.264-4.264H12.231a4.269,4.269,0,0,0-4.264,4.264V32.5H6V28.231A6.239,6.239,0,0,1,12.231,22h8.527a6.239,6.239,0,0,1,6.231,6.231Z"
                            transform="translate(1.248 6.679)"
                          ></path>
                          <path
                            id="Path_35037"
                            data-name="Path 35037"
                            d="M2,28.5H43.98v1.968H2Z"
                            transform="translate(0 8.706)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5>TRADE</h5>
                  <span className="help-card-text">
                    Trade and earn more profits
                  </span>
                </div>
                <div className="help-card text-center">
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80.96"
                      height="85.92"
                      viewBox="0 0 80.96 85.92"
                      className="swiper-slide-icon"
                    >
                      <g
                        id="Group_21272"
                        data-name="Group 21272"
                        transform="translate(-760.16 -2483.682)"
                      >
                        <g id="页面1" transform="translate(759.443 2483.682)">
                          <g
                            id="_1_未登录"
                            data-name="1_未登录"
                            transform="translate(2.358 0)"
                          >
                            <g id="编组-7" transform="translate(0)">
                              <g id="编组备份">
                                <g id="Group-6-Copy-4" transform="translate(0)">
                                  <g id="分组-3" transform="translate(0 0)">
                                    <path
                                      id="合并形状"
                                      d="M2.642,31.447a25.424,25.424,0,0,0,6.465.83A25.725,25.725,0,0,0,34.71,6.433V3.946H37.2A39.152,39.152,0,1,1-1.642,43.1,39.51,39.51,0,0,1-.4,33.232l.623-2.419Z"
                                      transform="translate(1.642 2.031)"
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width="3.283"
                                      fill-rule="evenodd"
                                    ></path>
                                    <path
                                      id="_3"
                                      data-name="3"
                                      d="M18.81,5.345A6.25,6.25,0,0,1,15.39,11.2c1.38.791,1.976,1.929,1.976,4.016a7.46,7.46,0,0,1-7.4,7.685c-3.921,0-6.337-2.119-6.337-5.345a6.969,6.969,0,0,1,.094-1.138H7.548a4.394,4.394,0,0,0-.063.7,2.224,2.224,0,0,0,2.51,2.277c1.976,0,3.482-1.9,3.482-4.016a2.256,2.256,0,0,0-2.51-2.467h-.6l.659-3.415h.627a3.581,3.581,0,0,0,3.262-3.7,2.032,2.032,0,0,0-2.1-2.277,3.353,3.353,0,0,0-3.2,2.751H5.7C6.669,1.992,9.43,0,13.351,0A5.185,5.185,0,0,1,18.81,5.345Z"
                                      transform="translate(4.353 0)"
                                      fill="#fff"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="money" transform="translate(778 2511.971)">
                          <g
                            id="Group_21228"
                            data-name="Group 21228"
                            transform="translate(2.369 0.583)"
                          >
                            <path
                              id="Path_35009"
                              data-name="Path 35009"
                              d="M10.028,40.308c8.793,0,14.831,4.555,19.068,4.555s13.135-2.436,13.135-21.927S30.26.583,25.6.583C3.777.583-5.544,40.308,10.028,40.308Z"
                              transform="translate(-2.29 -0.583)"
                              fill="#efefef"
                            ></path>
                          </g>
                          <g
                            id="Group_21229"
                            data-name="Group 21229"
                            transform="translate(7.085 7.469)"
                          >
                            <path
                              id="Path_35010"
                              data-name="Path 35010"
                              d="M7.907,9.814A1.907,1.907,0,1,1,9.814,7.907,1.909,1.909,0,0,1,7.907,9.814Zm0-2.542a.636.636,0,1,0,.636.636A.637.637,0,0,0,7.907,7.271Z"
                              transform="translate(-6 -6)"
                              fill="#a4afc1"
                            ></path>
                          </g>
                          <g
                            id="Group_21230"
                            data-name="Group 21230"
                            transform="translate(15.665 8.422)"
                          >
                            <path
                              id="Path_35011"
                              data-name="Path 35011"
                              d="M25.78,12.47c4.4,2.581,7.945,9.928,7.945,15.254,0,3.814-1.907,7.627-6.356,7.627H19.106c-4.449,0-6.356-3.814-6.356-7.627,0-5.326,3.547-12.674,7.945-15.254L16.538,9.013a1.27,1.27,0,0,1,.788-2.263H29.148a1.27,1.27,0,0,1,.788,2.263Z"
                              transform="translate(-12.75 -6.75)"
                              fill="#f3f3f1"
                            ></path>
                          </g>
                          <g
                            id="Group_21231"
                            data-name="Group 21231"
                            transform="translate(15.665 8.422)"
                          >
                            <path
                              id="Path_35012"
                              data-name="Path 35012"
                              d="M15.61,27.725c0-5.326,3.547-12.674,7.945-15.254L19.4,9.013a1.27,1.27,0,0,1,.788-2.263h-2.86a1.27,1.27,0,0,0-.788,2.263l4.157,3.458C16.3,15.051,12.75,22.4,12.75,27.725c0,3.814,1.907,7.627,6.356,7.627h2.86C17.517,35.352,15.61,31.538,15.61,27.725Z"
                              transform="translate(-12.75 -6.75)"
                              fill="#d5dbe1"
                            ></path>
                          </g>
                          <g
                            id="Group_21232"
                            data-name="Group 21232"
                            transform="translate(18.018 7.469)"
                          >
                            <path
                              id="Path_35013"
                              data-name="Path 35013"
                              d="M25.709,13.419l-1.192-1.49,4.321-3.458a.3.3,0,0,0,.1-.352.291.291,0,0,0-.294-.212H16.824a.291.291,0,0,0-.294.212.3.3,0,0,0,.1.351l4.322,3.459-1.192,1.49L15.441,9.961A2.223,2.223,0,0,1,16.824,6H28.648a2.224,2.224,0,0,1,1.381,3.962Z"
                              transform="translate(-14.601 -6)"
                            ></path>
                          </g>
                          <g
                            id="Group_21233"
                            data-name="Group 21233"
                            transform="translate(18.525 13.189)"
                          >
                            <path
                              id="Path_35014"
                              data-name="Path 35014"
                              d="M15,10.5H30.254v1.907H15Z"
                              transform="translate(-15 -10.5)"
                            ></path>
                          </g>
                          <g
                            id="Group_21234"
                            data-name="Group 21234"
                            transform="translate(19.442 13.319)"
                          >
                            <path
                              id="Path_35015"
                              data-name="Path 35015"
                              d="M26.563,35.26H17.982a7.351,7.351,0,0,1-2.261-.338l.589-1.815a5.393,5.393,0,0,0,1.673.245h8.581c3.988,0,5.4-3.595,5.4-6.674,0-5.258-3.563-12.137-7.475-14.433l.966-1.644c4.482,2.633,8.415,10.144,8.415,16.078C33.872,30.95,31.612,35.26,26.563,35.26Z"
                              transform="translate(-15.721 -10.602)"
                            ></path>
                          </g>
                          <g
                            id="Group_21235"
                            data-name="Group 21235"
                            transform="translate(22.975 22.088)"
                          >
                            <path
                              id="Path_35016"
                              data-name="Path 35016"
                              d="M22.161,26.4H18.5V24.492h3.661a.795.795,0,0,0,0-1.589h-.966a2.7,2.7,0,0,1,0-5.4h3.661v1.907H21.195a.795.795,0,0,0,0,1.589h.966a2.7,2.7,0,0,1,0,5.4Z"
                              transform="translate(-18.5 -17.5)"
                            ></path>
                          </g>
                          <g
                            id="Group_21236"
                            data-name="Group 21236"
                            transform="translate(25.199 20.181)"
                          >
                            <path
                              id="Path_35017"
                              data-name="Path 35017"
                              d="M20.25,16h1.907v3.814H20.25Z"
                              transform="translate(-20.25 -16)"
                            ></path>
                          </g>
                          <g
                            id="Group_21237"
                            data-name="Group 21237"
                            transform="translate(25.199 29.079)"
                          >
                            <path
                              id="Path_35018"
                              data-name="Path 35018"
                              d="M20.25,23h1.907v3.814H20.25Z"
                              transform="translate(-20.25 -23)"
                            ></path>
                          </g>
                          <g
                            id="Group_21238"
                            data-name="Group 21238"
                            transform="translate(2 36.071)"
                          >
                            <path
                              id="Path_35019"
                              data-name="Path 35019"
                              d="M2,28.5H42.678v1.907H2Z"
                              transform="translate(-2 -28.5)"
                            ></path>
                          </g>
                          <g
                            id="Group_21239"
                            data-name="Group 21239"
                            transform="translate(8.038 18.592)"
                          >
                            <path
                              id="Path_35020"
                              data-name="Path 35020"
                              d="M14.695,17.928h3.814V14.75H14.059a7.309,7.309,0,1,0,0,14.619h4.449V26.191H14.695a4.131,4.131,0,1,1,0-8.263Z"
                              transform="translate(-6.75 -14.75)"
                              fill="#2fdf84"
                            ></path>
                          </g>
                          <g
                            id="Group_21240"
                            data-name="Group 21240"
                            transform="translate(8.038 18.592)"
                          >
                            <path
                              id="Path_35021"
                              data-name="Path 35021"
                              d="M9.61,22.059A7.309,7.309,0,0,1,16.92,14.75h-2.86a7.309,7.309,0,1,0,0,14.619h2.86A7.309,7.309,0,0,1,9.61,22.059Z"
                              transform="translate(-6.75 -14.75)"
                              fill="#00b871"
                            ></path>
                          </g>
                          <g
                            id="Group_21241"
                            data-name="Group 21241"
                            transform="translate(7.085 17.639)"
                          >
                            <path
                              id="Path_35022"
                              data-name="Path 35022"
                              d="M19.03,30.525H14.263a8.263,8.263,0,1,1,0-16.525H19.03a.954.954,0,0,1,.953.953v3.178a.954.954,0,0,1-.953.953H14.9a3.178,3.178,0,1,0,0,6.356H19.03a.954.954,0,0,1,.953.953v3.178A.954.954,0,0,1,19.03,30.525ZM14.263,15.907a6.356,6.356,0,0,0,0,12.712h3.814V27.347H14.9a5.085,5.085,0,0,1,0-10.17h3.178V15.907Z"
                              transform="translate(-6 -14)"
                            ></path>
                          </g>
                          <g
                            id="Group_21242"
                            data-name="Group 21242"
                            transform="translate(15.347 18.592)"
                          >
                            <path
                              id="Path_35023"
                              data-name="Path 35023"
                              d="M12.5,14.75h1.907v3.178H12.5Z"
                              transform="translate(-12.5 -14.75)"
                            ></path>
                          </g>
                          <g
                            id="Group_21243"
                            data-name="Group 21243"
                            transform="translate(15.347 30.033)"
                          >
                            <path
                              id="Path_35024"
                              data-name="Path 35024"
                              d="M12.5,23.75h1.907v3.178H12.5Z"
                              transform="translate(-12.5 -23.75)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5>WINNER PRIZE</h5>
                  <span className="help-card-text">
                    The more you trade, the better chance you can win
                  </span>
                </div>
              </div>
              <h2>About the Challenge</h2>
              <p>
                The Streak Challenge (the Challenge) is an incentive program
                which enables traders to reap rewards for both their losses and
                wins. 0.05% of the total trading volume on our platform is sent
                towards the Streak Challenge progressive jackpot every minute.
                Every time someone wins the Challenge, 0,1% out of this juicy
                jackpot will be paid out to them. Learn how to beat the
                Challenge:
              </p>
              <h4>Terms and Conditions:</h4>
              <p>
                Users can only trade Up or trade Down in a session and must
                trade in continuous bet sessions. Each trade in a session must
                be at least $10. The number of winning streak or losing streak
                must be 9. In the case that multiple users win the jackpot in
                the same session, the prize will be divided equally between
                these winning users. Users have to complete KYC on our system to
                be eligible to participate in this challenge. Additionally,
                there will be one special daily Mega prize 5X received amount
                selected randomly from jackpot-winning users on the current day.
                If there is no jackpot-winning user in the current day, there
                will be no Mega prize. Please note that rewards will be
                distributed to the account’s Wallet in about 48 hours.
              </p>
              <p>
                We reserve the right to change or modify any of the terms and
                conditions contained in the Terms and Conditions or any policy
                or guideline of our platform, at any time and at our sole
                discretion. Any changes or modifications will be effective
                immediately upon posting the revisions on our platform or
                notifying you of such changes or modifications via email.
              </p>
              <p>
                The Community Jackpot program and its benefits are offered at
                our sole discretion. We reserve the right to modify or terminate
                the Jackpot prizes and how we evaluate and reward your eligible
                trades.
              </p>
              <p>
                We may, at our sole discretion, modify or terminate your right
                to receive the Jackpot prizes upon discovery of any fraudulent
                and dishonest acts conducted by you in order to earn more
                Jackpot prizes under this promotional offer. You will be
                disqualified from participating further in the Community Jackpot
                program or permanently banned from using our services without
                prior notice from our end for such occurrences. Our decision
                shall be final and we will not enter into any discussion
                regarding this matter.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Chatbot />
    </>
  );
}

export default PrizePool;
