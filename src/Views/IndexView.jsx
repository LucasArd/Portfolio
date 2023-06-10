import './IndexView.css';
import NavBar from '../Components/NavBar/NavBar';
import MainSection from '../Components/MainSection/MainSection';
import Proyects from '../Components/Proyects/Proyects';
import Skills from '../Components/Skills/Skills';



const IndexView = () => {
  return (
    <div className="App">
      <NavBar/>
      <MainSection/>
      <Proyects/>
      <Skills/>
      {/* <Contact/> */}
    </div>
  );
}

export default IndexView;