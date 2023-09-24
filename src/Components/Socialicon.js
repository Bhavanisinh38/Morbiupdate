function Socialicon() {
    
    return (
        <>
        <div className='csl-lable'>Follow Us On</div>
        <div className='social-icons-bx'>
            <a  rel="noreferrer" href="https://www.facebook.com/morbiupdate" className="social fb" target="_blank"><i className="fa fa-facebook"></i></a>
            {/* <a href="/" className="social insta" target="_blank"><i className="fa fa-instagram"></i></a> */}
            <a  rel="noreferrer" href="https://twitter.com/morbiupdate" className="social tw" target="_blank"><i className="fa fa-twitter"></i></a>
            <a  rel="noreferrer" href="https://www.youtube.com/channel/UCngqmj55wuJrWiNg5kyCKGw" className="social ytp" target="_blank"><i className="fa fa-youtube-play"></i></a>
            <a  rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919537676276&text=Hello" className="social wta" target="_blank"><i className="fa fa-whatsapp"></i></a>
        </div>
        </>
    );
}

export default Socialicon;