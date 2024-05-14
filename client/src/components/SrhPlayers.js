import React from 'react'
import { Link } from 'react-router-dom'


function SrhPlayers() {
  return (
    <div  style={{backgroundColor:"white"}}>
           <div className='bc'>
        <div className='main' >
        
        <h1 className='h1' style={{color:"orange", position:"relative",left:"-330px"}}>Sunrises Hyderabad</h1><br></br>
      <h2 className='h2'>Official Website</h2><br></br>
      <img src='./images/srhlogo.png' className='logo1'></img>
     
      <div className='info'>
      <h3>Oweners: SUN TV Network</h3><hr></hr><br></br>
      <h3>Coach: Daniel Vettori</h3><hr></hr><br></br>
      <h3>Venue:Rajiv Gandhi Intl. Cricket Stadium </h3><hr></hr><br></br>
      <h3>Captain:Pat Cummins</h3>
      <Link className='navbar2' to=""style={{color:"white",right:"4%",top:'70px'}}>Home</Link>
        <Link className='navbar2'  to="/srh" style={{color:"white",right:"4%",top:"70px"}}>Back</Link>
      <Link className='navbar2'  to="/srhAbout" style={{color:"white",right:"4%",top:"70px"}}>About</Link>
      </div>
      <div className='links'>
      {/* <Link className='navbar2' to="/"style={{color:"black"}}>Rcb</Link>
      <Link className='navbar2'  to="/cskplayers" style={{color:"black"}}>csk</Link>
      <Link className='navbar2'  to="/srhplayers" style={{color:"black"}}>srh</Link>
      <Link className='navbar2'  to="/miplayers"  style={{color:"black"}}>mi</Link>
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
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>Batters</u></h1>
        
        <div className='player'>
            <img className='player1' src='./images/samad.png'></img><hr></hr>
            <h2 className='name'>Abdul Samad</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/markram.png'></img><hr></hr>
            <h2 className='name'>Aiden Markram</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/rahul.png'></img><hr></hr>
            <h2 className='name'>Rahul Tripatti</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/glenn.png'></img><hr></hr>
            <h2 className='name'>Glenn Phillips</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/mayank.png'></img><hr></hr>
            <h2 className='name'>Mayank Agarwal</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/kalseen.png'></img><hr></hr>
            <h2 className='name'>Heinrich Klasen</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/head.png'></img><hr></hr>
            <h2 className='name'>Tavis Head</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/yadav.png'></img><hr></hr>
            <h2 className='name'>Upendra yadav</h2>
            <h4 className='role'>Batter</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>All-Rounders</u></h1>
        <div className='player'>
            <img className='player1' src='./images/sunder.png'></img><hr></hr>
            <h2 className='name'>Washington sunder</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/sanvir.png'></img><hr></hr>
            <h2 className='name'>Sanvir Singh</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/abhi.png'></img><hr></hr>
            <h2 className='name'>Abhishek Sharma</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/nitish.png'></img><hr></hr>
            <h2 className='name'>Nitish Reddy</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/jansen.png'></img><hr></hr>
            <h2 className='name'>Marco Jansen</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>Bowlers</u></h1>
        <div className='player'>
            <img className='player1' src='./images/pat.png'></img><hr></hr>
            <h2 className='name'>Part cummins</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/sabash.png'></img><hr></hr>
            <h2 className='name'>Shahbaz Ahamad</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/buvi.png'></img><hr></hr>
            <h2 className='name'>Bhuvaneswar kumar</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/nattu.png'></img><hr></hr>
            <h2 className='name'>T. Natarajan</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/jaydev.png'></img><hr></hr>
            <h2 className='name'>Jayadev</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/umran.png'></img><hr></hr>
            <h2 className='name'>Umran Malik</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/markande.png'></img><hr></hr>
            <h2 className='name'>Markande</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        
      </div><hr></hr>
      <div className='advt' style={{backgroundColor:"orange"}}>
        <img style={{width:"250px"}} src='./images/tata.png'></img>
        <img style={{width:"250px"}} src='./images/rupay.png'></img>
        <img style={{width:"250px"}} src='./images/ceat.png'></img>
        <img style={{width:"250px"}} src='./images/star.png'></img>

      </div>
     
    </div>
  )
}

export default SrhPlayers
