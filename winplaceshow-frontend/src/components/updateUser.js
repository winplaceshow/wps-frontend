import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = styled.div`
    background-color: #4D7EA8;
    width: 30%;
    height: auto;
    margin: 8% auto 0 auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5); 
    color: white;
    font-weight: bold;
`

const HeaderTextDiv = styled.div`
    padding-left: 35px;
    padding-top: 25px;
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
    background-color: #ff5c5c;
    border: none;
    color: white;
    font-weight: bold;
    height: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
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
        // console.log(this.state.credentials[e.target.name])
    }

    updateUser = (e) => {
        e.preventDefault()
        // console.log(localStorage.getItem('userId'))
        axios
        .put(`https://build-week-wps.herokuapp.com/users/${localStorage.getItem('userId')}`, this.state.credentials)
        .then(res => {
            // console.log(res)
            localStorage.clear()
            window.location.reload()
        })
        .catch(err => {
            // console.log(err.response);
        })  
    }

    render() {
        return(
            <LoginContainer>
                <HeaderDiv>
                    <HeaderTextDiv>Update User Details</HeaderTextDiv>
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
                        Update
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
