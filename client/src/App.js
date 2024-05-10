
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rcb from './components/Rcb';
import Csk from './components/Csk';
import Mi from './components/Mi';
import Srh from './components/Srh';

function App() {
  return (
    <div className="App">
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
