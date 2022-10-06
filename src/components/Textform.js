import React, {useState} from 'react'
export default function Textform(props) {
    const handleupclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been change to UpperCase", "success")
    }
    const handledownclick = ()=>{
        let newT = text.toLowerCase();
        setText(newT);
        props.showAlert("Text has been change to LowerCase", "success")
    }
    const cleartext = ()=>{
        let c = '';
        setText(c);
        props.showAlert("Text Area has been cleared", "success")
    }
    const replwrd = ()=>{
        let wrd = prompt("Enter the word to be replaced");
        let repl = new RegExp(wrd,'g');

        let r = prompt("Enter the word to be replaced with: ");
        let newt = text.replace(wrd, r);
        setText(newt);
    }
    const copyText = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!!", "success")
    }
    const removespace = ()=>{
        var newTe = text.split(/[ ]+/);
        setText(newTe.join(" "));
    }
    const handleonchange = (event)=>{
        // console.log("text is changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "Your text"  Wrong way to update text
    // setText("Your text");  //Right way to update text
    // const [t, setT] = useState('');
    // let words = t.trim();
    // if(t.length()===0){
    //     return 0;
    // }
    // else{
    //     t.length() = words.split(" ").length();
    // }
  return ( 
    <div className='container'>
<div className="mb-3">
<h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'blue':'black'}} value={text} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to Lowercase</button>
<button className="btn btn-primary" onClick={replwrd}>Find/Replace</button>
<button className="btn btn-primary mx-2" onClick={cleartext}>Clear Area</button>
<button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removespace}>Remove Extra Spaces</button>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Please enter above to preview"}</p>
</div>
    </div>
  )
}
