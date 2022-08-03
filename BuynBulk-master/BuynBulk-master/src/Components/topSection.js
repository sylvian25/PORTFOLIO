import ferm from '../Assets/images/Group 6.png'
import yam from '../Assets/images/unsplash_xTp3YB3_cCM.png'
// import Group_6 from '..'


const TopSection = () => {
    return (
        <div className="topSection">
            <div className="hld-sec">
            <div className="left">    
                <h1>
                    <span className="green">Lorem ipsum dolor </span>
                    sit amet, consecteteur.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consecteteur 
                    adipiscing eit ut aliquam, purus sit amet 
                    luctus venenatis, lectus magna fringila urna. 
                    parttitor rhancus dolor purus non enim prossent
                    elementum facilsis leo, vel fringila est

                </p>


                <div className="hldBut">
                    <div className="buttons">    

                
                        <button className="in">Sign in</button>
                        {/* <button className="explore">Explore </button> */}
                    </div>
                    <img src={yam} alt="" />
                </div>
            </div>
            <div className="hld-sec-right">
                <img src={ferm} alt="" />
            </div>
            </div>
        </div>
    );
}
 
export default TopSection;