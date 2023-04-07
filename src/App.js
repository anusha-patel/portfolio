import './App.css';
// import Navbar from "./components/Navbar"
import Nav from './components/nav';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      <Home />
      <About/>
      {/* <Portfolio/> */}
      <Card/>
      <Experience/>
      <Contact/>
      
      <SocialLinks/>
      
    </>
  )

}

export default App;
