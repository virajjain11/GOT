import HomeModal from "./components/HomeModal/HomeModal";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CardDetails from "./components/Card.js/CardDetails/CardDetails";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
function App() {
  // const [resourceType, setResourceType] = useState("books");
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeModal />} />
          <Route path="/:name/:id" element={<CardDetails />} />
          <Route path="*" exact element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
