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
import NewsHero from './component/news/NewsHero';
import News from './pages/news/News';
import ViewDetail from './component/aboutpages/ViewDetail/ViewDetail';
import Client from './component/client/Client';
import Services from './component/ourService/Service';
import Pr from './component/aboutpages/Pr/Pr';
import ClientPage from './pages/Client/ClientPage';
import Work from './component/work/Work';
import Event from "./component/event/Event"

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
  
   console.log(data.title)
  return (
    <div className="App">
       <Router>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/news' element={<News />} />
           <Route path='/about/expermental' element={<Expermental />}  />
           <Route path='/about/creative' element={<Creative/>}  />
           <Route path='/about/digital' element={<Digital />}  />
           <Route path='/about/pr' element={<Pr />} />
           <Route path='/about/production' element={<Production/>} />
           <Route path='/about/research'   element={<Research/>} />
           <Route path='/about/communication'  />
           <Route path='/clients' element={<ClientPage />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/work' element={<Work />} />
           <Route path='/carer/' element={<Carer data={data} />} />
           <Route path='/carer/apply/:id' element={<Apply data={data} />} />
           <Route path='/about/creative/viewdetail' element={<ViewDetail/>} />
           <Route path='/services' element={<Services/>} />
           <Route path='/event' element={<Event/>} />
        </Routes>
       </Router>
     
     
    </div> 
  );
}

export default App;
