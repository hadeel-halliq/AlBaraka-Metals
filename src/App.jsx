import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Site from "./Pages/Site/Site";
import Products from "./Pages/Proudcts/Products";
import Contact from "./Pages/Contact/Contact";
import MainLayout from "./Components/MainLayout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/site" element={<Site />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
