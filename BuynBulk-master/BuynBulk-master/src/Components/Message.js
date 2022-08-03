import React from "react";
import "../Assets/css/Message.css"
import look from '../Assets/images/Vector4.png'
import  'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header"
import Footer from "./footer"



function Message() {
    return (
     <>
     <Header />
     <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{
                            marginTop:'50px',
                            width:'689px',
                            height:'100%',
                            border:'1px solid #979797',
                            borderRadius: "8px",
                            paddingRight: "10px",
                            paddingLeft: "10px"
                            }}>
                            <div className="container2" style={{
                                display:'flex',
                                justifyContent:'center',
                                flexDirection:'column',
                                alignItems: 'center'
                            }}>
                                <div className="min">
                                    <img className="look" src={look} alt=""></img>
                                </div>
                              <div className="lin">Email Confirmation</div>
                              <div className="pin"> We sent an email to deborahmajin515@gmail.com to confirm the validity of your emailaddress.After receiving the email click the link provided to complete your registeration.</div>
                              <hr/>
                              <div className="fin">Didnt get a mail? <span style={{color: '#116530'}}>Resend confirmation mail.</span></div>

                            </div>

        </div>
         </div>
     </>   
    )
}
export default Message