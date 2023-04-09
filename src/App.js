import './App.css';
import Nav from './components/Navbar/nav';
import Home from './components/Home/Home';
import SocialLinks from './components/Navbar/SocialLinks';
import About from './components/About/About';
// import Portfolio from './components/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/contact/Contact';
import Card from './components/portfolio/Card';



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
