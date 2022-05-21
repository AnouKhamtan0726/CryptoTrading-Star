import React, {  } from 'react';
 // import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';



function Error403() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <Footer2 />
<Chatbot />
        </>
    )
}

export default Error403;