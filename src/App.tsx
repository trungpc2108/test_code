import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Ctdd from "./components/ctdd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="ctdd" element={<Ctdd />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
