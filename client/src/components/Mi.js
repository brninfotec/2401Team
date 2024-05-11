import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Mi() {
  return (
    <div className='body'>
    <div className='container'>
  <div className='logo'>
    <img className='img' src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"></img>
  </div>
  <div className="background">
    <img className='img2' src="https://i.postimg.cc/9QnyB8wK/milogo.png"></img>
  </div>
  <div className="heading">
    <h1 className="head" style={{color:'dodgerblue'}}>Mumbai Indians</h1>
    <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
   <Link to='https://www.iplt20.com/videos/highlights'><button className='btn1'>WATCH NOW</button></Link> <br/> <br/>
   <Navigation/>


  </div>
  <div className="image">
    <img className='img3' 
    style={{width:"45%", height:"40%", marginLeft:"55%"}}  
    src="https://i.postimg.cc/KvQP1vGZ/mi.png"></img>
  </div>
  <div className="navbar">
    <ul>
    <Link to=""className='pagelink'><li>Home</li></Link>
      <Link className='pagelink' to="/mi"><li>Team</li></Link>
      <Link className='pagelink' to="/miplayers"><li>Players</li></Link>
      <Link className='pagelink' to="/miabout"><li>About</li></Link>
    </ul>
  </div>
  <div class="emptyMi">


  </div>
 


  

</div>
</div>
  )
}

export default Mi
