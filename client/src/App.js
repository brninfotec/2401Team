import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Ipl from './components/Ipl';
import RcbPlayers from './components/RcbPlayers';
import CskPlayers from "./components/CskPlayers";
import SrhPlayers from "./components/SrhPlayers";
import MiPlayers from "./components/MiPlayers";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rcb from './components/Rcb';
import Csk from './components/Csk';
import Mi from './components/Mi';
import Srh from './components/Srh';

function App() {
  return (
    <div className="App">


   <BrowserRouter><Routes>
    <Route path="/" element={<RcbPlayers></RcbPlayers>}></Route>
    <Route path="/csk" element={<CskPlayers></CskPlayers>}></Route> 
     <Route path="/srh" element={<SrhPlayers></SrhPlayers>}></Route>
    <Route path="/mi" element={<MiPlayers></MiPlayers>}></Route>

   </Routes>
   </BrowserRouter>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Rcb/>}></Route>
      <Route path='/csk' element={<Csk/>}></Route>
      <Route path='/mi' element={<Mi/>}></Route>
      <Route path='/srh' element={<Srh/>}></Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
