import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Image7 from '../Images/07.jpg';
import Image8 from '../Images/08.jpg';
import Image9 from '../Images/09.jpg';
import Image10 from '../Images/10.jpg';
import Image16 from '../Images/16.webp';
import Card from 'react-bootstrap/Card';
import './about.css';





function About() {
  return (
    <div>
      
      <Card>
      <Card.Body>
        <marquee>
        
      <h1>Shopping Quotes</h1>
      
      </marquee>
      </Card.Body>
    </Card>
   
      <br/>
      <Container>
        <Row>
          <Col className='hover'>
          
          <img src={Image7} width="500px" />

          </Col>
          <Col>
          <h2>WHAT IS SHOPPING?</h2>
          <p>The study of the history of clothing and textiles traces the development, use, and availability of clothing and textiles over human history. Clothing and textiles reflect the materials and technologies available in different civilizations at different times. The variety and distribution of clothing and textiles within a society reveal social customs and culture.

The wearing of clothing is exclusively a human characteristic and is a feature of most human societies. There has always been some disagreement among scientists on when humans began wearing clothes, but studies involving the evolution of body lice suggest it started sometime around 170,000 years ago. Anthropologists believe that animal skins and vegetation were adapted into coverings as protection from cold, heat, and rain, especially as humans migrated to new climates.</p>
        
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
        <h2>ONLINE SHOPPING</h2>
        <p>One of the earliest forms of trade conducted online was IBM's online transaction processing (OLTP) developed in the 1960s, which allowed the processing of financial transactions in real-time.[2] The computerized ticket reservation system developed for American Airlines called Semi-Automatic Business Research Environment (SABRE) was one of its applications. There, computer terminals located in different travel agencies were linked to a large IBM mainframe computer, which processed transactions simultaneously and coordinated them so that all travel agents had access to the same information at the same time.</p>

        </Col>
        <Col className='hover'>
        <img src={Image8} width="500px"/>
        </Col>
      </Row>
      <Row>
        <br></br>
        <Col className='hover'>
        <img src={Image9} width="500px"/>
        
        </Col>
        <Col>
        <br></br>
        <h2>GIRL SHOPPING</h2>
        <p>Customers are attracted to online shopping not only because of high levels of convenience, but also because of broader selections, competitive pricing, and greater access to information.[39][40] Business organizations seek to offer online shopping not only because it is of much lower cost compared to bricks and mortar stores, but also because it offers access to a worldwide market, increases customer value, and builds sustainable capabilities.[41][42]</p>


        
        </Col>
      </Row>
      <Row>
        <Col>
        <br></br>
        <h2>GROCERY SHOPPING</h2>
        <p>A grocery store (AE), grocery shop (BE) or simply grocery[1] is a foodservice retail store that primarily retails a general range of food products,[2] which may be fresh or packaged. In everyday U.S. usage, however, "grocery store" is a synonym for supermarket,[3] and is not used to refer to other types of stores that sell groceries. In the UK, shops that sell food are distinguished as grocers[3] or grocery shops (though in everyday use, people usually use either the term "supermarket" or a "corner shop"[4] or "convenience store"</p>

        </Col>
        <Col className='hover'>
        <br></br>
        <img src={Image10} width="500px"/>
        </Col>
      </Row>
        <Row>
          <Col className='hover'>
          <br></br> 
          <img src={Image16} width="5n00px" />
          </Col>
          <Col>
          <br></br>
          <h2>HOME SHOPPING</h2>
           <p>Home shopping is the electronic retailing and home shopping channels industry, which includes such billion dollar television-based and e-commerce companies as Shop LC, HSN, Gemporia, TJC, QVC, eBay, ShopHQ, Buy.com and Amazon.com, as well as traditional mail order and brick and mortar retailers as Hammacher Schlemmer and Sears, Roebuck and Co. Home shopping allows consumers to shop for goods from the privacy of their own home, as opposed to traditional shopping, which requires one to visit brick and mortar stores and shopping malls.

</p>
          </Col>
        
         
        </Row>
      
    </div>
  )
}

export default About
