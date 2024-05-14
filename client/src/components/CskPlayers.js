import React from 'react'
import { Link } from 'react-router-dom'


function CskPlayers() {
  return (
    <div  style={{backgroundColor:"white"}}>
          <div className='bc'>
        <div className='main' >
        <Link className='navbar2' to=""style={{color:"black" ,position:"relative",right:"580px"}}>Home</Link>
        <Link className='navbar2'  to="/Csk" style={{color:"black",position:"relative",right:"580px"}}>Back</Link>
      <Link className='navbar2'  to="/CskAbout" style={{color:"black",position:"relative",right:"580px"}}>About</Link>
        
      <h1 className='h1' style={{color:"yellow", position:"relative",left:"-330px"}}>Chennai Super Kings</h1><br></br>
      <h2 className='h2'>Official Website</h2><br></br>
      <img src='./images/csklogo2.png' className='logo1'></img>
     
      <div className='info'>
      <h3>Oweners: Chennai Super Kings Cricket Ltd</h3><hr></hr><br></br>
      <h3>Coach: Stephen Fleming</h3><hr></hr><br></br>
      <h3>Venue:M. A. Chidambaram Stadium </h3><hr></hr><br></br>
      <h3>Captain:Ruturaj Gaikwad</h3>
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
        <h1 style={{textAlign:"justify",color:"black"}}><u style={{color:"black"}}>Batters</u></h1>
        
        <div className='player'>
            <img className='player1' src='./images/rutu.png'></img><hr></hr>
            <h2 className='name'>Ruturaj Gaikward</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/convay.png'></img><hr></hr>
            <h2 className='name'>Devon Convey</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/dhoni.png'></img><hr></hr>
            <h2 className='name'>M.S. Dhoni</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/rahane.png'></img><hr></hr>
            <h2 className='name'>Ajinkya Rahane</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/shaik.png'></img><hr></hr>
            <h2 className='name'>Shaik Rasheed</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/rizvi.png'></img><hr></hr>
            <h2 className='name'>Sameer Rizvi</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/dube.png'></img><hr></hr>
            <h2 className='name'>Shivam Dube</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/rachin.png'></img><hr></hr>
            <h2 className='name'>Rachin Ravindra</h2>
            <h4 className='role'>Batter</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify",color:"black"}}><u style={{color:"black"}}>All-Rounders</u></h1>
        <div className='player'>
            <img className='player1' src='./images/jaddu.png'></img><hr></hr>
            <h2 className='name'>Ravinder Jadeja</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/santher.png'></img><hr></hr>
            <h2 className='name'>Mitchel Santhner</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/ali.png'></img><hr></hr>
            <h2 className='name'>Moeen Ali</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/mitchell.png'></img><hr></hr>
            <h2 className='name'>Daryel Mitchel</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/thakur.png'></img><hr></hr>
            <h2 className='name'>Shardul Thakur</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify",color:'black'}}><u style={{color:"black"}}>Bowlers</u></h1>
        <div className='player'>
            <img className='player1' src='./images/gleeson.png'></img><hr></hr>
            <h2 className='name'>Richard Gleeson</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/chahar.png'></img><hr></hr>
            <h2 className='name'>Deepak Chahar</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/theekshana.png'></img><hr></hr>
            <h2 className='name'>Theekshana</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/mus.png'></img><hr></hr>
            <h2 className='name'>Mjustafiuzar</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/jeet.png'></img><hr></hr>
            <h2 className='name'>Simrajeet</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/pathirana.png'></img><hr></hr>
            <h2 className='name'>Pathirana</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/desh.png'></img><hr></hr>
            <h2 className='name'>Deshpandy</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        
      </div><hr></hr>
      <div className='advt'style={{backgroundColor:"yellow"}}>
        <img style={{width:"250px"}} src='./images/tata.png'></img>
        <img style={{width:"250px"}} src='./images/rupay.png'></img>
        <img style={{width:"250px"}} src='./images/ceat.png'></img>
        <img style={{width:"250px"}} src='./images/star.png'></img>

      </div>
      
    </div>
  )
}

export default CskPlayers
