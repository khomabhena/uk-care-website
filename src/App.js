
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import ProfilePage from './pages/profile-page';
import EmployerSignUpPage from './pages/employer-signup-page';
import EmployerSignInPage from './pages/employer-signin-page';
import EmployerProfilePage from './pages/employer-profile-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/employer-signup' element={<EmployerSignUpPage />} />
        <Route path='/employer-signin' element={<EmployerSignInPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/employer-profile' element={<EmployerProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
