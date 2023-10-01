import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

// Css Link
import '../css/header.css'

// Images Common File
import Img from '../Components/Img';

function Header() {

  // Mote category js
  const [isActive, setIsActive] = useState(false);
  const handlemenuclick = (event) => {
    event.target.classList.toggle('active');
    setIsActive(!isActive);
  };

  // Serach Popup js
  const [showSerachModal, setShowSerachModal] = useState(false);
  const handleSerachClose = () => setShowSerachModal(false);
  const handleSerachShow = () => setShowSerachModal(true);


  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle back button click
  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  // Conditionally render back button if not on home page
  const renderHome = location.pathname === '/';
  const renderBack = location.pathname !== '/';

  return (
    <>
    <header className="custom-header">
      <div className="header-top">
          
          <Link className="cht-logo" to="/">
            <div className="icon-r-bx">
                <div className="icon-r-ani">
                <div className="icons-f" />
                <div className="icons-b" />
                </div>
            </div>
            <img src={Img.logo} alt="Morbi Update" />
          </Link>

          <div className="cht-left">
            <div className="menu-icon-bx">
                <span></span>
                <span></span>
                <span></span>
            </div>

            
            {
                renderHome && 
                <div className="menu-icon-bx mib-mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            }

            {
                renderBack && <div className="back-link-tag" onClick={goBack}>
                    <i className="fa fa-angle-left"></i> Back
                </div>
            }    

          </div>

          <div className="cht-right">
            <a className="app-links" href="/" target="_blank">
              <img src={Img.playstoreicon} alt="" />
            </a>
            <a className="app-links" href="/" target="_blank">
              <img className="mr-3px" src={Img.appstoreicon} alt="" />
            </a>
            <a  rel="noreferrer" href="https://www.facebook.com/morbiupdate" className="social fb" target="_blank"><i className="fa fa-facebook"></i></a>
            {/* <a href="/" className="social insta" target="_blank"><i className="fa fa-instagram"></i></a> */}
            <a  rel="noreferrer" href="https://twitter.com/morbiupdate" className="social tw" target="_blank"><i className="fa fa-twitter"></i></a>
            <a  rel="noreferrer" href="https://www.youtube.com/channel/UCngqmj55wuJrWiNg5kyCKGw" className="social ytp" target="_blank"><i className="fa fa-youtube-play"></i></a>
            <a  rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919537676276&text=Hello" className="social wta" target="_blank"><i className="fa fa-whatsapp"></i></a>
            <div className="serach-icon" onClick={handleSerachShow}>
                <i className="fa fa-search" />
            </div>
          </div>

      </div>
      <div className="news-cat-links">
          <Link className="ncr-link" to="/category"><span>મોરબી</span></Link>
          <Link className="ncr-link" to="/category"><span>હળવદ</span></Link>
          <Link className="ncr-link" to="/category"><span>વાંકાનેર</span></Link>
          <Link className="ncr-link" to="/category"><span>ટંકારા</span></Link>
          <Link className="ncr-link" to="/category"><span>માળીયા  (મી.)</span></Link>
          <Link className="ncr-link" to="/category"><span>રાજકારણ</span></Link>
          <Link className="ncr-link" to="/category"><span>ઉદ્યોગ</span></Link>
          <Link className="ncr-link" to="/category"><span>શિક્ષણ</span></Link>
          <Link className="ncr-link" to="/category"><span>અવસાનનોંધ / બેસણું</span></Link>
          <div onClick={handlemenuclick} className="topnavmore">
              •••
          </div>
      </div>
      <div className={`news-sub-cat-link ${isActive ? 'active' : ''}`}>
        <Link className="ncr-link" to="/category"><span>મોરબી</span></Link>
        <Link className="ncr-link" to="/category"><span>હળવદ</span></Link>
        <Link className="ncr-link" to="/category"><span>વાંકાનેર</span></Link>
        <Link className="ncr-link" to="/category"><span>ટંકારા</span></Link>
        <Link className="ncr-link" to="/category"><span>માળીયા  (મી.)</span></Link>
        <Link className="ncr-link" to="/category"><span>રાજકારણ</span></Link>
        <Link className="ncr-link" to="/category"><span>ઉદ્યોગ</span></Link>
        <Link className="ncr-link" to="/category"><span>શિક્ષણ</span></Link>
        <Link className="ncr-link" to="/category"><span>અવસાનનોંધ / બેસણું</span></Link>
        <Link className="ncr-link" to="/category"><span>વિશેષ સમાચાર</span></Link>
        <Link className="ncr-link" to="/category"><span>પ્રમોશનલ આર્ટિકલ</span></Link>
        <Link className="ncr-link" to="/category"><span>એપોઈન્ટમેન્ટ એડ</span></Link>
      </div>
      <div className="news-cat-responsive">
        <Link className="ncr-link" to="/category"><span>મોરબી</span></Link>
        <Link className="ncr-link" to="/category"><span>હળવદ</span></Link>
        <Link className="ncr-link" to="/category"><span>વાંકાનેર</span></Link>
        <Link className="ncr-link" to="/category"><span>ટંકારા</span></Link>
        <Link className="ncr-link" to="/category"><span>માળીયા  (મી.)</span></Link>
        <Link className="ncr-link" to="/category"><span>રાજકારણ</span></Link>
        <Link className="ncr-link" to="/category"><span>ઉદ્યોગ</span></Link>
        <Link className="ncr-link" to="/category"><span>શિક્ષણ</span></Link>
        <Link className="ncr-link" to="/category"><span>અવસાનનોંધ / બેસણું</span></Link>
        <Link className="ncr-link" to="/category"><span>વિશેષ સમાચાર</span></Link>
        <Link className="ncr-link" to="/category"><span>પ્રમોશનલ આર્ટિકલ</span></Link>
        <Link className="ncr-link" to="/category"><span>એપોઈન્ટમેન્ટ એડ</span></Link>
      </div>
    </header>


    <Modal className="SearchModal" centered show={showSerachModal} onHide={handleSerachClose}>
        <div className="search-bx">
            <div className="searchbar">
                <div className="searchbar-icon si-back" onClick={handleSerachClose}><img src={Img.arrowleftback} alt="arrow left back Icon"/></div>
                <input className="search-input" type="text" placeholder="Search for all your needs" />
                <div className="searchbar-icon si-mike listening"><img src={Img.mike} alt="Mike Icon"/></div>
                <Link to="/search" onClick={handleSerachClose}  className="searchbar-icon si-search"><i className="fa fa-search"></i></Link>
            </div>
            <div className="searchsuggestions">
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
                <Link className="ss-result-link" onClick={handleSerachClose} to="/detail">
                    <span className="trending-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" width="100" height="100">
                            <path d="m80.1,405.6c3.5,2.4 17,9.1 28.4-5.3l77.2-112.8 81.7,78.8c4.3,4.1 10.2,6.3 16.2,5.6 5.9-0.6 11.3-3.7 14.8-8.6l135.5-194.3 4.9,65c1.2,16.5 16.7,19.2 21.9,18.8 11.2-0.9 19.7-10.6 18.8-21.9l-8.6-114.3c-0.8-11.2-10.6-19.7-21.9-18.8l-114.3,8.6c-11.2,0.8-19.7,10.6-18.8,21.9 0.8,11.2 10.5,19.6 21.9,18.8l65-4.9-124.2,178-81.9-79c-4.3-4.2-10.3-6.3-16.2-5.6-6,0.6-11.4,3.8-14.8,8.8l-90.9,132.8c-6.4,9.3-4,22 5.3,28.4z"></path>
                        </svg>
                    </span>
                    Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર
                </Link>
            </div>
        </div>
    </Modal>

    {/* <div className="block-div">
      <img src={Img.preloader} alt="logo img" />
      <div>Open this URL in phone as desktop view is working</div>
    </div> */}
    </>
  );
}

export default Header;
