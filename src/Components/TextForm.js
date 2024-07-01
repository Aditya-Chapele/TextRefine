import React,{useState} from "react";

export default function TextForm(props) {
    const HandleUpperClick = ()=>{
      //  console.log("Upper Case Was CLicked" +text);
        let newtext=text.toUpperCase();
        settext(newtext)
        props.alertShow("Converted to Upper-case.!","success")
    }
    const HandleLowerClick = ()=>{
        //  console.log("Upper Case Was CLicked" +text);
          let newtext=text.toLowerCase();
          settext(newtext)
        props.alertShow("Converted to Lower-case.!","success")

      }
      const HandleExtraSpaces = ()=>{
        //  console.log("Upper Case Was CLicked" +text);
        let newtext=text.split(/[ ]+ /)
        settext(newtext.join(""));
        props.alertShow("Removed extra spaces.!","success")
        
    }
    const HandleCopy = ()=>{
        //  console.log("I copy");
        let text=document.getElementById("MyBox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.alertShow("Copied to clipboard.!","success")

      }

    const HandleOnChange = (event)=>{
        console.log("UOn CHange");
        settext(event.target.value);
    }
    const[text , settext]=useState("");
    // text="this is this" //this is wrong way to change state
    // settext("this is this") //this is correct way to change state

  return (
    <>
    <div class="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="MyBox" class="form-label" >
        </label>
        
        <textarea
          className="form-control" value={text} onChange={HandleOnChange} style={{  backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black',}} id="MyBox"rows="8" >

          </textarea>
          {/* <textarea name="22" id="" style={{backgroundColor:props.mode==='light'?'dark':'light'}} cols="30" rows="10"></textarea> */}
      </div>
      <button className="btn btn-primary mx-2" onClick={HandleUpperClick}>Convert To Upper-Case</button>
      <button className="btn btn-primary mx-2" onClick={HandleLowerClick}>Convert To Lower-Case</button>
      <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={HandleCopy}>Copy</button>

      

    </div>
    <div className="container2 my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview'}</p>

    </div>
    </>
  );
}
