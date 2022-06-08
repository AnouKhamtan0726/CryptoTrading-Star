import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

function Header3() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <Navbar bg="dark" expand="lg">
                  <Link className="navbar-brand" to={"/"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse>
                    <ScrollspyNav
                      scrollTargetIds={["home", "demo", "support"]}
                      offset={100}
                      activeNavclassName="active"
                      scrollDuration="1000"
                      headerBackground="true"
                    >
                      <Nav className="ms-auto">
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#home">
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#demo">
                            Demo
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#support">
                            Support{" "}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </ScrollspyNav>
                  </Navbar.Collapse>

                  <div className="signin-btn">
                    <a
                      href="https://themeforest.net/item/didi-cryptocurrency-exchange-react-app-dashboard/27503351"
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </div>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header3;
