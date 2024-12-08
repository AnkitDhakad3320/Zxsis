import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NoPage/>} />

          {/* <Route path="/services" element={<Services/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
