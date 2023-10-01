import React from 'react';
import { Link } from 'react-router-dom';

// Images Common File
import Img from '../Components/Img';

// Design File
import Breakingnews from "../Components/Breakingnews";
import Featuredslider from "../Components/Featuredslider";
import Squarebanner from "../Components/Adsection/Squarebanner";
import Horizontalbanner from "../Components/Adsection/Horizontalbanner";
import Horizontalbigbanner from "../Components/Adsection/Horizontalbigbanner";
import Verticalbanner from "../Components/Adsection/Verticalbanner";
import Trendingwidgets from "../Components/Widgets/Trendingwidgets";
import Trendingimgwidgets from "../Components/Widgets/Trendingimgwidgets";

function Newscatbox() {
    return (
        <>
            <Breakingnews />
            <Featuredslider />
            <div className='custom-container'>
                <div className="newscatbox-outer">

                    <Horizontalbanner />

                    <section className='newscatmainbox'>
                        <div className='newssidebx'>
                            <Trendingwidgets />
                            <Horizontalbigbanner />
                        </div>
                        <div className="newscatbox">
                            <h6 className="newscatbox-lable">મોરબી</h6>
                            
                            <div className='cat-main-news'>
                                <Link to="/detail" className="cmn-img">
                                    <img className="cmn-img-bg" src={Img.demo_img1} alt="" />
                                </Link>
                                <Link className="cmn-item-text" to="/detail">
                                    <div className="cmn-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    <div className="cmn-item-text-sub">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર.</div>
                                </Link>
                            </div>
                            <div className="cat-news-list">
                                
                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img1} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img2} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">ગાળા ગામે વારંવાર ખોટી ફરિયાદ નોંધવામાં આવતી હોવાની રાવ સાથે ગ્રામજનોનું કલેકટરને આવેદન</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
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
                    </section>

                    <Horizontalbanner />

                    <section className='newscatmainbox'>
                        <div className='newssidebx'>     
                            <Squarebanner />
                            <Squarebanner />
                        </div>
                        <div className="newscatbox">
                            <h6 className="newscatbox-lable">હળવદ</h6>
                            
                            <div className='cat-main-news'>
                                <Link to="/detail" className="cmn-img">
                                    <img className="cmn-img-bg" src={Img.demo_img1} alt="" />
                                </Link>
                                <Link className="cmn-item-text" to="/detail">
                                    <div className="cmn-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    <div className="cmn-item-text-sub">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર.</div>
                                </Link>
                            </div>
                            <div className="cat-news-list">
                                
                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img1} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img2} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">ગાળા ગામે વારંવાર ખોટી ફરિયાદ નોંધવામાં આવતી હોવાની રાવ સાથે ગ્રામજનોનું કલેકટરને આવેદન</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
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
                    </section>

                    <Horizontalbanner />

                    <section className='newscatmainbox'>
                        <div className='newssidebx'>
                            <Trendingimgwidgets />   
                            <Horizontalbigbanner />
                        </div>
                        <div className="newscatbox">
                            <h6 className="newscatbox-lable">વાંકાનેર</h6>
                            
                            <div className='cat-main-news'>
                                <Link to="/detail" className="cmn-img">
                                    <img className="cmn-img-bg" src={Img.demo_img1} alt="" />
                                </Link>
                                <Link className="cmn-item-text" to="/detail">
                                    <div className="cmn-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    <div className="cmn-item-text-sub">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર.</div>
                                </Link>
                            </div>
                            <div className="cat-news-list">
                                
                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img1} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img2} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">ગાળા ગામે વારંવાર ખોટી ફરિયાદ નોંધવામાં આવતી હોવાની રાવ સાથે ગ્રામજનોનું કલેકટરને આવેદન</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
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
                    </section>

                    <Horizontalbanner />

                    <section className='newscatmainbox'>
                        <div className='newssidebx'>     
                            <Verticalbanner />
                        </div>
                        <div className="newscatbox">
                            <h6 className="newscatbox-lable">માળીયા (મી.)</h6>
                            
                            <div className='cat-main-news'>
                                <Link to="/detail" className="cmn-img">
                                    <img className="cmn-img-bg" src={Img.demo_img1} alt="" />
                                </Link>
                                <Link className="cmn-item-text" to="/detail">
                                    <div className="cmn-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    <div className="cmn-item-text-sub">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર. અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર.</div>
                                </Link>
                            </div>
                            <div className="cat-news-list">
                                
                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img1} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img2} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">ગાળા ગામે વારંવાર ખોટી ફરિયાદ નોંધવામાં આવતી હોવાની રાવ સાથે ગ્રામજનોનું કલેકટરને આવેદન</div>
                                    </Link>
                                </div>

                                <div className="cnl-item">
                                    <Link to="/detail" className="cnl-item-img">
                                        <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                    </Link>
                                    <Link className="cnl-item-text" to="/detail">
                                        <div className="cnl-item-text-hed">કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
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
                    </section>

                    <Horizontalbanner />

                    <section className='newscatmainbox skeletonmainbox'>
                        <div className='newssidebx'>     
                           <div className='loader-bx loader-design'></div>
                        </div>
                        <div className="newscatbox">
                            <div className="newscatbox-lable loader-design ld2"></div>
                            
                            <div className='cat-main-news'>
                                <div className="cmn-img"></div>
                                <div className="cmn-item-text">
                                    <div className="cmn-item-text-hed">
                                        <div className="loader-design ld1"></div>
                                        <div className="loader-design ld1"></div>
                                        <div className="loader-design ld1"></div>
                                    </div>
                                    <div className="cmn-item-text-sub">
                                        <div className="loader-design ld3"></div>
                                        <div className="loader-design ld3"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="cat-news-list">
                                
                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cnl-item">
                                    <div className="cnl-item-img"></div>
                                    <div className="cnl-item-text">
                                        <div className="cnl-item-text-hed">
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                            <div className="loader-design ld3"></div>
                                        </div>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}

export default Newscatbox;