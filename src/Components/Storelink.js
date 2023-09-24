// Images Common File
import Img from '../Components/Img';

function Storelink() {

    return (
        <>
            <div className='csl-lable'>Download App now</div>
            <div className="csl-store-links">
                <a href="/" className="cs-link"><img src={Img.playstore} alt="PlayStore" className="img-responsive" /></a>
                <a href="/" className="cs-link"><img src={Img.appstore} alt="Appstore" className="img-responsive" /></a>
            </div>
        </>
    );
}

export default Storelink;