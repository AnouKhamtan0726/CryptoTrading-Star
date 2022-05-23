import React from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../layout/header1';
import Bottom from './../element/bottom';
import Carousel from './../element/carousel';
import CarouselTrade from './../element/carousel-trade';

function Homepage() {

    return (
        <>
            <Header1 />
            <div className="intro" id="home">
                <div className="container">
                    <div className="text-center">
                        <div className="intro-content">
                            <h2>The New Era Of Cryptocurrency Trading</h2>
                            <p>Didi is an innovative trading platform that offers traders an extraordinary experience with cutting-edge features.</p>
                        </div>

                        <div className="intro-btn">
                            <Link to={'/signin'} className="btn btn-primary text-white text-uppercase blink-2">Get start for free</Link>
                        </div>

                        <div className="intro-image">
                            <img src={require('./../../images/main_assets/download.png')} alt="" width={561} height={381} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="sub-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <p>
                                    <img src={require('./../../images/main_assets/down.png')} alt="" className="img-fluid" />
                                </p>
                                <h2 className="sub-info__title">Free $1,000 Demo Account</h2>
                                <h2 className="sub-info__desc">Test and sharpen your trading skill using a free demo account with unlimited refill.</h2>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <p>
                                    <img src={require('./../../images/main_assets/down.png')} alt="" className="img-fluid" />
                                </p>
                                <h2 className="sub-info__title">Deposit Starting From $5</h2>
                                <h2 className="sub-info__desc">Fast and free deposit arrives within minutes. Small withdrawal fee.</h2>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <p>
                                    <img src={require('./../../images/main_assets/down.png')} alt="" className="img-fluid" />
                                </p>
                                <h2 className="sub-info__title">Place Order As Low As $1</h2>
                                <h2 className="sub-info__desc">It’s easy to get started trading with small amounts of money.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
            <div className="updated-body section-padding bg-white" id="updated">
                <div className="container">
                    <div className="updated-title">
                        <h2 className='text-black'>New Platform. New Possibilities.</h2>
                        <p>Didi continues to innovate and update the trading platform by adding new features so that users can trade more successfully and enjoy a better user experience.</p>
                    </div>
                    <div className="updated-content row">
                        <div className="updated-items col-lg-4 col-md-12 col-sm-12">
                            <div className="items-img">
                                <img src={require('./../../images/main_assets/secret.png')} alt="" className="img-fluid pulsate-fwd" width={120} height={120} />
                            </div>
                            <div className="items-title text-black">
                                High Security Platform
                            </div>
                            <div className="items-text">
                                For years, we've developed the top-notch security protocols in order to protect traders and their assets.
                            </div>
                        </div>
                        <div className="updated-items col-lg-4 col-md-12 col-sm-12">
                            <div className="items-img">
                                <img src={require('./../../images/main_assets/sutable.png')} alt="" className="img-fluid pulsate-fwd" width={120} height={120} />
                            </div>
                            <div className="items-title text-black">
                                Suitable For Everyone
                            </div>
                            <div className="items-text">
                                Trading is now easier with a new, all-inclusive platform that is perfect for every trader.
                            </div>
                        </div>
                        <div className="updated-items col-lg-4 col-md-12 col-sm-12">
                            <div className="items-img">
                                <img src={require('./../../images/main_assets/helpful.png')} alt="" className="img-fluid pulsate-fwd" width={120} height={120} />
                            </div>
                            <div className="items-title text-black">
                                Helpful Indicators
                            </div>
                            <div className="items-text">
                                Our trading indicators are easy enough for beginners but powerful enough to satisfy most seasoned professionals.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="getstart section-padding" id="portfolio">
                <div className="container">
                    <div className="section-title getstart-title">
                        <h2 className='text-white'>Start your journey to financial freedom today!</h2>
                        <p>Everyone, regardless of trading skills or background, can develop profitable trading strategy and earn consistent income on Didi.</p>
                    </div>
                    <div className="row content-body1">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="getstart-content">
                                <div className="content-img">
                                    <img src={require('./../../images/main_assets/introduce_step_1.png')} alt="" className="img-fluid" />
                                </div>
                                <h3 className='heartbeat'>Signup</h3>
                                <p>Use your email to create a free account.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="getstart-content">
                                <div className="content-img">
                                    <img src={require('./../../images/main_assets/introduce_step_2.png')} alt="" className="img-fluid" />
                                </div>
                                <h3 className='heartbeat'>Deposit fund</h3>
                                <p>Deposit using cryptocurrency is fast and secured.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="getstart-content">
                                <div className="content-img">
                                    <img src={require('./../../images/main_assets/introduce_step_3.png')} alt="" className="img-fluid" />
                                </div>
                                <h3 className='heartbeat'>Start trading</h3>
                                <p>Predict the asset prices and earn money.</p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-button">
                        <Link to={'/signin'} className="btn portfolio-btn text-white text-uppercase blink-2">Join Now</Link>
                    </div>
                </div>
            </div>

            <div className="trader-tools bg-white" id="tools">
                <div className="container">
                    <div className="row tools-body">
                        <div className="col-xl-6 col-md-6 col-xs-12 title-body">
                            <div className="section-title">
                                <h2>Become A Pro Trader With Our Tools</h2>
                                <p className='text-black'>Our technical trading indicators allow you to develop the most profitable trading strategies with less hard work.</p>
                                <div className="tools-button">
                                    <Link to={'/signin'} className="btn tools-btn text-white text-uppercase blink-2">Get Start For Free</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12 col-xs-12">
                            <div className="img-box">
                                <img src={require('./../../images/main_assets/Mockup-3.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trade-app section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Seamless Deposits & Withdrawals</h2>
                        <p>Use popular cryptocurrencies to deposit and withdraw funds quickly and securely.</p>
                    </div>
                    <div className="trade-images">
                        <div className="img-box pulsate-fwd">
                            <img src={require('./../../images/main_assets/bitcoin.2b7d6815.svg')} alt="" className="img-fluid" />
                        </div>
                        <div className="img-box pulsate-fwd">
                            <img src={require('./../../images/main_assets/tether.6d1c997e.svg')} alt="" className="img-fluid" />
                        </div>
                        <div className="img-box pulsate-fwd">
                            <img src={require('./../../images/main_assets/binance.cf56a2f9.svg')} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <CarouselTrade />
                </div>
            </div>

            <Bottom />

        </>
    )
}

export default Homepage;










