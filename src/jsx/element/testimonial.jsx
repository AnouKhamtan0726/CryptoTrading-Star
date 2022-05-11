import React, { } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Testimonial() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <>
                    <div className="row align-items-center" style={{ "display": "flex" }}>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-img">
                                <img className="img-fluid" src={require('./../../images/testimonial/1.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-review">
                                <img className="img-fluid" src={require('./../../images/brand/2.webp')} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas
                                    dignissimos similique quas molestiae doloribus recusandae voluptatem et
                                                repudiandae veritatis.</p>
                                <div className="customer-info">
                                    <h6>Mr John Doe</h6>
                                    <p>CEO, Example Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-img">
                                <img className="img-fluid" src={require('./../../images/testimonial/2.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="customer-review">
                                <img className="img-fluid" src={require('./../../images/brand/3.webp')} alt="" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas
                                    dignissimos similique quas molestiae doloribus recusandae voluptatem et
                                                repudiandae veritatis.</p>
                                <div className="customer-info">
                                    <h6>Mr Abraham</h6>
                                    <p>CEO, Example Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Slider>
        </>
    )
}

export default Testimonial;