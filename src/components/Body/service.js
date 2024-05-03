import React from 'react'
import Image11 from '../Images/11.jpeg';
import Image12 from '../Images/12.png';
import Image13 from '../Images/13.webp';
import Image14 from '../Images/14.jpg';
import Card from 'react-bootstrap/Card';


function service() {
  return (
    <div>
      <Card>
      <Card.Body>
        <center>
      <h1>ACCESSORIES</h1>
      </center>
      </Card.Body>
    </Card>
    <div>
      <center>
      <img src={Image11} width="500px"/>
      <h1>BEAUTY ACCESSORIES</h1>
      <carousel>
      <p>A fashion accessory is a decorative item that supplements one's outfit. Items such as such as jewellery, gloves, handbags, hats, belts, scarves, watches, sunglasses, pins, stockings, bow ties, leggings, ties, suspenders, and tights.

Accessories add color, style and class to an outfit, and create a certain look, but they may also have practical functions. Handbags are for carrying small necessary items, hats protect the face from weather, Laptops and mobile phones communicate, and gloves keep the hands warm.</p>
</carousel>
      </center>
      <center>
  <img src={Image12} width="500px"/>
      <h1>MOBILE ACCESSORIES</h1>
      <p>Mobile phones have become such vital part of our daily lives that we just can’t do without our
mobile phones. Subsequently, mobile phone accessories too, are seeing an increased demand
amongst mobile phone users considering how extensively mobile phones are used these days.
Right from sober to stylish mobile phone cases to USB connectors, chargers to power banks, OTG
and external memory cards, earphones to selfie sticks, and there’s a variety of mobile phone
accessories that extend different types of benefits to users.</p>
  </center>
  <center>
  <img src={Image13} width="500px"/>
  <h1>HOME ACCESSORIES</h1>
  <p>Home accessories are furniture items which are easy to replace and easy to move, and include almost any items that are not strictly functionally necessary in a decorated space. These accessories include such items as curtains, sofa sets, cushions, tablecloths and decorative craft products, decorative wrought iron, and so on. These items are commonly used in indoor furnishings and layout and can include cloth items, paintings, and plants.</p>
  </center>
  <center>
  <img src={Image14} width="500px"/>
  <h1>PHOTO ACCESSORIES</h1>
  <p>Photography is the art, application, and practice of creating images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.[1]</p>

  </center>

    </div>
    </div>
    
    
  )
}

export default service

