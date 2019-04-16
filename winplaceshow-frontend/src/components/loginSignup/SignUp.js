import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/index';

const SignupContainer = styled.div`
    background-color: red;
    width: 30%;
    height: auto;
    margin: 8% auto;
`

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    /* overflow: hidden; */
    /* justify-content: space-around; */
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
`

const LoginDiv = styled.div`
    width: 205px;
    height: 50px;
`

const SignupDiv = styled.div`
    width: 205px;
    height: 50px;
    background-color: pink;
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
                    <Link to="/login">
                        <LoginDiv>LogIn</LoginDiv>
                    </Link>
                    <Link to="/signup">
                        <SignupDiv>SignUp</SignupDiv>
                    </Link>
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
                    <h2>{this.props.signupSuccessMessage}</h2>
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
