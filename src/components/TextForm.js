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
                <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div class="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                    color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read above text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox above, to preview it here"}</p>
            </div>
        </>
    )
}

//export default TextForm;