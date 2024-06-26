import React from 'react'
import { Link } from 'react-router-dom'


function MiPlayers() {
  return (
    <div  style={{backgroundColor:"white"}}>
           <div className='bc'>
        <div className='main' >
     
        
      <h1 className='h1' style={{color:"white", position:"relative",left:'15%'}}>Mumbai Indians</h1><br></br>
      <h2 className='h2' style={{ position:"relative",left:"-5%"}}>Official Website</h2><br></br>
      <img src='./images/milogo.png' style={{position:"relative",right:"30%",width:"230px"}} className='logo1'></img>
     
      <div className='info'>
      <h3>Oweners: Indiawin Sports Private limited.... Ltd</h3><hr></hr><br></br>
      <h3>Coach: Mark Boucher</h3><hr></hr><br></br>
      <h3>Venue:Mark Boucher </h3><hr></hr><br></br>
      <h3>Captain:Hardik Pandya</h3>
      <Link className='navbar2' to=""style={{color:"black" ,position:"relative",right:"4%",top:'40px'}}>Home</Link>
        <Link className='navbar2'  to="/Mi" style={{color:"black",position:"relative",right:"4%",top:'40px'}}>Back</Link>
        <Link className='navbar2'  to="/MiAbout" style={{color:"black",position:"relative",right:"4%",top:'40px'}}>About</Link>
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
            <img className='player1' src='./images/rohit.png'></img><hr></hr>
            <h2 className='name'>Rohit Sharma</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/brevis.png'></img><hr></hr>
            <h2 className='name'>Dewald Bravis</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/surya.png'></img><hr></hr>
            <h2 className='name'>suryakumar yadav</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/ishan.png'></img><hr></hr>
            <h2 className='name'>Ishan Kishan</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/thilk.png'></img><hr></hr>
            <h2 className='name'>Thilk Varma</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/david.png'></img><hr></hr>
            <h2 className='name'>Tim David</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/vinod.png'></img><hr></hr>
            <h2 className='name'>Vinod</h2>
            <h4 className='role'>Batter</h4>
        </div>
        <div className='player'>
            <img className='player1' src='./images/desai.png'></img><hr></hr>
            <h2 className='name'>Harvik Desai</h2>
            <h4 className='role'>Batter</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>All-Rounders</u></h1>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/54.png'></img><hr></hr>
            <h2 className='name'>Hardik Pandey</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/585.png'></img><hr></hr>
            <h2 className='name'>Arjun Tendulkar</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/217.png'></img><hr></hr>
            <h2 className='name'>Mohammad Nabi</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/371.png'></img><hr></hr>
            <h2 className='name'>Shepherd</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/600.png'></img><hr></hr>
            <h2 className='name'>Shams Mulani</h2>
            <h4 className='role'>All-rounder</h4>
        </div>
      </div>
      <div>
        <h1 style={{textAlign:"justify"}}><u style={{color:"black"}}>Bowlers</u></h1>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/801.png'></img><hr></hr>
            <h2 className='name'>Kwena Maphaka</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/9.png'></img><hr></hr>
            <h2 className='name'>Jasprit Bumrah</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/149.png'></img><hr></hr>
            <h2 className='name'>Piyush Chawla</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1015.png'></img><hr></hr>
            <h2 className='name'>Kumar Karthikeya</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1045.png'></img><hr></hr>
            <h2 className='name'>Akash Madwal</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/3116.png'></img><hr></hr>
            <h2 className='name'>Luke Wood</h2>
            <h4 className='role'>Bowler</h4>
        </div>
        <div className='player'>
            <img className='player1' src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/192.png'></img><hr></hr>
            <h2 className='name'>Shresh Gopal</h2>
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

export default MiPlayers
