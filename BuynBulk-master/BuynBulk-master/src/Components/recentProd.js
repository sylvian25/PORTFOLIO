
// import { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaArrowRight } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import Bag from '../Assets/images/download 3.png'






const recentProd = () => {

    return (
        <div className="recentProd">
                <h1 className="styled" style={
                    {
                        marginBottom: '3em',
                    }
                }>Recent products</h1>

        <div className="cards">

                <Card className='boxS' style={
                    {
                         width: '17.5rem', 
                         borderRadius: '10px 10px 23px 23px',
                         borderTop: 'none',
                          }
                          }>
        

  <Card.Img className='myRice' variant="top" style={{ width: "10em",margin: '0 auto', }}src={Bag} />
  <Card.Body>
    <Card.Title style={{
        fontFamily : 'saira',
        fontWeight: 600
    }}>50kg Bag of rice.</Card.Title>
    <Card.Text>
        <div className="hld-det">
            <div className="details">
                <p>
                    Weight: 50kg<br />Location: Plateau State
                </p>
                <span><h3>N20,000</h3><p>Overall price</p></span>
            </div>
            <div className="recImg">    
                <Button variant="success" className='grp'><FaArrowRight /></Button>
                <Button variant="success" className='grp'><CgShoppingCart /></Button>
            </div>
        </div>
    </Card.Text>
  </Card.Body>
</Card>




<Card className='boxS' style={
                    {
                         width: '17.5rem', 
                         borderRadius: '10px 10px 23px 23px',
                         borderTop: 'none',
                          }
                          }>
  <Card.Img className='myRice' variant="top" style={{ width: "10em",margin: '0 auto', }}src={Bag} />
  <Card.Body>
    <Card.Title style={{
        fontFamily : 'saira',
        fontWeight: 600
    }}>50kg Bag of rice.</Card.Title>
    <Card.Text>
        <div className="hld-det">
            <div className="details">
                <p>
                    Weight: 50kg<br />Location: Plateau State
                </p>
                <span><h3>N20,000</h3><p>Overall price</p></span>
            </div>
            <div className="recImg">    
                <Button variant="success" className='grp'><FaArrowRight /></Button>
                <Button variant="success" className='grp'><CgShoppingCart /></Button>
            </div>
        </div>
    </Card.Text>
  </Card.Body>
</Card>





<Card className='boxS' style={
                    {
                         width: '17.5rem', 
                         borderRadius: '10px 10px 23px 23px',
                         borderTop: 'none',
                          }
                          }>
  <Card.Img className='myRice' variant="top" style={{ width: "10em",margin: '0 auto', }}src={Bag} />
  <Card.Body>
    <Card.Title style={{
        fontFamily : 'saira',
        fontWeight: 600
    }}>50kg Bag of rice.</Card.Title>
    <Card.Text>
        <div className="hld-det">
            <div className="details">
                <p>
                    Weight: 50kg<br />Location: Plateau State
                </p>
                <span><h3>N20,000</h3><p>Overall price</p></span>
            </div>
            <div className="recImg">    
                <Button variant="success" className='grp'><FaArrowRight /></Button>
                <Button variant="success" className='grp'><CgShoppingCart /></Button>
            </div>
        </div>
    </Card.Text>
  </Card.Body>
</Card>






<Card className='boxS' style={
                    {
                         width: '17.5rem', 
                         borderRadius: '10px 10px 23px 23px',
                         borderTop: 'none',
                          }
                          }>
  <Card.Img className='myRice' variant="top" style={{ width: "10em",margin: '0 auto', }}src={Bag} />
  <Card.Body>
    <Card.Title style={{
        fontFamily : 'saira',
        fontWeight: 600
    }}>50kg Bag of rice.</Card.Title>
    <Card.Text>
        <div className="hld-det">
            <div className="details">
                <p>
                    Weight: 50kg<br />Location: Plateau State
                </p>
                <span><h3>N20,000</h3><p>Overall price</p></span>
            </div>
            <div className="recImg">    
                <Button variant="success" className='grp'><FaArrowRight /></Button>
                <Button variant="success" className='grp'><CgShoppingCart /></Button>
            </div>
        </div>
    </Card.Text>
  </Card.Body>
</Card>
   </div>
           
                        
        </div>
    );
}
 
export default recentProd;