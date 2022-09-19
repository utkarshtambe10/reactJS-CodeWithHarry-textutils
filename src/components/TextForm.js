import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');  //state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "Success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "Success");
    }

    const handleClear = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Text is cleared!", "Danger");
    }
    
    //credits: A
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is copies to clipboard!", "Caution");
    }

    //credits: coding wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed!", "Success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3" style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div class="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', 
                    color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=> {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} minutes to read above text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview for now"}</p>
            </div>
        </>
    )
}

//export default TextForm;