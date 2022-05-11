import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            <Carousel.Item>
                <p>
                    <img
                        className="d-block"
                        src={require('./../../images/main_assets/down.png')}
                        alt="First slide"
                        width={22}
                    />
                </p>

                <Carousel.Caption>
                    <h3>Free $1,000 Demo Account</h3>
                    <p>Test and sharpen your trading skill using a free demo account with unlimited refill.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <p>
                    <img
                        className="d-block"
                        src={require('./../../images/main_assets/down.png')}
                        alt="Second slide"
                        width={22}
                    />
                </p>

                <Carousel.Caption>
                    <h3>Deposit Starting From $5</h3>
                    <p>Fast and free deposit arrives within minutes. Small withdrawal fee.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <p>
                    <img
                        className="d-block"
                        src={require('./../../images/main_assets/down.png')}
                        alt="Third slide"
                        width={22}
                    />
                </p>

                <Carousel.Caption>
                    <h3>Place Order As Low As $1</h3>
                    <p>It’s easy to get started trading with small amounts of money.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
