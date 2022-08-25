import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick =()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick =()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =(event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('');  //state

    return (
        <>        
        <div className="container my-3">
            <h1>{props.heading}</h1>
                <div class="form-group">
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className= "btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read above text</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
