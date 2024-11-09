
import { useState } from 'react'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const TextForm = (props) => {
    const [text, setText] = useState("")

    const clickupper = () => {
        // console.log("clicked");
        let newText = text.toUpperCase()
        setText(newText)
        toast("Converted in Uppercase",{
            position: "top-right",
            autoClose: 1500,
            theme: props.mode === "light"?"light":"dark"
        });

    }
    const clicklower = () => {
        // console.log("clicked");
        let newText = text.toLowerCase()
        setText(newText)
        toast("Converted in Lowercase",{
            position: "top-right",
            autoClose: 1500,
            theme: props.mode === "light"?"light":"dark"
        });

    }
    const clickclear = () => {
        // console.log("clicked");
        let newText = ""
        setText(newText)

    }

    const handlechange = (e) => {
        //   console.log("changed");
        setText(e.target.value)

    }
    return (
        <>

            <div className={`container py-2 text-${props.mode === "dark" ? "white" : "black"}`}>
                <h2>{props.heading}</h2>
                <div className="form-floating py-2">
                    <textarea className={`form-control py- text-${props.mode === "dark" ? "white" : "black"}`} style={{backgroundColor: props.mode === "dark" ? "#323232" : "white" , height: "120px"}} placeholder='Enter Somthing' value={text} onChange={handlechange} id="floatingTextarea2"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clickupper}>Change to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clicklower}>Change to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clickclear}>Clear Text</button>
            </div>
            <div className={`container text-${props.mode === "dark" ? "white" : "black"}`}>
                <h3>Your Text Summery</h3>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter somthing in the textbox above to preview it here"}</p>
            </div>
        </>
    )

}
