import React from "react"
import { useState } from "react"
import "./styles/articleFeedback.css"


const ArticleFeedback = ({ articlePage }) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {setClick(!click)};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <>
    
        <button onClick={handleClick}>Give Feedback about this article</button>

        <div className={click ? "form active":"form"}>
            <form onSubmit={handleSubmit} className="article-feedback">
                <input value={articlePage} disabled="disabled" /> 

                <textarea placeholder="How can we make this article more helpful? (Optional)"  />
                
                <input className="article-submit" type="submit" />
            </form>
        </div>
        

        </>
    )
}


export default ArticleFeedback