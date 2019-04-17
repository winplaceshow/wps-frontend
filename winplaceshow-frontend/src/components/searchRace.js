import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import styled, { css } from 'styled-components';

import { futureRaceData } from '../actions/index';

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

const RaceDiv = styled.div`
    display: flex;
    width: 85%;
    background-color: red;
    margin: 30px auto;
    align-items: center;
    justify-content: space-around;
`

class FutureRace extends React.Component {
    state = {
        date: '',
        city: ''
    }

    componentDidMount() {
        this.props.futureRaceData()
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
        this.props.futureRaceData(this.props.races, this.state.date, this.state.city)
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
            // <SearchContainerDiv>
            //     <h3>Dashboard</h3>
            //     <SearchForm>
            //         <input
            //             type="text"
            //             name="date"
            //             placeholder="date"
            //             value={this.state.date}
            //             onChange={this.changeHandler}
            //         />
            //         <input
            //             type="text"
            //             name="city"
            //             placeholder="city"
            //             value={this.state.city}
            //             onChange={this.changeHandler}
            //         />
            //         <button onClick={this.search}>Search</button>
            //     </SearchForm>
            // </SearchContainerDiv>
            <div>
                {this.props.futureRaceArray.map((race, index) => (
                    <RaceDiv key={index}>
                        <p>{index+1}</p>
                        <h2>{race.name}</h2>
                        <h2>{race.year}</h2>
                        <h2>{race.city}</h2>
                        <h2>prediction</h2>
                    </RaceDiv>
                ))}
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
