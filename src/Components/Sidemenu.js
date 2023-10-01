import $ from 'jquery';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

// Css Link
import '../css/sidemenu.css'

// Images Common File
import Img from '../Components/Img';

// Design File
import Socialicon from '../Components/Socialicon';
import Storelink from '../Components/Storelink';

function Sidemenu() {

    // Feedback Popup js
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const handleFeedbackClose = () => setShowFeedbackModal(false);
    const handleFeedbackShow = () => setShowFeedbackModal(true);


    useEffect(() => {
        $(".menu-icon-bx").on("click", function () {
            $(".side-menu-bx").addClass("active");
            $("body").addClass("over-body");
        });

        $(".trigger-closed, .overlaydiv, .smb-menu-bx .smb-link").on("click", function () {
            $(".side-menu-bx").removeClass("active");
            $("body").removeClass("over-body");
        });
    });
    return (
        <>
            <aside className="side-menu-bx">
                <div className="smb-logo-bx">
                    <span className="close-icon trigger-closed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                    </span>
                    <a href="/" className="smb-logo-link"><img className="logo-img" src={Img.logo} alt="Morbi Update" /></a>
                </div>
                <div className="smb-menu-bx">
                    <ul>
                        <li><NavLink className="smb-link" exact="true" to ="/"><ion-icon name="home-outline"></ion-icon>Home</NavLink></li>
                        <li><div onClick={handleFeedbackShow} className="smb-link"><ion-icon name="information-circle-outline"></ion-icon>Feedback</div></li>
                        <li><NavLink className="smb-link" exact="true" to="/about-us"><ion-icon name="document-text-outline"></ion-icon>About Us</NavLink></li>
                        <li><NavLink className="smb-link" exact="true" to="/privacy-policy"><ion-icon name="document-text-outline"></ion-icon>Privacy policy</NavLink></li>
                        <li><NavLink className="smb-link" exact="true" to="/advertisement"><ion-icon name="bookmarks-outline"></ion-icon>Advertisement</NavLink></li>
                        <li><NavLink className="smb-link" exact="true" to="/contact-us"><ion-icon name="call-outline"></ion-icon>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="smb-footer">
                    <Socialicon />
                    <Storelink />
                </div>

            </aside>
            <div className="overlaydiv"></div>


            <Modal className="CommonModal fullwhmodal feedbackmodal" centered show={showFeedbackModal} onHide={handleFeedbackClose}>
                <div className="commonmodal-bx">
                    <span className="common-close-icon" onClick={handleFeedbackClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>
                    </span>
                    <div className="commonmodal-lable">Share your Feedback</div>
                    <form className="feedback-form">
                        <div className="custom-form__group">
                            <input type="email" name="email" placeholder=" "/>
                            <label className="group__label">Email Id</label>
                        </div>
                        <div className="custom-form__group">
                            <textarea name="message" rows="3" placeholder=" "></textarea>
                            <label className="group__label">Describe your issue or share your ideas</label>
                        </div>
                        <div className="custom-form__group">
                            <input type="file" id="selectfile" className="d-none" />
                            <label htmlFor="selectfile" className="choosefile_label">
                                <div className="selectfilebtn"><i className="fa fa-cloud-upload" aria-hidden="true"></i>Attach screenshot</div>
                            </label>
                            <div className="selectedfile">
                                <img src={Img.demo_img1} alt="Morbi Update" />
                                <div className="selectedfilbtn-bx">
                                    <label htmlFor="selectfile" className="sfb-icon edit-icon"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</label>
                                    <div className="sfb-icon delete-icon"><i className="fa fa-trash-o" aria-hidden="true"></i>Delete</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn" disabled>Submit <i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default Sidemenu;



