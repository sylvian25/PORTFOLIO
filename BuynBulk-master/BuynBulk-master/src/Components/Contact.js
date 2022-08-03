import React, { useState } from "react"
import '../Assets/css/contactForm.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header"
import Footer from "./footer"


function contact({message,setmessage}) {
  return (
      <>
      <Header />
      <div>
          <div class="contact-container d-flex  p-2 mt-4 gap-1">
    <div className="p-4" style={{textAlign:'center',width: '611px'}}>
            <div className="address-header">
                CONTACT- US
            </div>
            <div className="contact-p">
                <p>
                    You can contact us with the following.
                </p>
            </div>

            <div className="Address-container p-2">
                <div className="address-header">
                    Address
                </div>
                <div className="address-content">
                    Old Airport junction market, 2nd floor TEAN Business complex, opposite former NITEL office,JOS   
                </div>
            </div>
{/* <!-- end of address --> */}
    <div className="Address-container p-2">
        <div className="address-header">
        Phone
        </div>
        <div className="address-content">
             +2348164482158
        </div>
    </div>
    {/* <!-- end of phone --> */}
    <div className="Address-container p-2">
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
                    <input className="button2" type="submit" value="SEND"></input>
                </div>
                
            </form>
        </div>

    </div>
      </div>
    
    <Footer />
    </>
  )
}

export default contact