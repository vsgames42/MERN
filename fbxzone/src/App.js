import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Sell from "./pages/Sell";
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/sell' element={<Sell/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
