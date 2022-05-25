import React from 'react';
import DataSubmenu from '../layout/data-submenu';
import Footer2 from '../layout/footer2';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from "../layout/sidebar";
import Chatbot from "../layout/chatbot";



function FundingRate() {

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
                                    <DataSubmenu />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card p-5">
                                <div className="text-center mb-5">
                                    <img src={require('./../../images/main_assets/trustuser.svg')} width={350} alt="" className="img-fluid" />
                                    <p className='mt-3'>Lock and hold your ALI as a long-term investment and become a Trusted user.</p>
                                </div>
                                <div className="pricebar mb-5">
                                    <img src={require('./../../images/main_assets/trust1.png')} alt="" className="img-fluid trust-img1" />
                                    <img src={require('./../../images/main_assets/trust2.png')} alt="" className="img-fluid trust-img2" />
                                    <img src={require('./../../images/main_assets/trust3.png')} alt="" className="img-fluid trust-img3" />
                                    <img src={require('./../../images/main_assets/trust4.png')} alt="" className="img-fluid trust-img4" />
                                    <img src={require('./../../images/main_assets/trust5.png')} alt="" className="img-fluid trust-img5" />
                                    <span className='trust-text1'>100 ALI</span>
                                    <span className='trust-text2'>500 ALI</span>
                                    <span className='trust-text3'>1,000 ALI</span>
                                    <span className='trust-text4'>2,000 ALI</span>
                                    <span className='trust-text5'>5,000 ALI</span>
                                </div>
                                <div className="mt-5 result-box d-flex justify-content-between align-items-center">
                                    <div className="box-content1 d-flex align-items-center">
                                        <img src={require('./../../images/main_assets/ali.png')} alt="" className="img-fluid" />
                                        <h4 className='mb-0'>Lock ALI</h4>
                                    </div>
                                    <div className="box-content2">
                                        <span>APY</span>
                                        <h4>45.56%</h4>
                                    </div>
                                    <div className="box-content2">
                                        <span>ALI Locked</span>
                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>0</h4>
                                            <span>~$0</span>
                                        </div>
                                    </div>
                                    <div className="box-content2">
                                        <span>Total ALI Earned</span>
                                        <div className="d-flex align-items-center">
                                            <h4 className='mb-0'>0</h4>
                                            <span>~$0</span>
                                        </div>
                                    </div>
                                    <button className='btn btn-success text-white'>Lock ALI</button>
                                </div>
                                <p className='text-right mt-3'>*Minimum lock in the first time is 100 ALI, and no limit after that</p>
                                <div className='middle-line mt-5 mb-5'></div>
                                <div className="card-description">
                                    <h3 className='mb-4'>Terms and Conditions</h3>
                                    <p>1. You can become a Trusted User by locking your ALI tokens on our platform. After successfully locking your ALI, you will be immediately granted a “Trust Level” badge, which can be found in your Profile.</p>
                                    <p>2. There are 5 types of "Trust Level" badges, corresponding to 5 levels of Trusted User. The level is determined based on the number of ALI tokens locked by users: Level 1 – 100 ALI locked; Level 2 – 500 ALI locked; Level 3 – 1000 ALI locked; Level 4 – 2000 ALI locked; Level 5 – 5000 ALI locked.</p>
                                    <p>3. The ALI tokens locked by Trusted Users will be staked on AlitaSwap to earn daily rewards. The APY earned on locking up your ALI under the “Trusted User” program (the “Program”) equals that of staking your ALI via the “Stake ALI” feature.</p>
                                    <p>4. The rewards gained under the Program will be automatically compounded (reinvested) into the principal on a daily basis.</p>
                                    <p>5. Uplines will receive commissions from their downlines’ earnings on locking ALI. The commission rates the uplines are entitled to under the Program are similar to those applied to the staking program.</p>
                                    <p>6. If you no longer wish to continue participating in the Program, you may unlock your ALI tokens at any time by clicking on the “Unlock” button.</p>
                                    <p>7. By voluntarily giving up on your "Trusted User" status, you will no longer receive ALI rewards associated with remaining in the Program. Your "Trust Level" badge in your Profile will be revoked and your initial funds and interest will be credited back to your Main wallet after a 7-day waiting period.</p>
                                    <p>8. It is important to note that the 7-day waiting period does not qualify as a locking period. Therefore, no rewards for locking ALI will be given during this time frame.</p>
                                    <p>9. We reserve the right to change or modify any of the terms and conditions contained in the Terms and Conditions or any policy or guideline of our platform, at any time and at our sole discretion. Any changes or modifications will be effective immediately upon posting of the revisions on our platform or notifying you of such changes or modifications via email.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
            <Chatbot />
        </>
    )
}

export default FundingRate;