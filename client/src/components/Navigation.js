import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <div >
    <nav >

    <NavLink className='navbarRcb navbar1 '  to="/rcb">RCB</NavLink>
    <NavLink className='navbarCsk navbar1' to="/CSK"> CSK</NavLink>
    <NavLink  className='navbarMi navbar1' to="/MI">MI</NavLink>
    <NavLink className='navbarSrh navbar1' to="/SRH" >SRH</NavLink>
  
</nav>
</div>
  )
}

export default Navigation
