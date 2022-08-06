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
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopyClick}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlermspceClick}>Remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
