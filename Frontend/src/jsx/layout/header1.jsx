import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header1() {

    return (
        <>
            <div className="header">
                <div className="header-body">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/main_assets/main_logo.svg')} alt="" /></Link>

                                    <div className="signin-btn">
                                        <Link className="btn ms-3 text-white register-btn" to={'/signup'}>Join Now</Link>
                                        <Link className="btn ms-3 text-white login-btn" to={'/signin'}>Login</Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;