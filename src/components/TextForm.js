import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange =()=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');  //state

    return (
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <form>
                <div class="form-group">
                    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" class="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </form>
        </div>
    )
}
