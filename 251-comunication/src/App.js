import './App.css';
import Header from './component/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homehero from './component/Homehero/Homehero';
import Culture from './pages/culture/Culture';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Expermental from './component/aboutpages/expermental/Expermental';
import Creative from './component/aboutpages/creative/Creative';
import Production from './component/aboutpages/production/Production';
import Research from './component/aboutpages/research/Research';
function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
           <Route path='/' element={<Homehero/>} />
           <Route path='/culture' element={<Culture/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/about/expermental' element={<Expermental />}  />
           <Route path='/about/creative' element={<Creative/>}  />
           <Route path='/about/digital'  />
           <Route path='/about/pr'  />
           <Route path='/about/production' element={<Production/>} />
           <Route path='/about/reasearch'   element={<Research/>} />
           <Route path='/about/communication'  />
           <Route path='/contact' element={<Contact />} />

        </Routes>
       </Router>
     
     
    </div> 
  );
}

export default App;
