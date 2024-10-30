import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import Wallet from './pages/Wallet';
import { AccountProvider } from './providers/WalletProvider';
import Profile from './pages/Profile';

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
      <AccountProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App