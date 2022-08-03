import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success")
  }
  const handleclClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared!","success")
  }
  const handlecopyClick = ()=>{
    var text= document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!","success")
  }
  const handlermspceClick = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space removed!","success")
  }
  const handleOnChange = (event)=>{
    // console.log("On Change")
    setText(event.target.value)
  }
  
  const [text, setText] = useState('');  
//   text = "new text"; wrong way
//   setText("new text"); correct way
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handlermspceClick}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
