// import React, { useState } from "react"
import '../Assets/css/contactForm.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header"
import Footer from "./footer"


function contact({message,setmessage}) {
  return (
      <>
      <Header />
    <div class="contact-container d-flex  p-4 mt-4 gap-4">
        <div className="p-4">
            <div className="Contact-head ">
                CONTACT- US
            </div>
            <div className="contact-p">
                <p>
                    You can contact us with the following.
                </p>
            </div>

            <div className="Address-container">
                <div className="address-header">
                    Address
                </div>
                <div className="address-content">
                    Old Airport junction market, 2nd floor TEAN Business complex, opposite former NITEL office,JOS   
                </div>
            </div>
{/* <!-- end of address --> */}
    <div className="Address-container p-4">
        <div className="address-header">
            Phone
        </div>
        <div className="address-content">
            +2348164482158
        </div>
    </div>
    {/* <!-- end of phone --> */}
    <div className="Address-container">
        <div className="address-header">
            E-mail
        </div>
        <div className="address-content">
            buynbulk123@gmail.com
        </div>
    </div>

        </div>
        <div>
            <form >
                <div className="Text-area-container">
                   
                    <textarea className="Text-area" value={message} onChange={(e)=>{
               setmessage(e.target.value)
           }}  name="" id="" cols="40" rows="40" placeholder="Type your message"></textarea>
                    <input class="btn" type="submit" value="SEND"></input>
                </div>
                
            </form>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default contact