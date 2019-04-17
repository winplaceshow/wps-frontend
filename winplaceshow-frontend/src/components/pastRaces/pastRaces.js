import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { pastRaceData } from '../../actions/index';

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

class PastRaces extends React.Component {

    componentDidMount() {
        this.props.pastRaceData()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                {this.props.pastRaceArray.map((race, index) => (
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
      ...bindActionCreators({ pastRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    pastRaceArray: state.pastRaceArray,
})

export default connect(mapStateToProps, mapDispatchToProps)(PastRaces);
