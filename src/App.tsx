import { Route, Routes } from "react-router-dom";
import "./App.css";

import Index from "./components";

import Homepages from "./components/homepages";
import Layout from "./components/layout";
import Index_in from "./components/index_in";
import CartPage from "./components/cartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="home" element={<Homepages />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="index" element={<Index />} />

          <Route path="index_in" element={<Index_in />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
