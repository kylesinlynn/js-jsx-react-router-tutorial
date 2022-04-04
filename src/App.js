import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
