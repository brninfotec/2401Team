import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Ipl from './components/Ipl';
import RcbPlayers from './components/RcbPlayers';
import CskPlayers from "./components/CskPlayers";
import SrhPlayers from "./components/SrhPlayers";
import MiPlayers from "./components/MiPlayers";

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
    </div>
  );
}

export default App;
