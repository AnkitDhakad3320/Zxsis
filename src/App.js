import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/services" element={<Services/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
