import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { logIn } from '../../actions/index';

const LoginContainer = styled.div`
    background-color: #4D7EA8;
    width: 30%;
    height: auto;
    margin: 8% auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5); 
`

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    overflow: hidden;
    /* justify-content: space-around; */
    align-items: center;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`

const LoginInput = styled.input`
    margin: 20px auto;
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 3px;
    padding: 7px;
`

const LoginButton = styled.button`
    margin: 20px auto;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    background-color: #ff5c5c;
    border: none;
    color: white;
    font-weight: bold;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
`

const LoginDiv = styled.div`
    /* width: 204px;
    height: 50px; */
    padding-top: 25px;
    padding-left: 46px;
    color: white;
    font-weight: bold;
`

const SignupP = styled.p`
    /* width: 204px;
    height: 50px;
    padding-top: 25px; */
    color: white;
`

const SignupSpan = styled.span`
    font-weight: bold;
    color: white;
`

class Login extends React.Component {
    state = {
        credentials: {
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

    login = (e) => {
        e.preventDefault()
        this.props.logIn(this.state.credentials)
        .then(() => {
            this.props.history.push('/protected');
        })
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }

    render() {
        // console.log(this.props)
        return(
            <LoginContainer>
                <HeaderDiv>
                    <LoginDiv>Login! Hurry up!</LoginDiv>
                </HeaderDiv>
                <LoginForm>
                    <LoginInput
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                    />
                    <LoginInput
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                    />
                    <LoginButton onClick={this.login}>
                        {/* {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> 
                        ) : () } */}
                        Login
                    </LoginButton>
                    <SignupP>Don't have an account? Just
                        <Link to="/signup" style={{textDecoration: 'none'}}>
                            <SignupSpan> Sign Up!</SignupSpan>
                        </Link>
                    </SignupP>
                </LoginForm>
            </LoginContainer>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ logIn }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    loggingIn: state.loggingIn,
    error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
