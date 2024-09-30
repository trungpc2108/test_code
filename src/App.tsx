import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

import Page from "./components/page";

import CartPage from "./components/cartPage";
import Nice from "./components/Nice";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="nice" element={<Nice />} />
          <Route path="page" element={<Page />} />
          <Route path="page" element={<CartPage />} />

          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
