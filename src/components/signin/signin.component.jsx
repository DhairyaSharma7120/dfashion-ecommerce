import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './signin.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'
// import { sendEmail } from '../../email-testing/email'

export class Signin extends Component {
    constructor(){
        super();

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        } catch (error) {
            alert("Wrong Email or Password")
        }
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
                        <div className="google-btn" onClick={signInWithGoogle}>
                            <div className="google-icon-wrapper">
                                <img className="google-icon" alt='google-icon' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                            </div>
                            <p className="btn-text"><b>Sign in with google</b></p>
                        </div>
                        {/* <CustomButton onClick={sendEmail}>Send Email</CustomButton> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
