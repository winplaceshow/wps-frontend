import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';

import { futureRaceData } from '../actions/index';



const SearchForm = styled.form`
    /* display: flex; */
    width: 450px;
`

const RaceDiv = styled.div`
    display: flex;
    width: 85%;
    background-color: red;
    margin: 30px auto;
    align-items: center;
    justify-content: space-around;
`

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

class FutureRace extends React.Component {

    state = {
        name: '',
        city: '',
    }

    componentDidMount() {
        this.props.futureRaceData()
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let filteredRaces = this.props.futureRaceArray.filter(race => {
            return race.name.indexOf(this.state.name) != -1;
        })
        return(
            <div>
                <SearchContainerDiv>
                    <h3>Dashboard</h3>
                    <SearchForm>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                        {/* <input
                            type="text"
                            name="city"
                            placeholder="city"
                            value={this.state.city}
                            onChange={this.changeHandler}
                        /> */}
                        {/* <button onClick={this.search}>Search</button> */}
                    </SearchForm>
                </SearchContainerDiv>
                <div>
                    {filteredRaces.map((race, index) => (
                        <RaceDiv key={index}>
                            <p>{index+1}</p>
                            <h2>{race.name}</h2>
                            <h2>{race.year}</h2>
                            <h2>{race.city}</h2>
                            <h2>prediction</h2>
                        </RaceDiv>
                    ))}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ futureRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    futureRaceArray: state.futureRaceArray,
})

export default connect(mapStateToProps, mapDispatchToProps)(FutureRace);
