import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from './components/ThemeContext';

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
      <ThemeProvider>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/Blog" element={<Blog />} /> */}
          <Route path="*" element={<NoPage/>} />

          {/* <Route path="/services" element={<Services/>}/>*/}
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
