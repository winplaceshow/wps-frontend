import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/index';

const SignupContainer = styled.div`
    background-color: #4D7EA8;
    width: 30%;
    height: auto;
    margin: 8% auto 0 auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5); 
`

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    overflow: hidden;
    align-items: center;
`

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`

const SignupInput = styled.input`
    margin: 20px auto;
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding: 7px;
`

const SignupButton = styled.button`
    margin: 20px auto;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    background-color: #ff5c5c;
    border: none;
    color: white;
    font-weight: bold;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

`

const LoginDiv = styled.div`
    width: 205px;
    height: 50px;
    padding-top: 25px;
    /* font-weight: bold; */
    color: white;
`

const SignupDiv = styled.div`
    /* width: 205px;
    height: 50px; */
    padding-top: 25px;
    padding-left: 46px;
    color: white;
    font-weight: bold;
`

const LoginP = styled.p`
    /* width: 204px;
    height: 50px;
    padding-top: 25px; */
    color: white;
`

const SignupSpan = styled.span`
    font-weight: bold;
    color: white;
`

const SignupP = styled.p`
    color: white;
`

class Signup extends React.Component {
    state = {
        credentials: {
            email: '',
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = (e) => {
        e.preventDefault()
        this.props.signup(this.state.credentials)
        // .then(() => {
        //     console.log(this.props.history)
        //     this.props.history.push('/signedup');
        // })
        this.setState({
            credentials: {
                email: '',
                username: '',
                password: ''
            }
        })
    }

    render() {
        console.log(this.props)
        return(
            <SignupContainer>
                <HeaderDiv>
                    <SignupDiv>SignUp! don't think!!</SignupDiv>
                </HeaderDiv>
                <SignupForm>
                    <SignupInput
                        type="text"
                        name="email"
                        placeholder="email"
                        value={this.state.credentials.email}
                        onChange={this.changeHandler}
                    />
                    <SignupInput
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                    />
                    <SignupInput
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                    />
                    <SignupButton onClick={this.signup}>
                        {/* {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> 
                        ) : () } */}
                        Signup
                    </SignupButton>
                    {/* <h2>{this.props.signupSuccessMessage}</h2> */}
                    {localStorage.getItem('signup') 
                        ? (<SignupP>SUCCESS? Just
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <SignupSpan> Login!</SignupSpan>
                            </Link>
                        </SignupP>)
                        : (<LoginP>Already have an account? Go to
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <SignupSpan> Login!</SignupSpan>
                            </Link>
                        </LoginP>)}
                        

                </SignupForm>
            </SignupContainer>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ signup }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    signingup: state.signingup,
    error: state.error,
    signupSuccessMessage: state.signupSuccessMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
