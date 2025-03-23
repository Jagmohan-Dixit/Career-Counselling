import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className='flex min-h-screen w-screen flex-col bg-richwhite-900'>
        <Navbar/>
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes> */}
    </div>
  )
};

export default App;
