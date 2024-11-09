// import React from 'react'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Contact = (props) => {

  const subClick =()=>{
    toast("Submitted",{
      position: "top-right",
      autoClose: 1500,
      theme: props.mode === "light"?"light":"dark"
  });
  }

  return (
    <>
      <div className={`container text-${props.mode === "light" ? "black" : "white"}`}>
        <div className={`text-${props.mode === "light" ? "black" : "white"}`}>
          <h2>Contact Us</h2>
        </div>


        <form>
          <div className="form-group my-1">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group my-1">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group my-1">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button onClick={subClick} className="btn btn-primary my-1">Submit</button>
        </form>
      </div>
    </>
  )
}
