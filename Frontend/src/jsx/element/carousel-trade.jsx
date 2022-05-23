import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
            <Carousel.Item>
                <p className='text-center'>
                    <img src={require('./../../images/main_assets/bitcoin.2b7d6815.svg')} alt="" className="img-fluid" />
                </p>
            </Carousel.Item>
            <Carousel.Item>
                <p className='text-center'>
                    <img src={require('./../../images/main_assets/tether.6d1c997e.svg')} alt="" className="img-fluid" />
                </p>
            </Carousel.Item>
            <Carousel.Item>
                <p className='text-center'>
                    <img src={require('./../../images/main_assets/binance.cf56a2f9.svg')} alt="" className="img-fluid" />
                </p>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
