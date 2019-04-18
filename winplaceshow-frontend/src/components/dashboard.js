import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { futureRaceData } from '../actions/index';
import FutureRace from './searchRace';
import PastRaces from './pastRaces/pastRaces';
import HorseData from './horses';
import { Link } from 'react-router-dom';
import SingleHorse from './singleHorse';
import UpdateUser from './updateUser';

const NavBarDiv = styled.div`
    background-color: red;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`

const NavItemP = styled.p`
    margin-left: 25px;
    cursor: pointer;
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

const NavItemDiv = styled.div`
    display: flex;
`

class Dashboard extends React.Component{

    // state = {
    //     horse: SingleHorse,
    // }

    getRaceArray = () => {

    }

    logout = () => {
        localStorage.clear();
        window.location.reload()
    }

    delete = () => {
        console.log(localStorage.getItem('userId'))
        axios
        .delete(`https://build-week-wps.herokuapp.com/users/${localStorage.getItem('userId')}`)
        .then(res => {
            console.log(res)
            localStorage.clear()
            window.location.reload()
        })
        .catch(err => {
            console.log(err.response.data);
        })    
    }
    render() {
        return(
            <div>
                <NavBarDiv>
                    <h2>WPS</h2>
                    <NavItemDiv>
                        <NavItemP onClick={this.logout}>Log Out</NavItemP>
                        <NavItemP onClick={this.delete}>Delete Account</NavItemP>
                        <Link to="/protected/updateuser"><NavItemP>Update Account</NavItemP></Link>
                    </NavItemDiv>
                </NavBarDiv>
                <ContainerDiv>
                    <SideBar>
                        <h3>Side Bar</h3>
                        <Link to="/protected/"><p>Predictions</p></Link>
                        <Link to="/protected/pastraces"><p>Past Races</p></Link>
                        <Link to="/protected/horses"><p>Horses</p></Link>
                        <p>Jockeys</p>
                        <p>Race Tracks</p>
                    </SideBar>
                    <MainContentDiv>
                        <Route exact path="/protected/" component={FutureRace}/>
                        <Route path="/protected/pastraces" component={PastRaces}/>
                        <Route exact path="/protected/horses" component={HorseData}/>
                        <Route path="/protected/horses/:id" component={SingleHorse}/>
                        <Route path="/protected/updateuser" component={UpdateUser}/>
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
