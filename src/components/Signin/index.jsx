import React from 'react'
import logo from '../../images/elan_logo_black_background.png';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    ImgWrap,
    Img
  } from './SigninElements'

const SignIn = () => {
    return (
        <React.Fragment>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        <ImgWrap>
                            <Img src={logo} alt='Elan Travel Services'/>
                        </ImgWrap>
                    </Icon>
                    <FormContent>
                        <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                    
                </FormWrap>
            </Container>
        </React.Fragment>
    )
}

export default SignIn
