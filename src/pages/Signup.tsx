import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import  { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';


const Signin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)

    const handleSuccess = (response: any) => {
        const token = response.credential;
        const decodedToken = jwtDecode(token); 
        console.log('Decoded Token:', decodedToken);
        setIsLoggedIn(true)
    };

    const handleError = () => {
        console.log('Google Sign-In was unsuccessful. Try again later.');
    };

    if(isLoggedIn) {
        return <Navigate to='/' />
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    )
}

export default Signin