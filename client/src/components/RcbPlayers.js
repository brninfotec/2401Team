import React from 'react'
import { Link } from 'react-router-dom'

function RcbPlayers() {
  return (
    <>
    <div style={{backgroundColor:"white"}}>
        <div className='bc'>
        <div className='main' >
        <Link className='navbar2' to=""style={{color:"black"}}>Home</Link>
        <Link className='navbar2'  to="/Rcb" style={{color:"black"}}>Back</Link>
      <Link className='navbar2'  to="/RcbAbout" style={{color:"black"}}>About</Link>
        
      <h1 className='h1'>Royal Challengers Bengaluru</h1><br></br>
      <h2 className='h2'>Official Website</h2><br></br>
      <img src='./images/rcb logo.png' className='logo1'></img>
     
      <div className='info'>
      <h3>Oweners: United Spirits Limited (USL)</h3><hr></hr><br></br>
      <h3>Coach: Andy Flower</h3><hr></hr><br></br>
      <h3>Venue:M. Chinnaswamy Stadium </h3><hr></hr><br></br>
      <h3>Captain:Faf du Plessis</h3>
      </div>
      <div className='links'>
 
    
      {/* <Link className='navbar2'  to="/miplayers"  style={{color:"black"}}>mi</Link>
      <Link className='navbar2' to="/rcb" style={{color:"black"}}>rcb1</Link>
      <Link className='navbar2' to="/csk" style={{color:"black"}}>csk1</Link>
      <Link className='navbar2' to="/srh" style={{color:"black"}}>srh1</Link>
      <Link className='navbar2' to="/mi"  style={{color:"black"}}>mi1</Link> */}

      </div>
      
      </div>
      </div>
     
      <hr></hr>/
      <div>
        <h2 className='session'>Session-2024</h2>
        <h1 style={{textAlign:"justify" }}><u style={{color:"black"}}>Batters</u></h1>
        
        <div className='player'>
            <img className='player1' src='./images/faf.png'></img><hr></hr>
            <h2 className='name'>Faf du Plessis</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/patidar.png'></img><hr></hr>
            <h2 className='name'>Rajat Patidar</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/virat.png'></img><hr></hr>
            <h2 className='name'>virat kohli</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/rawat.png'></img><hr></hr>
            <h2 className='name'>Anuj Rawat</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/dk.png'></img><hr></hr>
            <h2 className='name'>Dinesh Karthik</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/will.png'></img><hr></hr>
            <h2 className='name'>Will Jacks</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/saurav.png'></img><hr></hr>
            <h2 className='name'>Saurav Chuahan</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/suyash.png'></img><hr></hr>
            <h2 className='name'>Prabhudessai</h2>
            <h4 className='role'style={{color:"black"}}>Batter</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>All-Rounders</u></h1>
        <div className='player'>
            <img className='player1' src='./images/maxi.png'></img><hr></hr>
            <h2 className='name'>Glane Maxwell</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/lamron.png'></img><hr></hr>
            <h2 className='name'>Mahipal Lomror</h2>
            <h4 className='role'style={{color:"black"}}>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/green.png'></img><hr></hr>
            <h2 className='name'>Cameron Green</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/sharma.png'></img><hr></hr>
            <h2 className='name'>Karn Sharma</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/singh.png'></img><hr></hr>
            <h2 className='name'>Swipnil Singh</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify",color:"black"}}><u style={{color:"black"}}>Bowlers</u></h1>
        <div className='player'>
            <img className='player1' src='./images/joseph.png'></img><hr></hr>
            <h2 className='name'>Alzarri Joseph</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/ferguson.png'></img><hr></hr>
            <h2 className='name'>Lockie Ferguson</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/siraj.png'></img><hr></hr>
            <h2 className='name'>Mohammed Siraj</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/vijay.png'></img><hr></hr>
            <h2 className='name'>vijay kumar</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/topley.png'></img><hr></hr>
            <h2 className='name'>Reece Topley</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/yash.png'></img><hr></hr>
            <h2 className='name'>Yash Dayal</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/1rajan.png'></img><hr></hr>
            <h2 className='name'>Rajan Kumar</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        
      </div><hr></hr>
      <div className='advt'>
        <img style={{width:"250px"}} src='./images/tata.png'></img>
        <img style={{width:"250px"}} src='./images/rupay.png'></img>
        <img style={{width:"250px"}} src='./images/ceat.png'></img>
        <img style={{width:"250px"}} src='./images/star.png'></img>

      </div>

     </div>

    

     </>

  )
}

export default RcbPlayers
