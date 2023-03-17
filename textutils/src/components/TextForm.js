import React , {useState} from 'react'


export default function TextForm(props) {
  const onChange=(event)=>{
    console.log("onChange");
    setText(event.target.value)
  }
  const handleUp =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to uppercase , success')
  }
  const handleLo =()=>{
    let newText = text.toLowerCase();
  setText(newText)
  }
    const [text, setText] = useState("")
    return (
      <>
      <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
      <div className="mb-3">
        <h1 >{props.heading}</h1>
        <textarea className="form-control" id="myBox"  onChange={onChange} style={{backgroundColor : props.mode==='light'? 'white':'grey' ,color: props.mode === 'dark'? 'white':'black'}} rows="8" value={text}></textarea>
      </div>

        <button className="btn btn-dark mx-2" onClick={handleUp}>Convert-to-UpperCase</button>
        <button className="btn btn-dark mx-2" onClick={handleLo}>Convert-to-LowerCase</button>
      
        {/* <button className="btn btn-dark " >Convert-to-LowerCase</button> */}
        </div>  
        <div className="container"style={{color: props.mode=== 'dark'? 'white':'black'}}>
          <h2>Your text Summary</h2>
          <p> {text.split(" ").length} and {text.length} charectors</p>

          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </>
      )
}
 