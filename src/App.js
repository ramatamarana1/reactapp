
import './App.css';
import  Header from  './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Body/home';
import About from './components/Body/about';
import Service from './components/Body/service';
import Contact from './components/Body/contact';



function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='about' exact Component={About}/>
          <Route path='service' exact Component={Service}/>
          <Route path='contact' exact Component={Contact}/>
        </Routes>
        
      </Router>
    
      <Footer/>
    </div>
  );
}

export default App;


