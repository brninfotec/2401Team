import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Rcb() {
  return (
    <div className='body'>
         <div className='container'>
        <div className='logo'>
          <img className='img' src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png" alt=''></img>
        </div>
        <div className="background">
          <img className='img2' src="https://i.postimg.cc/KYWQRc5K/csblogo.png" alt=''></img>
        </div>
        <div className="heading">
          <h1 className="head">Royal Challengers Bangalore</h1>
          <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
          <Link to='https://www.google.com/search?sca_esv=cd9a55a255ee4ca7&rlz=1C1GCEA_enIN1094IN1094&sxsrf=ADLYWIKV2soUMaBCUfXFmsrPVgoCEZCWrg:1715334167062&q=rcb+short+videos&tbm=vid&source=lnms&prmd=vinsbmtz&sa=X&ved=2ahUKEwjqmsvd5YKGAxWdQ2cHHVweCwcQ0pQJegQIChAB&biw=1366&bih=633&dpr=1#fpstate=ive&vld=cid:01732575,vid:9TUPVMWhpvk,st:0'><button className='btn1'>WATCH NOW</button></Link><br/> <br/>
         <Navigation/>     

        </div>
        <div className="image">
          <img className='img3' src="https://i.postimg.cc/FRjcNhCX/rcb-removebg-preview.png" alt=''></img>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Team</li>
            <li>Players</li>
            <li>About</li>
          </ul>
        </div>
        <div className="empty">
        
        </div><br/>


     

       
        </div>
      

    </div>

  )
}

export default Rcb
