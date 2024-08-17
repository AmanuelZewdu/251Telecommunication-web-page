import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Culture from './pages/culture/Culture';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Expermental from './component/aboutpages/expermental/Expermental';
import Creative from './component/aboutpages/creative/Creative';
import Production from './component/aboutpages/production/Production';
import Research from './component/aboutpages/research/Research';
import Home from './pages/home/Home';
import Digital from './component/aboutpages/digital/Digital';
import Carer from './component/carer/Carer';
import Apply from './component/apply/Apply';
import { useEffect, useState } from 'react';
import axios from './api/axios';
function App() {
  const [data, setData] = useState([])
   async  function  getData() {
   
    try {
      const response = await axios.get('/jobs');
      setData(response.data); // Log the data to the console
    } catch (error) {
      console.error('Error fetching data:', error); // Handle errors gracefully
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
       <Router>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/culture' element={<Culture/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/about/expermental' element={<Expermental />}  />
           <Route path='/about/creative' element={<Creative/>}  />
           <Route path='/about/digital' element={<Digital />}  />
           <Route path='/about/pr'  />
           <Route path='/about/production' element={<Production/>} />
           <Route path='/about/reasearch'   element={<Research/>} />
           <Route path='/about/communication'  />
           <Route path='/contact' element={<Contact />} />
           <Route path='/carer/' element={<Carer data={data} />} />
           <Route path='/carer/apply/:id' element={<Apply data={data} />} />
        </Routes>
       </Router>
     
     
    </div> 
  );
}

export default App;
