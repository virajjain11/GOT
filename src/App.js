import Home from "./components/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./components/Card.js/CardDetails/CardDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" exact element={<Home />} />
          <Route path="/:name/:id" element={<CardDetails />} />
          {/* <Home /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
