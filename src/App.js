import Home from "./Home";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Intreviewer from "./component/Intreviewer/Intreveiwer";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Quiz from "./component/quiz_page/Quiz";
import Questions from "./component/Questions/Questions";
import './style.css'

import './style.css'
import LoginAndReg from "./Login/LoginAndReg";
import Welcome from "./Login/Welcome";
import Profile from "./component/profile";







function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/Intreviewer" element={<Intreviewer/>}/>
        <Route path="/question/:cat/:diff/:comp" element={<Questions />}/>      
        <Route path="/reg" element={<LoginAndReg />}/>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
     <Footer/>

   </>
  );
}

export default App;
