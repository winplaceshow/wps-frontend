import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { logIn } from '../../actions/index';

const LoginContainer = styled.div`
    background-color: red;
    width: 30%;
    height: auto;
    margin: 8% auto;
`

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
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
`

const LoginDiv = styled.div`
    width: 204px;
    height: 50px;
    background-color: pink;
`

const SignupDiv = styled.div`
    width: 204px;
    height: 50px;
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
        console.log(this.props)
        return(
            <LoginContainer>
                <HeaderDiv>
                <Link to="/login">
                    <LoginDiv>LogIn</LoginDiv>
                </Link>
                <Link to="/signup">
                    <SignupDiv>SignUp</SignupDiv>
                </Link>
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
