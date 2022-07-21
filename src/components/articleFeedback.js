import React from "react"
import { useState } from "react"
import "./styles/articleFeedback.css"


const ArticleFeedback = ({ articlePage }) => {

    const [click, setClick] = useState(false);
    const [disable, setDisable] = useState(false);
    const [accept, setAccept] = useState(false);

    const handleClick = () => {
        setClick(!click); 
        disableFeedback();
    };

    const disableFeedback = () => {setDisable(true)}
    const enableAccept = () => {setAccept(true)}

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <button onClick={handleClick} className={disable ? "feedback":"feedback active"}>GIVE FEEDBACK ABOUT THIS ARTICLE</button>

            <div className={click ? "form active":"form"}>
                <h2>Thank you for the feedback.</h2>
                <form onSubmit={handleSubmit} className="article-feedback">
                    <input value={articlePage} style={{display: `none`}} /> 
                    <textarea placeholder="How can we make this article more helpful? (Optional)" />
                    <input onClick={handleClick} className="article-submit" type="submit" />
                </form>
            </div>

            <span className={accept ? "thanks active":"thanks"}>Your feedback will be reviewed!</span>
        </div>
        </>
    )
}


export default ArticleFeedback