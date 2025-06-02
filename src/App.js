import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home'
import About from './components/About';
import Project from './components/Projects';
import Service from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TextShpere from './components/Wheel';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/wheel' element={<TextShpere/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
