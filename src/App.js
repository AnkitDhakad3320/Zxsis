import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from './components/ThemeContext';

import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";
import { Services } from "./components/Services/Services";
import { Quote } from "./components/get_a_quote/Quote";

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
          <Route path="/quote" element={<Quote/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
