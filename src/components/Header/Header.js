import * as React from 'react';
import './header.css'
import{Link} from 'react-router-dom'

import Logo from '../Images/15.jpg';

function Header() {
  return (
    <div className='head'>
      <img src={Logo} width={60} style={{marginleft:10,marginBottom:10,marginTop:10}}/>
      
      <ul className='menu'>
        
                <li><Link to='/reactapp'className='link'>Home</Link></li>
        <li><Link to='about'className='link'>about</Link></li>
        <li><Link to='service'className='link'>accessories</Link></li>
        <li><Link to='contact'className='link'>contact</Link></li>
      </ul>
      
    </div>
  )
}

export default Header