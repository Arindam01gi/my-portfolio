
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './container/Home';
import About from  './container/About'
import Contact from './container/Contact';
import Portfolio from './container/Portfolio'
import Navbar from './components/Navbar';
import CustomCursor from './Helper/CustomCursor';

function App() {
  return (
    <div className="App">


      <Navbar/>
      <CustomCursor/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/conatct' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
