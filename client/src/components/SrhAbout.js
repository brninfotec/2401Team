import React from 'react'
import { Link } from 'react-router-dom'


function SrhAbout() {
  return (
    <div style={{backgroundColor:"lightblue", width:"100%", height:"100%", marginTop:"-2%"}}>
    <div className='container'>
    <div className='headingAbout'>
    <Link className='navbar2'  to="/Srh" style={{color:"black",position:"relative", right:"43%",top:'20px'}}>Back</Link>  
           <h2 className='headAbout'> Sunrisers Hyderabad (SRH)</h2>
      <p className='paraAbout'>Welcome to the official page of Sunrisers Hyderabad (SRH)! We are a team known for our disciplined approach to cricket and ability to perform under pressure.</p>
      <p className='paraAbout'>Established in 2012, SRH has quickly made its mark in the IPL with our strong bowling attack and dynamic batting lineup. With a focus on teamwork and determination, we aim to achieve success in every season.</p>
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

export default SrhAbout
