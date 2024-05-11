import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Srh() {
  return (
    <div className='body'>
    <div className='container'>
   <div className='logo'>
     <img className='img' src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"></img>
   </div>
   <div className="background">
     <img className='img2' src="https://i.postimg.cc/W1hktGYn/srhlogo.png"></img>
   </div>
   <div className="heading">
     <h1 className="head" style={{color:'orangered'}}>Sunrisers Hyderabad</h1>
     <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
     <Link to='https://www.iplt20.com/videos/highlights'><button className='btn1'>WATCH NOW</button></Link> <br/> <br/>
    <Navigation/>
    </div>
   <div className="image">
     <img className='img3'
      style={{width:"40%", height:"35%", marginLeft:"60%"}}
        src="https://i.postimg.cc/BQhFqYpb/srh.png"></img>
   </div>
   <div className="navbar">
     <ul>
       <li>Home</li>
      <Link to="/srh"> <li>Team</li></Link>
       <Link to="/srhplayers"><li>Players</li></Link>
      <Link to="/srhabout"> <li>About</li></Link>
     </ul>
   </div>
   <div className="emptySrh">
   </div>
  

   </div>
  
  
 

</div>
  )
}

export default Srh
