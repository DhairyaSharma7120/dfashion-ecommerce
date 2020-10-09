import React from 'react'
import './signin-and-signup.styles.scss'
import Signin from '../../components/signin/signin.component'
import SignUp from '../../components/signup/sign-up.component'
const SigninAndSingup = () => {
    return (
        <div className='signin-and-signup'>
            <Signin />
            <SignUp /> 
        </div>
    )
}

export default SigninAndSingup;
