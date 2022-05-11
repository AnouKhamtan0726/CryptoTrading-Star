import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}

    >
        {children}
        <div className="profile_log">
            <div className="user">
                <span className="thumb"><i className="mdi mdi-account"></i></span>
                <span className="arrow"><i className="la la-angle-down"></i></span>
            </div>
        </div>
    </div>
));

const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
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



function Header2() {

    return (
        <>
            <div className="header dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <Link className="navbar-brand" to={"./dashboard"}><img src={require('./../../images/logo.png')} alt="" /></Link>

                                <div className="header-right d-flex my-2 align-items-center">
                                    <div className="language">
                                        <Dropdown>
                                            <Dropdown.Toggle as={LanguageToggle} />
                                            <Dropdown.Menu size="sm" title="">
                                                <Link to={'#'} className="dropdown-item">
                                                    <i className="flag-icon flag-icon-bd"></i> Bengali
                                            </Link>
                                                <Link to={'#'} className="dropdown-item">
                                                    <i className="flag-icon flag-icon-fr"></i> French
                                            </Link>
                                                <Link to={'#'} className="dropdown-item">
                                                    <i className="flag-icon flag-icon-cn"></i> China
                                            </Link>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="dashboard_log">
                                        <Dropdown className="profile_log">
                                            <Dropdown.Toggle as={ProfileToggle} />
                                            <Dropdown.Menu size="sm" title="">
                                                <div className="user-email">
                                                    <div className="user">
                                                        <span className="thumb"><i className="mdi mdi-account"></i></span>
                                                        <div className="user-info">
                                                            <h6>Saiful Islam</h6>
                                                            <span>quixlab.com@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="user-balance">
                                                    <div className="available">
                                                        <p>Available</p>
                                                        <span>0.00 USD</span>
                                                    </div>
                                                    <div className="total">
                                                        <p>Total</p>
                                                        <span>0.00 USD</span>
                                                    </div>
                                                </div>

                                                <Link to={"./account-overview"} className="dropdown-item">
                                                    <i className="mdi mdi-account"></i> Account
                                            </Link>
                                                <Link to={"./data-tbi"} className="dropdown-item">
                                                    <i className="mdi mdi-history"></i> History
                                            </Link>
                                                <Link to={"./settings"} className="dropdown-item">
                                                    <i className="mdi mdi-settings"></i> Setting
                                            </Link>
                                                <Link to={"./lock"} className="dropdown-item">
                                                    <i className="mdi mdi-lock"></i> Lock
                                            </Link>
                                                <Link to={"./signin"} className="dropdown-item logout">
                                                    <i className="mdi mdi-logout"></i> Logout
                                            </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;