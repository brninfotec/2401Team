import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <div >
    <nav >

    <NavLink className='navbarRcb navbar2 '  to="/">RCB</NavLink>
    <NavLink className='navbarCsk navbar2' to="/CSK"> CSK</NavLink>
    <NavLink  className='navbarMi navbar2' to="/MI">MI</NavLink>
    <NavLink className='navbarSrh navbar2' to="/SRH" >SRH</NavLink>
  
</nav>
</div>
  )
}

export default Navigation
