import aboutImg from '../Assets/images/Group 169.png'

const AboutUs = () => {
    return (
        <div className="about">

        
        <div className="hldAbt">
            <div className="leftAbt">
                <img src= { aboutImg } alt="" />
            </div>

            <div className="rightAbt">
                <h1 className="styled">About us</h1>
                <p>Lorem ipsum dolor sit amet, consecteteur 
                    adipiscing eit ut aliquam, purus sit amet 
                    luctus venenatis, lectus magna fringila urna. 
                    parttitor rhancus dolor purus non enim prossent
                    elementum facilsis leo, vel Lorem ipsum dolor sit amet, consecteteur 
                    adipiscing eit ut aliquam, purus sit amet 
                    luctus venenatis, lectus magna fringila urna. 
                    parttitor rhancus dolor purus non enim prossent
                    elementum facilsis leo, vel fringila estfringila est</p>
                    <div className='more'>
                         <button class='rMore'>Read more</button>
                    </div>
            </div>
        </div>

        

        </div>
    );
}
 
export default AboutUs;