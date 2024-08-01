import './App.css';
import Header from './component/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homehero from './component/Homehero/Homehero';
import Culture from './pages/culture/Culture';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <div className="App">
       <Router>
       <Header />
        <Routes>
           <Route path='/' element={<Homehero/>} />
           <Route path='/culture' element={<Culture/>} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />

        </Routes>
       </Router>
     
     
    </div> 
  );
}

export default App;
