import $ from 'jquery';
import React, { useEffect } from 'react';

// Images Common File
import Img from '../Img';

function Bottombanner() {

    useEffect(() => {
        const timer = setTimeout(() => {
            $(".sticky-banner-bx").slideDown();
            $(".banner-outer").removeClass("open");
        }, 5000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);

    const handleocToggle = () => {
        if ($(".sticky-banner-bx").is(":hidden")) {
            $(".sticky-banner-bx").slideDown();
            $(".banner-outer").removeClass("open");
        } else if($(".sticky-banner-bx").is(":visible")){
            $(".sticky-banner-bx").slideUp();
            $(".banner-outer").addClass("open");
        }
    };

    
    return (
        <>
        <div className="banner-outer bb-outer open">
            <div className='sbc-btn' onClick={handleocToggle}>
                <i className="fa fa-angle-up"></i>
            </div>
            <div className="sticky-banner-bx" style={{ display: 'none' }}>
                <img className="desk-img" src={Img.demo_ad_img1} alt=""/>
                <img className="mobile-img" src={Img.demo_ad_img5} alt=""/>
            </div>
        </div>
        </>
    );
}

export default Bottombanner;