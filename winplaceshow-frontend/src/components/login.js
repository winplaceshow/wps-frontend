import React from 'react';
import { Connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { logIn } from '../actions/index';

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
            <div>
                <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                    />
                    <button onClick={this.login}>
                        {/* {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> 
                        ) : () } */}
                        Login
                    </button>
                </form>
            </div>
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
