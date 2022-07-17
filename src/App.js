
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
