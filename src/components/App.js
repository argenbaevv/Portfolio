
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

//Js Files
import Main from './main';
import Cursor from './cursor';
import Header from './header';
import Footer from './footer';
import Hero from './hero';



//CSS files
import '../css/App.css';


function App() {
  return (

    <div>

      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}


    <Main />
    <Header />
    <Hero />
    <Footer />
    <Cursor />
    </div>
    
  );
}

export default App;




