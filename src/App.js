import HomeModal from "./components/HomeModal/HomeModal";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CardDetails from "./components/Card.js/CardDetails/CardDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [resourceType, setResourceType] = useState("books");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeModal />} />
          <Route path="/:resourceType/:id" element={<CardDetails />} />
          <Route path="*" exact element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
