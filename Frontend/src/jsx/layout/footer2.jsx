import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Card } from 'react-bootstrap'

function Footer2() {
  return (
    <>
      <div className="footer dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-12">
              <div className="copyright">
                <p>
                  © Copyright {new Date().getFullYear()} -{" "}
                  <a href="https://didi.biz/">DIDI : CryptoWorld</a>
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="fa fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
