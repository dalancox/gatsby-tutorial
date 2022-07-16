import * as React from "react"
import { useState } from "react"

import "./styles/footer.css"
import logo from "../images/Logo.svg"
import appleIOS from "../images/apple-ios.svg"
import googlePlay from "../images/google-play.svg"


const Footer = () => {


    const [aboutClick, setAboutClick] = useState(false);
    const handleAboutClick = () => {setAboutClick(!aboutClick)};

    const [learnClick, setLearnClick] = useState(false);
    const handleLearnClick = () => {setLearnClick(!learnClick)};

    const [helpClick, setHelpClick] = useState(false);
    const handleHelpClick = () => {setHelpClick(!helpClick)};

    return (
        <>
        
        <footer>
        <section>
            <div className="footer-wrapper flex-1 flex flex-row flex-wrap">
                <div className="footer-block flex-1">
                    <img src={logo} alt="pura-logo"></img>
                </div>
                <div className="footer-block flex-1">
                    <h3>About</h3>
                    <div className="flex flex-col nav-links">
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Ambassadors</a>
                        <a href="#">Collaborations</a>
                    </div>
                </div>
                <div className="footer-block flex-1">
                    <h3>Learn</h3>
                    <div className="flex flex-col nav-links">
                        <a href="#">Subscriptions</a>
                        <a href="#">Fragrance 101</a>
                        <a href="#">Pura Promise</a>
                        <a href="#">Rewards</a>
                        <a href="#">Gift Card</a>
                    </div>
                </div>
                <div className="footer-block flex-1">
                    <h3>Help</h3>
                    <div className="flex flex-col nav-links">
                        <a href="#">Find my order</a>
                        <a href="#">FAQ</a>
                        <a href="#">Returns & Exchanges</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <div className="footer-block flex-1">
                    <h3>Join Us</h3>
                    <div className="flex items-start" style={{paddingBottom: `24px`}}>
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                    <div className="app-store flex flex-col">
                        <a href="#"><img src={googlePlay}></img></a>
                        <a href="#"><img src={appleIOS}></img></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="mobile-footer-view">
            <div className="header">
                <div className="nav">
                    <img src={logo} alt="pura-logo"></img>
                    <div className="mobile-social">
                        <a href="/"><i></i></a>
                        <a href="/"><i></i></a>
                        <a href="/"><i></i></a>
                    </div>
                </div>
            </div>
        
            <div className="about" onClick={handleAboutClick}>
                <div className="nav">
                    <h1>About</h1>
                    <i id="caret-about"></i>
                </div>
                <div className={aboutClick ? "nav-options active":"nav-options"}>
                    <a href="/">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Ambassadors</a>
                    <a href="#">Collaborations</a>
                </div>
            </div>
            <div className="learn" onClick={handleLearnClick}>
                <div className="nav">
                    <h1>Learn</h1>
                    <i id="caret-learn"></i>
                </div>
                <div className={learnClick ? "nav-options active":"nav-options"}>
                    <a href="#">Subscriptions</a>
                    <a href="#">Fragrance 101</a>
                    <a href="#">Pura Promise</a>
                    <a href="#">Rewards</a>
                    <a href="#">Gift Card</a>
                </div>
            </div>
            <div className="help" onClick={handleHelpClick}>
                <div className="nav">
                    <h1>Help</h1>
                    <i id="caret-help"></i>
                </div>
                <div className={helpClick ? "nav-options active":"nav-options"}>
                    <a href="#">Find my order</a>
                    <a href="#">FAQ</a>
                    <a href="#">Returns & Exchanges</a>
                    <a href="#">Support</a>
                </div>
            </div>
            <div className="app">
                <div className="nav">
                    <h1>Get the app</h1>
                </div>
                <div className="app-links">
                    <a href="#"><img src={appleIOS}></img></a>
                    <a href="#"><img src={googlePlay}></img></a>
                </div>
            </div>
        </section>

        <section>
            <div className="footer-wrapper">
                <div className="bottom-footer flex flex-wrap">
                    <a href="#">Tech Specs</a>
                    <a href="#">Terms of service</a>
                    <a href="#">Privact policy</a>
                    <a href="#">Returns & Exchanges Policy</a>
                    <a href="#">Your California Privacy Rights</a>
                    <a href="#">Do Not Sell My Info</a>
                </div>
            </div>
        </section>
        </footer>
        
        </>
    )
}


export default Footer