import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/LandingPAge';
import Aboutindex from './components/About';
import Contactindex from './components/ContactUs';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Routes';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Aboutindex/> */}
     {/* <Contactindex/> */}
    </>
  );
}

export default App;
