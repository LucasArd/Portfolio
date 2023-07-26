import './IndexView.css';
import NavBar from '../Components/NavBar/NavBar';
import MainSection from '../Components/MainSection/MainSection';
import Proyects from '../Components/Proyects/Proyects';
import Skills from '../Components/Skills/Skills';
import About from '../Components/About/About';
import ContactMe from '../Components/ContactMe/ContactMe';



const IndexView = () => {
  return (
    <div className="App">
      <NavBar/>
      <MainSection/>
      {/* <Proyects/> */}
      <Skills/>
      <About/>
      <ContactMe/>
    </div>
  );
}

export default IndexView;