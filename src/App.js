import Home from './pages/Home';
import Why from './pages/Why';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Why/>} path="/why"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;