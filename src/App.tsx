import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home';
import Signin from './pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import Wallet from './pages/Wallet';

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  )
}

export default App