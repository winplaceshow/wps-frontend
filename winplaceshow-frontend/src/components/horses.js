import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { horsesData } from '../actions/index';

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

class HorseData extends React.Component {

    state = {
        name: '',
    }

    componentDidMount() {
        this.props.horsesData()
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let filteredHorses = this.props.horses.filter(race => {
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
                    </SearchForm>
                </SearchContainerDiv>
                {filteredHorses.map((race, index) => (
                    <Link to={`/protected/horses/${race.id}`}>
                        <RaceDiv key={index}>
                            <p>{index+1}</p>
                            <h2>{race.name}</h2>
                        </RaceDiv>
                    </Link>
                ))}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ horsesData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    horses: state.horses,
})

export default connect(mapStateToProps, mapDispatchToProps)(HorseData);
