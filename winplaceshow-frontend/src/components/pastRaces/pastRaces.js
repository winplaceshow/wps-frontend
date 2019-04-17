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

class PastRaces extends React.Component {

    componentDidMount() {
        this.props.pastRaceData()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>Past Races</h1>
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
    races: state.races,
})

export default connect(mapStateToProps, mapDispatchToProps)(PastRaces);
