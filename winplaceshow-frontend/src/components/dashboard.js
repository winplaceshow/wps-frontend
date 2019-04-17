import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { futureRaceData } from '../actions/index';
import FutureRace from './searchRace';
import PastRaces from './pastRaces/pastRaces';
import { Link } from 'react-router-dom';

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
                        <Link to="/protected/futureraces"><p>Predictions</p></Link>
                        <Link to="/protected/pastraces"><p>Past Races</p></Link>
                        <Link to="/protected/horses"><p>Horses</p></Link>
                        <p>Jockeys</p>
                        <p>Race Tracks</p>
                    </SideBar>
                    <MainContentDiv>
                        <SearchContainerDiv>
                            <h3>Dashboard</h3>
                        </SearchContainerDiv>
                        <Route path="/protected/futureraces" component={FutureRace}/>
                        <Route path="/protected/pastraces" component={PastRaces}/>

                    </MainContentDiv>
                </ContainerDiv>
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
    futureRaceArray: state.futureRaceArray
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
