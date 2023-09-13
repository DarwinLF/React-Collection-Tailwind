import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/home";
import ColorFlipper from './components/colorFlipper';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/colorflipper' element={<ColorFlipper/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
