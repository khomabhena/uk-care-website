
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* <Route path='/signin' element */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
