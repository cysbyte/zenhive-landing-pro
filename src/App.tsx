import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PageNotFound from './pages/PageNotFound';
import { AccountProvider } from './providers/WalletProvider';
import { Suspense } from 'react';
import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Wallet = React.lazy(() => import('./pages/Wallet'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ShareAndEarn = React.lazy(() => import('./pages/ShareAndEarn'));

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
      <AccountProvider>
        <Router>
        <Suspense fallback={<div className='w-screen h-screen bg-black text-white flex items-center justify-center'></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/shareandearn' element={<ShareAndEarn />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          </Suspense>
        </Router>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App