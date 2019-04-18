import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

class UpdateUser extends React.Component {
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
        console.log(this.state.credentials[e.target.name])
    }

    updateUser = (e) => {
        e.preventDefault()
        console.log(localStorage.getItem('userId'))
        axios
        .put(`https://build-week-wps.herokuapp.com/users/${localStorage.getItem('userId')}`, this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.clear()
            window.location.reload()
        })
        .catch(err => {
            console.log(err.response);
        })  
    }

    render() {
        return(
            <LoginContainer>
                <HeaderDiv>
                    <div>Update User Details</div>
                </HeaderDiv>
                <LoginForm>
                    <LoginInput
                        type="text"
                        name="email"
                        placeholder="email"
                        value={this.state.credentials.email}
                        onChange={this.changeHandler}
                    />
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
                    <LoginButton onClick={this.updateUser}>
                        Login
                    </LoginButton>
                </LoginForm>
            </LoginContainer>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//       dispatch,
//       ...bindActionCreators({ logIn }, dispatch)
//     }
// }

// const mapStateToProps = (state) => ({
//     loggingIn: state.loggingIn,
//     error: state.error
// })

export default UpdateUser;
