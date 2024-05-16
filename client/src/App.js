
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ipl from './components/Ipl';
import RcbPlayers from './components/RcbPlayers';
import CskPlayers from "./components/CskPlayers";
import SrhPlayers from "./components/SrhPlayers";
import MiPlayers from "./components/MiPlayers";

import Rcb from './components/Rcb';
import Csk from './components/Csk';
import Mi from './components/Mi';
import Srh from './components/Srh';
import RcbAbout from './components/RcbAbout';
import CskAbout from './components/CskAbout';
import MiAbout from './components/MiAbout';
import SrhAbout from './components/SrhAbout';

function App() {
  return (
    <div className="App">


   <BrowserRouter><Routes>
    <Route path="/" element={<RcbPlayers></RcbPlayers>}></Route>
    <Route path="/cskplayers" element={<CskPlayers></CskPlayers>}></Route> 
     <Route path="/srhplayers" element={<SrhPlayers></SrhPlayers>}></Route>
    <Route path="/miplayers" element={<MiPlayers></MiPlayers>}></Route>

    <Route path='/rcb' element={<Rcb/>}></Route>
      <Route path='/csk' element={<Csk/>}></Route>
      <Route path='/mi' element={<Mi/>}></Route>
      <Route path='/srh' element={<Srh/>}></Route>
      
      <Route path='/rcbabout' element={<RcbAbout/>}></Route>
      <Route path='/cskabout' element={<CskAbout/>}></Route>
      <Route path='/miabout' element={<MiAbout/>}></Route>
      <Route path='/srhabout' element={<SrhAbout/>}></Route>

   </Routes>
   </BrowserRouter>

      
      

    </div>
  );
}

export default App;
