import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="language">
      <div className="icon">
        <i className="flag-icon flag-icon-us"></i>
        <span>English</span>
      </div>
    </div>
  </div>
));

function Bottom() {
  return (
    <>
      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="bottom-logo">
                <img
                  className="pb-3"
                  src={require("./../../images/main_assets/main_logo.svg")}
                  alt=""
                />
                <p className="copywriter">
                  {" "}
                  &copy; {new Date().getFullYear()} - Didi All rights reserved.
                </p>
                <p className="text-white">
                  {" "}
                  Email:{" "}
                  <a href="mailto:contact@didi.biz" target="blank">
                    contact@didi.biz
                  </a>{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 footer-content">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link to={"#"}>About</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Career</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Affiliate</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Our Partner</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <Link to={"#"}>Ticket</Link>
                  </li>
                  <li>
                    <Link to={"#"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Languages</h4>
                <div className="row">
                  <div className="language">
                    <Dropdown>
                      <Dropdown.Toggle as={LanguageToggle} />
                      <Dropdown.Menu size="sm" title="">
                        <Link to={"#"} className="dropdown-item">
                          <i className="flag-icon flag-icon-bd"></i> Bengali
                        </Link>
                        <Link to={"#"} className="dropdown-item">
                          <i className="flag-icon flag-icon-fr"></i> French
                        </Link>
                        <Link to={"#"} className="dropdown-item">
                          <i className="flag-icon flag-icon-cn"></i> China
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-sentence">
            <p className="text-left">
              Risk Warning: Trading and investing in digital options involves
              significant level of risk and is not suitable and/or appropriate
              for all clients. Please make sure you carefully consider your
              investment objectives, level of experience and risk appetite
              before buying or selling any digital asset. You should be aware of
              and fully understand all the risks associated with trading and
              investing in digital assets, you should not invest funds you
              cannot afford to lose. You are granted limited non-exclusive
              rights to use the IP contained in this site for personal,
              non-commercial, non-transferable use only in relation to the
              services offered on the site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bottom;
