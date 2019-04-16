import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';

import { displayRaceData } from '../actions/index';

const SearchContainerDiv = styled.div`
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`

const SearchForm = styled.form`
    /* display: flex; */
    width: 450px;
`

class SearchRace extends React.Component {
    state = {
        date: '',
        city: ''
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    search = (e) => {
        e.preventDefault()
        this.props.displayRaceData(this.props.races, this.state.date, this.state.city)
        this.setState({
            credentials: {
                date: '',
                city: ''
            }
        })
    }

    render() {
        console.log(this.props)
        return(
            <SearchContainerDiv>
                <h3>Dashboard</h3>
                <SearchForm>
                    <input
                        type="text"
                        name="date"
                        placeholder="date"
                        value={this.state.date}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="city"
                        value={this.state.city}
                        onChange={this.changeHandler}
                    />
                    <button onClick={this.search}>Search</button>
                </SearchForm>
            </SearchContainerDiv>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ displayRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    races: state.races,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchRace);
