import React, { Component } from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss'

export class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName,email,password,confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            
            const{ user } = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user , { displayName });

            this.setState = ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
    
        return (
            <div className="sign-up">
                <h1 className='title'>I do not have a account</h1>
                <span className='sign-up-title'>Sign-up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInput
                    type='text'
                    name='displayName'
                    value = {this.state.displayName}
                    handleChange={this.handleChange}
                    label='Display Name'
                    required
                    />

                    <FromInput
                    type='email'
                    name='email'
                    value = {this.state.email}
                    handleChange={this.handleChange}
                    label='Email'
                    required
                    />

                    <FromInput
                    type='password'
                    name='password'
                    value = {this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />

                    <FromInput
                    type='password'
                    name='confirmPassword'
                    value = {this.state.confirmPassword}
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
                
            </div>
        )
    }
}

export default SignUp;
