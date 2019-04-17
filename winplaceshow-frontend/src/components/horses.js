import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

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

    componentDidMount() {
        this.props.horsesData()
    }

    render() {
        console.log(this.props.horses)
        return(
            <div>
                {this.props.horses.map((race, index) => (
                    <RaceDiv key={index}>
                        <p>{index+1}</p>
                        <h2>{race.name}</h2>
                        {/* <h2>{race.year}</h2> */}
                        {/* <h2>{race.city}</h2> */}
                    </RaceDiv>
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
