import Categories from './Components/categories'
import TopSection from './Components/topSection'
import AboutUs from './Components/aboutUs'
import RecentProd from './Components/recentProd'
import LetsWork from './Components/letsWork'
import Yam from './Assets/images/unsplash_xTp3YB3_cCM.png'
import Carrot from './Assets/images/unsplash_hoUlccGAhxY.png'
import Header from './Components/Header'
import Leaf from './Assets/images/unsplash_hX_hf2lPpUU.png'
import Footer from './Components/footer'

const Home = () => {
    return ( 
        <div className='myHome'>
          <div >
              <img className="leafBack" src={Leaf} alt="" />
            </div>
            <Header />

            <TopSection />
            <Categories />
            <AboutUs />
            <div >
              <img className="carrotBack" src={Carrot} alt="" />
            </div>
            <RecentProd />
            <img className="YamBack" src={Yam} alt="" />
            <LetsWork />
            <Footer />
        </div>

     );
}
 
export default Home;