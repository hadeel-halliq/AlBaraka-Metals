import { Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage/Home"
import Site from "./Pages/SitePage/Site"
import Products from "./Pages/ProudctsPage/Products"
import Contact from "./Pages/ContactPage/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/site" element={<Site/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App;
