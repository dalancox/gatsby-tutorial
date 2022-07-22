import React from "react"
import { useState } from "react"

import "./styles/articleFeedback.css"
import thumbsUp from "../images/thumbs-up-solid.svg";
import thumbsDown from "../images/thumbs-down-solid.svg";


const ArticleFeedback = ({ articlePage }) => {

    const [click, setClick] = useState(false);
    const [disable, setDisable] = useState(false);
    const [accept, setAccept] = useState(false);

    const disableFeedback = () => {setDisable(true)}
    const enableAccept = () => {setAccept(true)}

    const handleSubmit = (e) => {
        e.preventDefault();
        enableAccept();
    }

    const handleClick = () => {
        setClick(!click); 
        disableFeedback();
    };

    const handleSuccess = () => {
        disableFeedback();
        enableAccept();
    }

    return (
        <>
        <div style={{borderTop: `1px solid #ddd`}}></div>
        <div style={{
              display: `block`,
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
        }}>
            <div style={{display: `flex`, alignItems: `center`}}>
                <p style={{margin: `0`}} className={disable ? "feedback":"feedback active"}>What this Article Helpful?</p>
                <img src={thumbsUp} onClick={handleSuccess} className={disable ? "feedback":"feedback active"} alt="thumbs up" width="25" height="25"></img>
                <img src={thumbsDown} onClick={handleClick} className={disable ? "feedback":"feedback active"} alt="thumbs down" width="25" height="25"></img>
            </div>
            

            <div className={click ? "form active":"form"}>
                <h2 style={{marginBottom: `0`}}>Thank you for letting us know.</h2>
                <form onSubmit={handleSubmit} className="article-feedback">
                    <input value={articlePage} style={{display: `none`}} /> 
                    <textarea placeholder="How can we make this article more helpful? (Optional)" />
                    <input onClick={handleClick} className="article-submit" type="submit" />
                </form>
            </div>

            <span className={accept ? "thanks active":"thanks"}>Thank you for your feedback.</span>
        </div>
        </>
    )
}


export default ArticleFeedback