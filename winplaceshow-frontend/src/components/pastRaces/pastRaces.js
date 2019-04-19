import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { pastRaceData } from '../../actions/index';

const SearchContainerDiv = styled.div`
    box-sizing: border-box;
    height: 50px;
    width: 90%;
    color: white;
    border-radius: 5px;
    background-color: #4D7EA8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin: 30px auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
`

const SearchForm = styled.form`
    /* display: flex; */
    width: 450px;
`

const RaceDiv = styled.div`
    display: flex;
    width: 90%;
    background-color: white;
    color: #4D7EA8;
    margin: 30px auto;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
    padding-bottom: 15px;
`

const SearchInput = styled.input`
    width: 300px;
    background-color: white;
    border: none;
    border-radius: 3px;
    height: 20px;
`

class PastRaces extends React.Component {

    state = {
        name: '',
        city: '',
    }

    componentDidMount() {
        this.props.pastRaceData()
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let filteredRaces = this.props.pastRaceArray.filter(race => {
            return race.name.indexOf(this.state.name) != -1;
        })
        return(
            <div>
                <SearchContainerDiv>
                    <h3>Dashboard</h3>
                    <SearchForm>
                        <SearchInput
                            type="text"
                            name="name"
                            // placeholder="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                    </SearchForm>
                </SearchContainerDiv>
                {filteredRaces.map((race, index) => (
                    <RaceDiv key={index}>
                        <div>
                            <h4>Sr. No.</h4>
                            <h2>{index+1}</h2>
                        </div>
                        <div>
                            <h4>Name</h4>
                            <h2>{race.name}</h2>
                        </div>
                        <div>
                            <h4>Year</h4>
                            <h2>{race.year}</h2>
                        </div>
                        <div>
                            <h4>City</h4>
                            <h2>{race.city}</h2>
                        </div>
                    </RaceDiv>
                ))}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ pastRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    pastRaceArray: state.pastRaceArray,
})

export default connect(mapStateToProps, mapDispatchToProps)(PastRaces);
