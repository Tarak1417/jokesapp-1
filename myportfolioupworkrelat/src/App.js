import { BrowserRouter,Route,Routes } from 'react-router-dom';



import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects'
import './App.css';

const App =() =>(
  
  <BrowserRouter>
  <Header/>
 <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/about" element={<About/>}/>
  <Route exact path ="/projects" element={<Projects/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
  
 </Routes>
 <Footer/>
  </BrowserRouter>
  )


export default App;
