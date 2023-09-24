import React from "react";
import { Link } from 'react-router-dom';

// Images Common File
import Img from '../Img';

function Trendingimgwidgets() {

    return (
        <div className="cat-news-list trendingimg-cnl"> 
            <div className='common-heading'>Trending News</div>           
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
        </div>
    );
}

export default Trendingimgwidgets;