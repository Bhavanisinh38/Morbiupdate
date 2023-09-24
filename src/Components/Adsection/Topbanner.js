import $ from 'jquery';

// Images Common File
import Img from '../Img';

function Topbanner() {

    setTimeout(function(){
        $(".top-banner-bx").slideDown("slow");
        $(".tbo-outer").removeClass("up-btn");
    },5000);
    
    $('body').on('click', '.tbc-btn', function() {
        $(".top-banner-bx").slideUp("slow");
        $(".tbo-outer").addClass("up-btn");
    });

    return (
        <>
        <div className="banner-outer tbo-outer">
            <div className="top-banner-bx">
                <img className="desk-img" src={Img.demo_ad_img1} alt=""/>
                <img className="mobile-img" src={Img.demo_ad_img5} alt=""/>
                <div className='banner-close-btn tbc-btn'>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        </>
    );
}

export default Topbanner;