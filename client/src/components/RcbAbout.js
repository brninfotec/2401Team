import React from 'react'
import { Link } from 'react-router-dom'

function RcbAbout() {
    return (
             
    <div style={{backgroundColor:"lightblue", width:"100%", height:"100%", marginTop:"-2%"}}>
      
<<<<<<< HEAD
         <div className='container'>
         <div className='headingAbout'>
      <h2 className="headAbout"> Royal Challengers Bangalore (RCB)</h2>
=======
         


    <div className='container'>
    
         
        <div className='headingAbout'>
        <Link className='navbar2'  to="/Rcb" style={{color:"black",position:"relative", right:"700px",top:'20px'}}>Back</Link>
       
         <h2 className="headAbout"> Royal Challengers Bangalore (RCB)</h2>
>>>>>>> 63b71f836cab76d14d413b52db58a7f3b62f630d
      <p className='paraAbout'>Welcome to the official page of Royal Challengers Bangalore (RCB)! We are one of the most exciting teams in the IPL, known for our explosive batting lineup and passionate fan base.</p>
      <p className='paraAbout'>Founded in 2008, RCB has always aimed to entertain cricket fans around the world with our aggressive style of play. Led by our charismatic captain, we strive for excellence on and off the field.</p>
      <h3 className="headAbout">Our Mission</h3>
      <p className='paraAbout'>Describe your mission statement or the purpose of your project.</p>
      <h3 className="headAbout">Our Teams</h3>
      
      <ul>
        <Link to="/rcb"><li>RCB</li></Link>
        <Link to="/csk"><li>CSK</li></Link>
       <Link to="/mi"> <li>MI</li></Link>
        <Link to="/srh"><li>SRH</li></Link>
      </ul>
      
      <h3 className="headAbout">Contact Us</h3>
      <p className='paraAbout'>If you have any questions or inquiries, feel free to contact us at:</p>
      <p className='paraAbout'>Email: example@example.com</p>
      <p className='paraAbout'>Phone: +1234567890</p>
    </div>
    </div>
    </div>
  )
}

export default RcbAbout
