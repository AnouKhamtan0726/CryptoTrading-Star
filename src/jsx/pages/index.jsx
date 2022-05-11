import React from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../element/testimonial';
import Footer1 from '../layout/footer1';
import Header1 from '../layout/header1';
import Bottom from './../element/bottom';
import Carousel from './../element/carousel';

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
                            <Link to={'/signin'} className="btn btn-primary text-white text-uppercase">Get start for free</Link>
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
                                <img src={require('./../../images/main_assets/secret.png')} alt="" className="img-fluid" width={120} height={120} />
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
                                <img src={require('./../../images/main_assets/sutable.png')} alt="" className="img-fluid" width={120} height={120} />
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
                                <img src={require('./../../images/main_assets/helpful.png')} alt="" className="img-fluid" width={120} height={120} />
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
                                <h3>Signup</h3>
                                <p>Use your email to create a free account.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="getstart-content">
                                <div className="content-img">
                                    <img src={require('./../../images/main_assets/introduce_step_2.png')} alt="" className="img-fluid" />
                                </div>
                                <h3>Deposit fund</h3>
                                <p>Deposit using cryptocurrency is fast and secured.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="getstart-content">
                                <div className="content-img">
                                    <img src={require('./../../images/main_assets/introduce_step_3.png')} alt="" className="img-fluid" />
                                </div>
                                <h3>Start trading</h3>
                                <p>Predict the asset prices and earn money.</p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-button">
                        <Link to={'/signin'} className="btn portfolio-btn text-white text-uppercase">Join Now</Link>
                    </div>
                </div>
            </div>

            <div className="portfolio section-padding" id="portfolio">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Create your cryptocurrency portfolio today</h2>
                                <p>Tradio has a variety of features that make it the best place to start trading</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6">
                            <div className="portfolio_list">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="d-flex">
                                            <span className="port-icon"> <i className="la la-bar-chart"></i></span>
                                            <div className="flex-grow-1">
                                                <h4>Manage your portfolio</h4>
                                                <p>Buy and sell popular digital currencies, keep track of them in the one
                                                    place.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="d-flex">
                                            <span className="port-icon"> <i className="la la-calendar-check-o"></i></span>
                                            <div className="flex-grow-1">
                                                <h4>Recurring buys</h4>
                                                <p>Invest in cryptocurrency slowly over time by scheduling buys daily,
                                                    weekly,
                                                    or monthly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="d-flex">
                                            <span className="port-icon"> <i className="la la-lock"></i></span>
                                            <div className="flex-grow-1">
                                                <h4>Vault protection</h4>
                                                <p>For added security, store your funds in a vault with time delayed
                                                    withdrawals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="d-flex">
                                            <span className="port-icon"> <i className="la la-mobile"></i></span>
                                            <div className="flex-grow-1">
                                                <h4>Mobile apps</h4>
                                                <p>Stay on top of the markets with the Tradio app for <Link
                                                    to={'#'}>Android</Link>
                                                    or
                                                    <Link to={'#'}>iOS</Link>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="portfolio_img">
                                <img src={require('./../../images/portfolio.png')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trade-app section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Trade. Anywhere</h2>
                                <p> All of our products are ready to go, easy to use and offer great value to any kind of
                                    business
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-mobile"></i></span>
                                    <h4 className="card-title">Mobile</h4>
                                    <p>All the power of Tradio's cryptocurrency exchange, in the palm of your hand. Download
                                        the
                                        Tradio mobile crypto trading app today</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-desktop"></i></span>
                                    <h4 className="card-title">Desktop</h4>
                                    <p>Powerful crypto trading platform for those who mean business. The Tradio crypto
                                        trading
                                        experience, tailor-made for your Windows or MacOS device.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="card trade-app-content">
                                <div className="card-body">
                                    <span><i className="la la-connectdevelop"></i></span>
                                    <h4 className="card-title">API</h4>
                                    <p>The Tradio API is designed to provide an easy and efficient way to integrate your
                                        trading
                                        application into our platform.</p>

                                    <Link to={'#'}> Know More <i className="la la-arrow-right"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-xl-12">
                            <div className="trusted-business py-5 text-center">
                                <h3>Trusted by Our <strong>Partners & Investors</strong></h3>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/1.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/2.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/3.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/4.webp')} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="trusted-logo">
                                        <Link to={'#'}><img className="img-fluid" src={require('./../../images/brand/5.webp')} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial section-padding" id="testimonial">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>What our customer says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="testimonial-content">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="promo section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>The most trusted cryptocurrency platform</h2>
                                <p> Here are a few reasons why you should choose Tradio
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center py-5">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/protect.svg')} alt="" />
                                </div>
                                <h3>Secure storage </h3>
                                <p>We store the vast majority of the digital assets in secure offline storage.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/cyber.svg')} alt="" />
                                </div>
                                <h3>Protected by insurance</h3>
                                <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="promo-content">
                                <div className="promo-content-img">
                                    <img className="img-fluid" src={require('./../../images/svg/finance.svg')} alt="" />
                                </div>
                                <h3>Industry best practices</h3>
                                <p>Tradio supports a variety of the most popular digital currencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding" id="app">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            <div className="appss-content">
                                <h2>The secure app to store crypto yourself</h2>
                                <ul>
                                    <li><i className="la la-check"></i> All your digital assets in one place</li>
                                    <li><i className="la la-check"></i> Use Decentralized Apps</li>
                                    <li><i className="la la-check"></i> Pay friends, not addresses</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={require('./../../images/android.svg')} alt="" />
                                    </Link>
                                    <Link to={'#'} className="btn btn-primary my-1 waves-effect">
                                        <img src={require('./../../images/apple.svg')} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app2.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog section-padding" id="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center">
                                <h2>Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/1.jpg')} alt="" />
                                    <div className="card-body">
                                        {/* <Link href="blog-single.html">
                                            <h4 className="card-title">Why does Litecoin need MimbleWimble?</h4>
                                        </Link> */}
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                            old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/5.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, {new Date().getFullYear()} </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/2.jpg')} alt="" />
                                    <div className="card-body">
                                        {/* <Link href="blog-single.html">
                                            <h4 className="card-title">How to securely store your HD wallet seeds?</h4>
                                        </Link> */}
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                            old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/6.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, {new Date().getFullYear()} </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="blog-grid">
                                <div className="card">
                                    <img className="img-fluid" src={require('./../../images/blog/3.jpg')} alt="" />
                                    <div className="card-body">
                                        {/* <Link href="blog-single.html">
                                            <h4 className="card-title">Exclusive Interview With Xinxi Wang Of Litecoin</h4>
                                        </Link> */}
                                        <p className="card-text">Cras chinwag brown bread Eaton cracking goal so I said a load
                                            of
                                            old tosh baking cakes.!</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="meta-info">
                                            <Link to={'#'} className="author"><img src={require('./../../images/avatar/7.jpg')} alt="" /> Admin</Link>
                                            <Link to={'#'} className="post-date"><i className="la la-calendar"></i> 31 July, {new Date().getFullYear()} </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get-touch section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Get in touch. Stay in touch.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="d-flex">
                                    <span><i className="fa fa-shield"></i></span>
                                    <div className="flex-grow-1">
                                        <h4>24 / 7 Support</h4>
                                        <p>Got a problem? Just get in touch. Our support team is available 24/7.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="d-flex">
                                    <span><i className="fa fa-cubes"></i></span>
                                    <div className="flex-grow-1">
                                        <h4>Tradio Blog</h4>
                                        <p>News and updates from the world’s leading cryptocurrency exchange.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="d-flex">
                                    <span><i className="fa fa-certificate"></i></span>
                                    <div className="flex-grow-1">
                                        <h4>Careers</h4>
                                        <p>Help build the future of technology. Start your new career at Tradio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-touch-content">
                                <div className="d-flex">
                                    <span><i className="fa fa-life-ring"></i></span>
                                    <div className="flex-grow-1">
                                        <h4>Community</h4>
                                        <p>Tradio is global. Join the discussion in our worldwide communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

export default Homepage;










