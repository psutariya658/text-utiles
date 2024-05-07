import React, { useState } from 'react'


export default function TextForm(props) {


    const [text, setText] = useState('');// [set the variable that store the vaule, set the variable that that saves the variable that save the value...  we give the value to setText and when we want to use that value we use that variable text variable and setText ni value function maj aave............ useState(// default text for the text variable)]

    const handleOnChange = (event) => {
        setText(event.target.value);// words ne enter ker va mate box ma
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        document.title = "Text Utiles - UpperCase"
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        document.title = "Text Utiles - LowerCase"
    }


    // https://legacy.reactjs.org/docs/hooks-intro.html
    // https://www.w3schools.com/react/react_hooks.asp
    return (
        <>
            <div style={{color: props.mode === "light" ? "black" : "white"}} >
                <h1>{props.heading}.</h1>
                <div className="mb-3">
                    {/*use of the hooks as text */}

                    <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === "light" ? "ghostwhite" : "gray", color: props.mode === "light" ? "black" : "white" }} id="myBox" rows="8" ></textarea>
                </div>

                <div className='center'>
                    <button className="letter" onClick={handleUpClick}>Convert your text in UPPERCASE</button>

                    <button className="letter" onClick={handleloClick}>Convert your text in lowercase</button>
                </div>

            </div>

            <div className="container my-2" style={{color: props.mode === "light" ? "black" : "white"}} >
                <h1>Your text summary</h1>
                <p> ={'>'} Your number of the words is <strong>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</strong> <br></br> ={'>'}  Number of the charachter is <strong>{text.length}</strong></p>
                <p><strong>{0.008 * text.split(' ').length}</strong> Time to take a word(in Minutes)</p>
            </div>
        </>
    )
}

