import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { horses } from '../objects';
import { LineChart } from '../dataVisuals/barchart';

const HeaderContainerDiv = styled.div`
    display: flex;
`

const HorsePictureDiv = styled.div`
    width: 600px;
    height: 320px;
    margin-left: 50px;
    margin-top: 40px;
`

const HorsePictureImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const LineChartDiv = styled.div`
    width: 400px;
    height: 320px;
    margin-left: 60px;
    /* height: 400px; */
`

const BottomContentDiv = styled.div`
    display: flex;
    width: 90%;
    margin: 50px auto;
    background-color: red;
    justify-content: space-around;
`

function SingleHorse(props) {
    const id = props.match.params.id
    const horse = horses.find(horse => `${horse.id}` === id)
    return (
        <div>
            <HeaderContainerDiv>
                <HorsePictureDiv>
                    <HorsePictureImg src={`${horse.picture}`}/>
                </HorsePictureDiv>
                <LineChartDiv>
                    <LineChart/>
                </LineChartDiv>
            </HeaderContainerDiv>
            <BottomContentDiv>
                <div>
                    <p>Name</p>
                    <h1>{horse.name}</h1>
                </div>
                <div>
                    <p>Total Races</p>
                    <h1>{horse.totalRaces}</h1>
                </div>
                <div>
                    <p>Total PrizeMoney</p>
                    <h1>{horse.totalPrizeMoney}</h1>
                </div>
                <div>
                    <p>Age</p>
                    <h1>{horse.age}</h1>
                </div>
            </BottomContentDiv>
        </div>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//       dispatch,
//       ...bindActionCreators({ horsesData }, dispatch)
//     }
// }

const mapStateToProps = (state) => ({
    horses: state.horses,
})

export default connect(mapStateToProps, null)(SingleHorse);
