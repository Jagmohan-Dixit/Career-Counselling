import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"

const App = () => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-richwhite-900 box-border '>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  )
};

export default App;
