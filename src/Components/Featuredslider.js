import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Css Link
import '../css/featuredslider.css';

// Images Common File
import Img from '../Components/Img';

//
import Squarebanner from "../Components/Adsection/Squarebanner"

function Featuredslider() {
    const featuredslider = {
		loop: true,
		autoplayTimeout:5000,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		dots:true,
		nav:true,
		autoplay: true,
		items: 1,
		navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" d="M328 112L184 256l144 144"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" d="M184 112l144 144-144 144"/></svg>'],
		responsiveClass: true,
		responsive: {
		  0: {
			  dots:false,
		  },
		  769: {
			  dots:false,
		  }
		}
      };
    return (
        <>
        <div className='custom-container'>
            <div className='featured-main-bx'>
                <div className='featured-slider owl-hover'>
                    <OwlCarousel {...featuredslider}>
                        <Link to="/detail" className="featured-item">
                            <div className="featured-item-link">
                                <img className="cmn-img-bg" src={Img.demo_img1} alt="" />
                            </div>
                            <div className="featured-heading">
                                <div className='fh-img'></div>
                                <div className='fh-text'>રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                <div className='fh-sub-text'>અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                            </div>
                        </Link>

                        <Link to="/detail" className="featured-item">
                            <div className="featured-item-link">
                                <img className="cmn-img-bg" src={Img.demo_img2} alt="" />
                            </div>
                            <div className="featured-heading">
                                <div className='fh-img'></div>
                                <div className='fh-text'>રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                <div className='fh-sub-text'>અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                            </div>
                        </Link>

                        <Link to="/detail" className="featured-item">
                            <div className="featured-item-link">
                                <img className="cmn-img-bg" src={Img.demo_img3} alt="" />
                            </div>
                            <div className="featured-heading">
                                <div className='fh-img'></div>
                                <div className='fh-text'>રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                <div className='fh-sub-text'>અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                            </div>
                        </Link>
                    </OwlCarousel>
                </div>
                <div className='fslideraside'>
                    <Squarebanner />
                </div>
            </div>
        </div>
        </>
    );
}

export default Featuredslider;