import { Col, Button, Row, Container } from 'react-bootstrap';
import '../Assets/css/footer.css'

const Footer = () => {
    return (

        <div className="footer">
            <div className="footerContainer">
                <div className="footerBrand">
                    <div className="hld-carrt">
                        <div className="carrt">
                            <h3>BuynBulk</h3>
                            <div className="started">
                                <p className='ready'>Ready to get Started?</p>
                                <Button variant='primary'>Get Started </Button>
                            </div>
                        </div>
                    </div>

                        <Container className='footContainer' style={
                            {
                                // backgroundColor: '#116530',
                                width:'100%'
                                
                            }
                        }>

                            <Row>
                                <Col>
                                    <h3>Subscribe to our newsletter</h3>
                                    <input type="text" placeholder='Email Address' />
                                    <Button variant='success'>  </Button>
                                </Col>

                                <Col>
                                    <h3>Services</h3>
                                    <ul className='ul'>
                                        <li className='foot'>Email Marketing</li>
                                        <li className='foot'>Campaigns</li>
                                        <li className='foot'>Branding</li>
                                        <li className='foot'>Office</li>
                                    </ul>

                                </Col>

                                <Col>
                                    <h3>About</h3>
                                    <ul className='ul'>
                                        <li className='foot'>Our Story</li>
                                        <li className='foot'>Benefits</li>
                                        <li className='foot'>Team</li>
                                        <li className='foot'>Careers</li>
                                    </ul>


                                </Col>

                                <Col>
                                    <h3>Help</h3>
                                    <ul className='ul'>
                                        <li className='foot'>FAQs</li>
                                        <li className='foot'>Contact Us </li>
                                    </ul>


                                </Col>
                            </Row>
                        </Container>

                </div>
            </div>
        </div>

    );
}

export default Footer;