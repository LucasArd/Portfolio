import './IndexView.css';
import NavBar from '../Components/NavBar/NavBar';
import MainSection from '../Components/MainSection/MainSection';


const IndexView = () => {
  return (
    <div className="App">
      <NavBar/>
      <MainSection/>
      {/* <Proyects/>
      <Skills/>
      <Contact/> */}
    </div>
  );
}

export default IndexView;