import React, { useState, useEffect } from 'react';

// Images Common File
import Img from './Img';

// Design File
import Bottombanner from "./Adsection/Bottombanner";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>

        {/* Go to top Icon */}
        <div className={`go-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>

        {/* Whatsapp chat Icon */}
        <div className="fix-right-waraper">
          <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919537676276&amp;text=Hello" target="_blank">
            <img className="whatapp-icons" src={Img.whatsappicon} alt="whatsapp Icon" />
          </a>
        </div>
        <Bottombanner />
    </>
  );
}

export default Footer;
