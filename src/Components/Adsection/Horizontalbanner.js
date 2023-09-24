// Images Common File
import Img from '../Img';

function Horizontalbanner() {

    return (
        <div className='bnr-da-img'>
            <img className="desk-img width-fit-content" src={Img.demo_ad_img4} alt=""/>
            <img className="mobile-img" src={Img.demo_ad_img5} alt=""/>
        </div>
    );
}

export default Horizontalbanner;