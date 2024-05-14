import React from 'react'
import { Link } from 'react-router-dom'


function CskAbout() {
  return (
    <div style={{backgroundColor:"lightblue", width:"100%", height:"100%", marginTop:"-2%"}}>
    <div className='container'>
          <div className='headingAbout'>    
          <Link className='navbar2'  to="/Csk" style={{color:"black",position:"relative", right:"43%",top:"25px"}}>Back</Link>   
           <h2 className='headAbout'> Chennai Super Kings (CSK)</h2>
      <p className='paraAbout'>Welcome to the official page of Chennai Super Kings (CSK)! We are one of the most consistent teams in the IPL, known for our strategic approach to the game.</p>
      <p className='paraAbout'>Founded in 2008, CSK has a loyal fan base and a legacy of success in the IPL. With our experienced leadership and strong team culture, we aim to always be in contention for the title.</p>
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

export default CskAbout
