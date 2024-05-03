import React from 'react'
import './header.css'
import{Link} from 'react-router-dom'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';


function Header() {
  return (
    <div>
       
        
      <ul>
      <AirplaneTicketIcon/>
        <li><Link to='/'className='link'>Home</Link></li>
        <li><Link to='about'className='link'>about</Link></li>
        <li><Link to='service'className='link'>service</Link></li>
        <li><Link to='contact'className='link'>contact</Link></li>
      </ul>
      
    </div>
  )
}

export default Header
