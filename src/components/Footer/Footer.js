import React from 'react';
import './footer.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer(){
    return(
        <div style={{backgroundcolor:'blue',paddingTop:80}}>
            
                <Row style={{backgroundColor:'lightblue'}}>
                    <Col style={{padding:30,}}>
                    <h4>Quick Link</h4>
                        <li className='footer'>About</li>
                        <li className='footer'>Trema & conditions</li>
                        <li className='footer'>privacy</li>
                        <li className='footer'>Refund</li>
                        <li className='footer'>Shipping</li>
                        <li className='footer'>Contact</li>
                       </Col>

                    <Col style={{padding:30}}>
                    <h4>Brand</h4>
                        <li className='footer'>Sarees</li>
                        <li className='footer'>Lehanga choli</li>
                        <li className='footer'>Skirts</li>
                        <li className='footer'>Dupatta</li>
                        <li className='footer'>Anarakalli suit</li>
                        <li className='footer'>Kurtas</li>
                        
                        
                    </Col>
                    <Col style={{padding:40}}>
                    <h4>Brand</h4>
                        <li className='footer'>vizag,andhrapradesh</li>
                        <li className='footer'>9490493519</li>
                        <li className='footer'>info@gmail.com</li>
                        </Col>
                        
                        <Col style={{padding:40}}>
                            <h4>keep in touch</h4>
                            <input type='text' className='footersearch' placeholder='Enter your email'/>
                            <FaFacebook />
                            
                            <FaTwitterSquare />
                            
                            <FaInstagram />
                        </Col>
                      </Row>
            
            </div>
    );
}

export default Footer;