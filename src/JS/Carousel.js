import React from "react";
import '../CSS/Carousel.css';
import banner1 from '../Media/banner1.jpg';
import banner3 from '../Media/banner3.jpg';
import bannerE from '../Media/bannerE.jpg';
import bannerMSME from '../Media/bannerMSME.jpg';

function Carousel(){

    return (
        <div class="marquee">
            <ul class="marquee-content">
                <li><img alt="banner" src={banner1} /></li>
                <li><img alt="banner" src={banner3} /></li>
                <li><img alt="banner" src={bannerE} /></li>
                <li><img alt="banner" src={bannerMSME} /></li>

                <li><img alt="banner" src={banner1} /></li>
                <li><img alt="banner" src={banner3} /></li>
                <li><img alt="banner" src={bannerE} /></li>
            </ul>
        </div>
    )
}
export default Carousel;