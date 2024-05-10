import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Csk() {
  return (
    <div className='body'>
    <div className='container'>
   <div className='logo'>
     <img className='img' src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"></img>
   </div>
   <div className="background">
     <img className='img2' src="https://i.postimg.cc/WzG7WGcr/csk3.png"></img>
   </div>
   <div className="heading">
     <h1 className="head" style={{color:'gold'}}>Chennai Super Kings</h1>
     <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
     <Link to='https://www.iplt20.com/videos/highlights'><button className='btn1'>WATCH NOW</button></Link><br/> <br/>
    <Navigation/>   
    
   </div>
   <div className="image">
     <img className='img3' 
     style={{width:"35%", height:"35%", marginLeft:"62%"}}  
     src="https://i.postimg.cc/kMKwgmR4/csk.png"></img>
   </div>
   <div className="navbar">
     <ul>
       <li>Home</li>
       <li>Team</li>
       <li>Players</li>
       <li>About</li>
     </ul>
   </div>
   <div className="emptyCsk">
   </div>
   



   

   </div>
 

</div>
  )
}

export default Csk
