import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './signin.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export class Signin extends Component {
    constructor(){
        super();

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState( { [name]: value } )
    }
    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span className='signin-header'>Signin With Your Email And Password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange= {this.handleChange}
                    label='Email'
                    required/>
                    
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange= {this.handleChange}
                    label='Password'
                    required/>
                    
                    <div className='signin-btns'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
