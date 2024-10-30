import { BrowserRouter,Routes,Route } from 'react-router-dom';


import './App.css';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';


function App() {
  return (
    <div className='App'>
<BrowserRouter>
<Routes>
  <Route path="/" index element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
