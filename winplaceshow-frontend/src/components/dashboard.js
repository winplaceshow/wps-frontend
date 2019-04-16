import styled, { css } from 'styled-components';

import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { displayRaceData } from '../actions/index';
import SearchRace from './searchRace';

const NavBarDiv = styled.div`
    background-color: red;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`

const LogOutP = styled.p`
    margin: 0px;
`

const ContainerDiv = styled.div`
    display: flex;
    background: lightgray;
    height: auto;
`

const SideBar = styled.div`
    background-color: gray;
    width: 200px;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 25px;
`

const MainContentDiv = styled.div`
    width: 100%;
`

const raceObj = {
    date: "16/04/2019",
    track: "track value",
    location: "location value",
    horses: 7,
    listOfHorses: {
        horse1: "horse 1",
        horse2: 'horse 2',
        horse3: 'horse 3',
        horse4: 'horse 4'
    }
}

class Dashboard extends React.Component{

    // componentDidMount() {
    //     this.props.displayRaceData(this.props.races)
    // }

    getRaceArray = () => {

    }

    render() {
        return(
            <div>
                <NavBarDiv>
                    <h2>WPS</h2>
                    <nav>
                        <LogOutP>Log Out</LogOutP>
                    </nav>
                </NavBarDiv>
                <ContainerDiv>
                    <SideBar>
                        <h3>Side Bar</h3>
                        <p>Predictions</p>
                        <p>Past Races</p>
                        <p>Horses</p>
                        <p>Jockeys</p>
                        <p>Race Tracks</p>
                    </SideBar>
                    <MainContentDiv>
                        <SearchRace/>
                        {this.props.races.map((race, index) => (
                            <div key={index}>
                                <h1>{race.name}</h1>
                            </div>
                        ))}
                    </MainContentDiv>
                </ContainerDiv>
            </div>
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
    races: state.races
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
