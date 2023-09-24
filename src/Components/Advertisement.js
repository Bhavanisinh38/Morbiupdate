import React from 'react';
import { Link } from 'react-router-dom';

// Css Link
import '../css/suportform.css'

// Design Link
import Storelink from '../Components/Storelink'

function Advertisement() {
    return (
        <>       
            <div className='breadcrumb-outer'>
                <div className='custom-container'>
                    <div className='breadcrumb-bx'>
                        <Link className='breadcrumb-link breadcrumb-back' to="/">હોમ<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        <Link className='breadcrumb-link breadcrumb-active' to="/">Advertisement</Link>
                    </div>
                </div>
            </div>

            <div className='custom-container'>
                <div className='page-heading'>Advertisement Inquiry</div>
                <div className='contact-row'>
                    <div className='cr-item'>
                        <from className="support-form">
                            <div className="custom-form__group">
                                <input type="text" name="name" placeholder=" "/>
                                <label className="group__label">Name</label>
                            </div>
                            <div className="custom-form__group">
                                <input type="email" name="email" placeholder=" "/>
                                <label className="group__label">Email</label>
                            </div>
                            <div className="custom-form__group">
                                <input type="number" placeholder=" "/>
                                <label className="group__label">Mobile No.</label>
                            </div>
                            <div className="custom-form__group">
                                <textarea name="message" rows="3" placeholder=" "></textarea>
                                <label className="group__label">Message</label>
                            </div>

                            <button type="submit" className="support-form-btn" disabled>Submit</button>
                        </from>
                    </div>
                    <div className='cr-item'>
                        <div className="support-social">
                            <a className='ss-item mail-ss' href="mailto:morbiupdate@gmail.com"><span className='ss-icon'><ion-icon name="mail-open-outline"></ion-icon></span>morbiupdate@gmail.com</a>
                            <a className='ss-item call-ss' href="tel:+919537676276"><span className='ss-icon'><ion-icon name="call-outline"></ion-icon></span>+919537676276</a>
                            <a className='ss-item wh-ss'  rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919537676276&text=Hello" target="_blank"><span className='ss-icon'><ion-icon name="logo-whatsapp"></ion-icon></span>+919537676276</a>
                            <a className='ss-item fb-ss'  rel="noreferrer" href="https://www.facebook.com/morbiupdate" target="_blank"><span className='ss-icon'><i className="fa fa-facebook"></i></span>Morbi Update</a>
                            {/* <a className='ss-item insta-ss'  rel="noreferrer" href="http://localhost:3000/" target="_blank"><span className='ss-icon'><i className="fa fa-instagram"></i></span>Morbi Update</a> */}
                            <a className='ss-item tw-ss'  rel="noreferrer" href="https://twitter.com/morbiupdate" target="_blank"><span className='ss-icon'><i className="fa fa-twitter"></i></span>Morbi Update</a>
                            <a className='ss-item yt-ss'  rel="noreferrer" href="https://www.youtube.com/channel/UCngqmj55wuJrWiNg5kyCKGw" target="_blank"><span className='ss-icon'><i className="fa fa-youtube-play"></i></span>Morbi Update</a>
                            <a className='ss-item cm-ss'  rel="noreferrer" href="https://goo.gl/maps/atjE1yVRR5a5PSEM8" target="_blank"><span className='ss-icon'><ion-icon name="location-outline"></ion-icon></span>Shantikunj Media Private Limited First floor, balaji complex, opp. k.k.steel, Near ram chok, Shanala road, Morbi – 363642</a>
                        </div>
                        <div className='common-store-links support-csl'>
                            <Storelink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Advertisement;