import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExportToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}

    >
        {children}
        <div className="nav-item">
            <Link to={"#"} className="nav-link  dropdown-toggle" data-toggle="dropdown">
                <i className="mdi mdi-file-export"></i>
                <span>Export CSV</span>
            </Link>
        </div>
    </div>
));



function DataSubmenu() {

    return (
        <>
            <ul className="d-flex">
                <li className="nav-item">
                    <Link to={"./data-tbi"} className="nav-link">
                        <i className="mdi mdi-database-plus"></i>
                        <span>TBI</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"./data-funding-rate"} className="nav-link">
                        <i className="mdi mdi-book"></i>
                        <span>Founding Rate</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"./data-insurance-fund"} className="nav-link">
                        <i className="mdi mdi-book-multiple"></i>
                        <span>Insurance Found</span>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Dropdown>
                        <Dropdown.Toggle as={ExportToggle} />
                        <Dropdown.Menu size="sm" title="">
                        <Link className="dropdown-item py-2" to={"./data-last-price"}>Last Price</Link>
                        <Link className="dropdown-item py-2" to={"./data-index-price"}>Index Price</Link>
                        <Link className="dropdown-item pt-2" to={"./data-mark-price"}>Mark Price</Link>

                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </>
    )
}

export default DataSubmenu;