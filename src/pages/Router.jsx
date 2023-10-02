import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Router = () => {
    
  return (
    <BrowserRouter>
        <nav>
            <Link to='/'>Home</Link>
            <Link to="/About">Acerca</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router