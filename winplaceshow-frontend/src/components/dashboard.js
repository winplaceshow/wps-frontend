import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { futureRaceData } from '../actions/index';
import FutureRace from './searchRace';
import PastRaces from './pastRaces/pastRaces';
import HorseData from './horses';
import { Link } from 'react-router-dom';
import SingleHorse from './singleHorse';
import UpdateUser from './updateUser';

const NavBarDiv = styled.div`
    background-color: #4D7EA8;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    color: white;
`

const NavItemP = styled.p`
    padding: 15px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
    }
`

const ContainerDiv = styled.div`
    display: flex;
    background: lightgray;
    height: auto;
`

const SideBar = styled.div`
    background-color: #01172F;
    width: 150px;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    text-decoration: none;
    font-weight: bold;
`

const SideBarDiv = styled.div`
    text-decoration: none;
    color: white;
`

const SideBarOuterDiv = styled.div`
    width: 100%;
    height: 50px;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    padding-top: 13px;
    &&:hover{
        background-color: #4D7EA8;
    }
`

const MainContentDiv = styled.div`
    width: 100%;
`

const NavItemDiv = styled.div`
    display: flex;
    font-weight: bold;
`
const SideBarH3 = styled.h3`
    margin-top: 30px;
    padding-left: 20px;
`

class Dashboard extends React.Component{

    getRaceArray = () => {

    }

    logout = () => {
        localStorage.clear();
        window.location.reload()
    }

    delete = () => {
        // console.log(localStorage.getItem('userId'))
        axios
        .delete(`https://build-week-wps.herokuapp.com/users/${localStorage.getItem('userId')}`)
        .then(res => {
            // console.log(res)
            localStorage.clear()
            window.location.reload()
        })
        .catch(err => {
            // console.log(err.response.data);
        })    
    }
    render() {
        return(
            <div>
                <NavBarDiv>
                    <h2>WPS</h2>
                    <NavItemDiv>
                        <NavItemP onClick={this.logout}>Log Out</NavItemP>
                        <NavItemP onClick={this.delete}>Delete</NavItemP>
                        <Link to="/protected/updateuser" style={{textDecoration: 'none', color: 'white'}}><NavItemP>Update</NavItemP></Link>
                    </NavItemDiv>
                </NavBarDiv>
                <ContainerDiv>
                    <SideBar>
                        <SideBarH3>SIDE BAR</SideBarH3>
                        <SideBarOuterDiv>
                            <Link to="/protected/" style={{textDecoration: 'none'}}>
                                <SideBarDiv>Predictions</SideBarDiv>
                            </Link>
                        </SideBarOuterDiv>
                        <SideBarOuterDiv>
                            <Link to="/protected/pastraces" style={{textDecoration: 'none'}}>
                                <SideBarDiv>Past Races</SideBarDiv>
                            </Link>
                        </SideBarOuterDiv>
                        <SideBarOuterDiv>
                            <Link to="/protected/horses" style={{textDecoration: 'none'}}>
                                <SideBarDiv>Horses</SideBarDiv>
                            </Link>
                        </SideBarOuterDiv>
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
