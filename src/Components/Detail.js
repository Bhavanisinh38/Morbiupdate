import React from "react";
import { Link } from 'react-router-dom';


// Css Link
import '../css/detail.css' 

// Images Common File
import Img from '../Components/Img';

// Design File
import Horizontalbanner from "../Components/Adsection/Horizontalbanner";
import Squarebanner from "../Components/Adsection/Squarebanner";
import Verticalbanner from "../Components/Adsection/Verticalbanner";
import Horizontalbigbanner from "../Components/Adsection/Horizontalbigbanner";
import Trendingwidgets from "../Components/Widgets/Trendingwidgets";
import Socialicon from "../Components/Socialicon";
import Storelink from '../Components/Storelink'

function Detail() {

    return (
        <>
        
        <div className='breadcrumb-outer'>
            <div className='custom-container'>   
                <div className='breadcrumb-bx'>
                    <Link className='breadcrumb-link breadcrumb-back' to="/">હોમ<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                    <Link className='breadcrumb-link' to="/category">વિશેષ સમાચાર<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                    <Link className='breadcrumb-link breadcrumb-active'>એસટી મુસાફરી મોંઘી થશે : ટૂંકા રૂટના ભાડામાં રૂ.6 સુધીનો ભાવ વધારો કરાશે</Link>
                </div>
            </div>
        </div>
        
        <div className="newscatbox-outer">
            <div className='custom-container'>
                
                <div className='bnr-da-cat'>
                    <Horizontalbanner />
                </div>

                <div className='newscatmainbox newsdetailbox'>
                    <div className="detail-news-outer">

                        <div className="detail-news-heading">એસટી મુસાફરી મોંઘી થશે : ટૂંકા રૂટના ભાડામાં રૂ.6 સુધીનો ભાવ વધારો કરાશે</div>

                        <div className="meta-social-box">
                            <div className="meta-author">
                                <img className="meta-author-img" src={Img.metaimg} alt="author name" />
                                <div className="meta-author-data">
                                    <div className="meta-data-name">Morbi Update</div>
                                    <div className="meta-data-time">1 years ago</div>
                                </div>
                            </div>

                            <div className="social_share-bx">
                                <span className="ssb-lable">Share :</span>
                                <Link to="/detail" className="ssb-icon fb"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/detail" className="ssb-icon tw"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/detail" className="ssb-icon wa"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
                                <Link to="/detail" className="ssb-icon li"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                <Link to="/" className="ssb-icon cm"><i className="fa fa-link" aria-hidden="true"></i></Link>
                            </div>
                        </div>

                        <div className='detail-news-ivio-bx'>
                            {/* <img src={Img.demo_img1} alt="detail news" /> */}
                            <video controls poster={Img.demo_videoposter1}>
                                <source src={Img.demo_video1} type="video/webm"/>
                            </video>
                            {/* <audio src="" controls/> */}
                        </div>
                        <div className='ivio-tag'>એસટી મુસાફરી મોંઘી થશે : ટૂંકા રૂટના ભાડામાં રૂ.6 સુધીનો ભાવ વધારો કરાશે</div>


                        <div className='detail-news-text-bx'>
                            <div>લોકલમાં 16 પૈસા, એક્સપ્રેસમાં 17 પૈસા અને નોન-એસી સ્લીપરમાં 15 પૈસા પ્રતિ કિલોમીટર ભાવ વધશે.</div>

                            <div>મોરબી : એસટી વિભાગ દ્વારા રાજ્યમાં બસના ભાડામાં વધારો કરવાનો નિર્ણય જાહેર કરાયો છે. જેમાં ટૂંકા રૂટની મુસાફરીમાં રૂ. 6 સુધીનો ભાવ વધારો લાગુ થવાનો છે. જો કે એસટી વિભાગ દ્વારા એવો પણ દાવો કરવામાં આવ્યો છે કે 2014 બાદ પહેલીવાર ભાડામાં વધારો થઈ રહ્યો છે.</div>

                            <div>જીએસઆરટીસી દ્વારા જણાવાયું છે કે અન્ય રાજ્યોની સરખામણીમાં આપણું ભાડું ખૂબ જ ઓછું વધ્યું છે. પ્રતિ કિલોમીટર 20થી 25 ટકા જેટલો વધારો કરવામાં આવ્યો છે. ગુજરાત એસટીનું મિનિમમ ભાડું હાલમાં સાત રૂપિયા છે. જે હવે ભાવવધારો થતાં 9થી 9.50 રૂપિયા જેટલું થશે. એસી સ્લીપર અને સીટર બસોમાં પણ આજ ભાડાના દર યથાવત રહેશે. લોકલમાં 16 પૈસા, એક્સપ્રેસમાં 17 પૈસા અને નોન-એસી સ્લીપરમાં 15 પૈસા પ્રતિ કિલોમીટર ભાવ વધારો થશે.</div>
                        </div>

                        <div className='detail-news-tags'>
                            <span>મોરબી</span>
                            <span>મુસાફરી</span>
                            <span>જીએસઆરટીસી</span>
                            <span>ભાડા</span>
                            <span>ભાવ</span>
                        </div>

                        <div className='bnr-da-cat'>
                            <Horizontalbigbanner />
                        </div>

                        
                        <div className='detail-news-related'>
                            <div className='common-heading'>Follow Us On</div>
                            <div className="social-fuo">
                                <Socialicon/>
                            </div>
                        </div>

                        <div className='detail-news-related'>
                            <div className='common-heading'>Related News</div>
                            <div className="cat-news-list">

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img1} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img2} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img4} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">રાજ્યસભાના ઉમેદવાર તરીકે બાબુ દેસાઈનું નામ જાહેર થતાં હળવદ રબારી સમાજે કરી ઉજવણી</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img5} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">#Morbi – લક્ષ્મીનારાયણ સોસાયટીમાં જમીન પચાવવાનું ષડયંત્ર ! તંત્ર ભુમાફિયા સામે દાખલો બેસાડે તેવી કડક કાર્યવાહી કરવા રહીશોની માંગ</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img6} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='bnr-da-cat bdc-odd'>
                            <Horizontalbanner/>
                        </div>

            
                    </div>


                    <div className='newssidebx'>
                        <Squarebanner />
                        <Trendingwidgets />
                        <div className='common-store-links'>
                            <Socialicon/>
                            <Storelink />
                        </div>
                        <Verticalbanner />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Detail;