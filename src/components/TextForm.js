import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handelUpperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handelLowerCase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handelUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handelLowerCase}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary </h1>
            <p> {text.trim().split(' ').length} words and {text.length} characters </p>
            <p> {0.008 * text.trim().split(' ').length} Minutes read</p>
            <h3>Preview</h3>
            <p> {text} </p>
        </div>
        </>
    )
}
