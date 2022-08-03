import WorkImg from "../Assets/images/Group 175.png"



const letsWork = () => {

    return (
        <div className="letsWork">
            <div className="hld-letsWork">
            <div>
                <div className='topPart'>
                    <h1 className="styled">Are you a farmer? Lets<br /> work together.</h1>
                </div>
            </div>
                <div>
                <div className="rightWork">
                    <div>
                        <img src={WorkImg} alt="" />
                    </div>
                    
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
                            sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus 
                            dolor purus non enim praes estfringilla est
                        </p>
                        <div className="hld-reg">
                            <button className="reg">Register</button>
                        </div>
                    </div>

                </div>

                </div>

                </div>
                <div className="arg">

                </div>
        </div>
        
    );
}
 
export default letsWork;