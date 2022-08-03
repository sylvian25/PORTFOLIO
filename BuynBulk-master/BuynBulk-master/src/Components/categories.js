import tuber from '../Assets/images/tuber.png';
import grain from '../Assets/images/grain.png';
import fruits from '../Assets/images/fruits.png';
import livestock from '../Assets/images/livestock.png';
import vegetables from '../Assets/images/veqgie.png';
// import Header from './Header'






const categories = () => {
    return (
        <div className="categories">
            <div className="ve">
                <h1 className="styled">Categories</h1>
            </div>

            <div className="catImg">
                <div className="blText">
                    <img src={tuber} alt="" />
                    <p>Roots and Tubers</p>
                </div>

                <div className="blText">
                    <img src={grain} alt="" />
                    <p>Grain</p>
                </div>
                
                <div className="blText">
                    <img src={fruits} alt="" />
                    <p>Fruits</p>
                </div>
                
                <div className="blText">
                    <img src={livestock} alt="" />
                    <p>Livestock</p>
                </div>
                
                <div className="blText">
                    <img src={vegetables} alt="" />
                    <p>Vegetables</p>
                </div>
            </div>
        </div>
    );
}
 
export default categories;