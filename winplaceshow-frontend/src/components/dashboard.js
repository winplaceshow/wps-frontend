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

const RaceDive = styled.div`
    display: flex;
    width: 85%;
    background-color: red;
    margin: 30px auto;
    align-items: center;
    justify-content: space-around;
`

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
                        {this.props.futureRaceArray.map((race, index) => (
                            <RaceDive key={index}>
                                <p>{index+1}</p>
                                <h2>{race.name}</h2>
                                <h2>{race.year}</h2>
                                <h2>{race.city}</h2>
                                <h2>prediction</h2>
                            </RaceDive>
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
    futureRaceArray: state.futureRaceArray
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
