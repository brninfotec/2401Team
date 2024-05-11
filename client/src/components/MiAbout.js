import React from 'react'
import { Link } from 'react-router-dom'


function MiAbout() {
  return (
    <div style={{backgroundColor:"lightblue", width:"100%", height:"100%", marginTop:"-2%"}}>
  <div className='container'>
        <div className='headingAbout'>
         <h2 className='headAbout'> Mumbai Indians (MI)</h2>
      <p className='paraAbout'>Welcome to the official page of Mumbai Indians (MI)! We are the most successful team in the IPL, having won the title multiple times.</p>
      <p className='paraAbout'>Established in 2008, MI is known for its strong team spirit and ability to perform under pressure. With a blend of experienced players and young talent, we aim to continue our legacy of success in the IPL.</p>
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

export default MiAbout
