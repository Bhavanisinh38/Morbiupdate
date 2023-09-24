import React from 'react';
import { Link } from 'react-router-dom';

// Images Common File
import Img from '../Components/Img';


// Design File
import Horizontalbanner from "../Components/Adsection/Horizontalbanner";
import Squarebanner from "../Components/Adsection/Squarebanner";
import Verticalbanner from "../Components/Adsection/Verticalbanner";
// import Fbwidgets from "../Components/Widgets/Fbwidgets";
import Socialicon from '../Components/Socialicon';
import Storelink from '../Components/Storelink'


function Category() {
    return (
        <>       
            <div className='breadcrumb-outer'>
                <div className='custom-container'>
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link breadcrumb-back' to="/">હોમ<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active' to="/">વિશેષ સમાચાર</Link>
                    </div>
                </div>
            </div>

            <div className='custom-container'>
                <div className="newscatbox-outer category-outer">

                <section className='newscatmainbox'>

                    <div className='newssidebx'>
                        <Squarebanner />

                        <div className='website-page-links'>
                            <Link to="/" className='wp-link'><ion-icon name="home-outline"></ion-icon>Home</Link>
                            <Link to="/about-us" className='wp-link'><ion-icon name="document-text-outline"></ion-icon>About Us</Link>
                            <Link to="/privacy-policy" className='wp-link'><ion-icon name="document-text-outline"></ion-icon>Privacy Policy</Link>
                            <Link to="/advertisement" className='wp-link'><ion-icon name="bookmarks-outline"></ion-icon>Advertisement</Link>
                            <Link to="/contact-us" className='wp-link'><ion-icon name="call-outline"></ion-icon>Contact Us</Link>
                            {/* <Link to="/contact-us" className='wp-link'><ion-icon name="mail-outline"></ion-icon>Feedback</Link> */}
                        </div>

                        <div className='common-store-links'>
                            <Socialicon/>
                            <Storelink />
                        </div>

                        {/* <Fbwidgets /> */}
                        <Verticalbanner />

                    </div>

                    <div className="newscatbox">
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

                            <div className='bnr-da-cat bdc-odd'>
                                <Horizontalbanner/>
                            </div>

                            <div className="cnl-item">
                                <Link to="/detail" className="cnl-item-img">
                                    <img className="cnl-item-img-bg" src={Img.demo_img6} alt="" />
                                </Link>
                                <Link className="cnl-item-text" to="/detail">
                                    <div className="cnl-item-text-hed">Morbi Bridge Collapse: અચાનક નથી તૂટી પડ્યો બ્રિજ, બે વર્ષ પહેલા લખાઈ ગઈ હતી સ્ક્રિપ્ટ, સામે આવ્યો ચોંકાવનારો પત્ર</div>
                                </Link>
                            </div>

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

                            <div className='bnr-da-cat'>
                                <Horizontalbanner/>
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

                            <div className='bnr-da-cat bdc-odd'>
                                <Horizontalbanner/>
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

                            <div className='bnr-da-cat'>
                                <Horizontalbanner/>
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

                            <div className="cnl-item">
                                <Link to="/detail" className="cnl-item-img">
                                    <img className="cnl-item-img-bg" src={Img.demo_img3} alt="" />
                                </Link>
                                <Link className="cnl-item-text" to="/detail">
                                    <div className="cnl-item-text-hed">કાગળનું બંડલ પકડાવી બેંકોના ગ્રાહકોને છેતરતી “ગડ્ડી ગેંગ”ના મુખ્ય સૂત્રધારને ભરૂચ LCBએ પકડ્યો</div>
                                </Link>
                            </div>

                            <div className='bnr-da-cat bdc-odd'>
                                <Horizontalbanner/>
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

                        </div>
                    </div>
                </section>

                </div>
            </div>
        </>
    );
}

export default Category;