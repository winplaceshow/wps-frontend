import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { horsesData } from '../actions/index';

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
    width: 30%;
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
    @media (max-width: 800px) {
        flex-wrap: wrap;
        align-items: flex-start;

        .items {
            width: 45%;
            overflow: hidden;
        }
        h4 {
            margin-bottom: 5px;
        }
        h2 {
            margin-top: 5px;
        }
    }
`

const SearchInput = styled.input`
    width: 100%;
    background-color: white;
    border: none;
    border-radius: 3px;
    height: 20px;
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
                        <SearchInput
                            type="text"
                            name="name"
                            // placeholder="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                    </SearchForm>
                </SearchContainerDiv>
                {filteredHorses.map((race, index) => (
                    <Link to={`/protected/horses/${race.id}`} style={{textDecoration: 'none'}}>
                        <RaceDiv key={index}>
                            <div className="items">
                                <h4>Sr. No.</h4>
                                <h2>{index+1}</h2>
                            </div>
                            <div className="items">
                                <h4>Name</h4>
                                <h2>{race.name}</h2>
                            </div>
                            <div className="items">
                                <h4>Age</h4>
                                <h2>{race.age}</h2>
                            </div>
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
