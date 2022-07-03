import React,{useState} from 'react'
import './TextArea.css';

function TextArea() {
    const [text, settext] = useState('')

    const handleOnChange = (event) => {
        settext(event.target.value)
    }

    const handleUpperCase = () => {
        settext(text.toUpperCase());
    }

    const handleLowerCase = () => {
        settext(text.toLowerCase());
    }

    const handleCopy = () => {
        let text = document.getElementById('textArea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClear = () => {
        settext('');
    }

    return (
       <>
            <div className='container'>
                <div className='subContainer'>
                    <h2>Enter Your Text Here:</h2>
                    <textarea className="TextArea" rows='15' cols='100' value={text} onChange={handleOnChange} id="textArea"></textarea>
                </div>
                <div className="buttonContainer">
                    <button className="btn" onClick={handleUpperCase} >Convert to Uppercase</button>
                    <button className="btn" onClick={handleLowerCase} >Convert to LowerCase</button>
                    <button className="btn" onClick={handleCopy} >Copy</button>
                    <button className="btn" onClick={handleClear} >Clear</button>
                </div>
                <div className="summary">
                    <h2>Your Summary:</h2>
                    <p>{text.split(' ').length} words and {text.length} characters</p>
                </div>
                <div className="preview">
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default TextArea;
