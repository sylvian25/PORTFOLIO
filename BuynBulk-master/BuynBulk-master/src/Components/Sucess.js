import React from "react";
import "../Assets/css/Sucess.css"
import  'bootstrap/dist/css/bootstrap.min.css'
import good from '../Assets/images/Vector.png'
import danny from '../Assets/images/Vector-1.png'
import Header from "./Header";
import Footer from "./footer"
import { Button } from "bootstrap";


function Sucess() {
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
                            }}>
                    <div className="main" style={{
                                display:'flex',
                                justifyContent:'center',
                                flexDirection:'column',
                                alignItems: 'center'
                            }}>
                            <div className="love">Success!</div>
                            <div className="favour">Your account has been created </div>
                            
                            <div className="mee">
                              <img className="good" src={good} alt=""></img>
                              <img className="circle" src={danny} alt=""></img>
                            </div>
                            <div className="button">
                              <button>Continue</button>
                               </div>
                    </div>
            </div>
       </div>
       
       
        </>
     
     )
}
export default Sucess