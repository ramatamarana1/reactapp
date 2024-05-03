import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../Images/01.jpg';
import Image2 from '../Images/02.jpg';
import Image3 from '../Images/03.jpg';
import Image4 from '../Images/04.jpg';
import Image5 from '../Images/05.jpg';
import Image6 from '../Images/06.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import  './home.css';

function UncontrolledExample() {
  return (
<>
<Card>
      <Card.Body>
        <marquee>
        
      <h1>Too cute to pass up</h1>
      
      </marquee>
      </Card.Body>
    </Card>
    <Carousel>
      <Carousel.Item>
        <img src={Image1} width="1300px" height="800px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image2} width="1300px"height="800px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image3} width="1400px"/>
        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     <br></br>
     <div>
      <center>
     <Card>
      <Card.Body></Card.Body>
      <h1>SHOPPING</h1>
    </Card>
    </center>
     </div>
    <div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image4} />
        <Card.Body>
          <marquee>
          <Card.Title>GIRLS SHOPPING</Card.Title>
          </marquee>
          <Card.Text>
          Clothing (also known as clothes, garments, dress, apparel, or attire) is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social factors, and geographic considerations. 
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image5} />
        <Card.Body>
          <marquee>
          <Card.Title>ONLINE SHOPPING</Card.Title>
          </marquee>
          <Card.Text>
          Online shopping is how people directly buy goods or services from a seller in real-time over the Internet. It is a kind of electronic commerce.

In 1991 the Worldwide Web opened for commercial use. In 1994 online banking started and an online pizza shop from Pizza Hut.[1] During that same year, Netscape introduced Secure Sockets Layer for secure online shopping. Also, in 1994, the German company Intershop introduced its first online shopping system. In 1995, Amazon started its online shopping site, and in 1996, eBay appeared. [2]


        
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image6} />
        <Card.Body>
          <marquee>
          <Card.Title>GROCERY</Card.Title>
          </marquee>
          <Card.Text>
          Online grocery stores may allow facilitating local food which may reduce the environmental impact of food transport. Small-scale farmers have been embracing digital technologies as a way to directly sell produce, and community-supported agriculture and direct-sell delivery systems are on the rise during the coronavirus pandemic.[15] Furthermore, weekly grocery deliveries can be a better choice than individual trips to a store.Of the online shopping.Groceries like home appliances so many things.[16]
            
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      
    </CardGroup>

    
    
   </div>
   
  </>
   

   
  );
}

export default UncontrolledExample;