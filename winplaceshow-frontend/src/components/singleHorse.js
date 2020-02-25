import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { horses } from '../objects';
import { LineChart } from '../dataVisuals/barchart';

const HeaderContainerDiv = styled.div`
    display: flex;
    padding: 20px;
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`

const HorsePictureDiv = styled.div`
    width: 320px;
    height: 320px;
    flex-shrink: 0;
    margin-right: 10px;
    /* margin-left: 50px;
    margin-top: 40px; */
`

const HorsePictureImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const LineChartDiv = styled.div`
    width: 400px;
    height: 320px;
    margin-left: 30px;
    /* height: 400px; */
    @media (max-width: 800px) {
        margin-bottom: 30px;
        width: 300px;
    }
    @media (max-width: 1100px; min-width: 800px) {
        width: 400px;
    }
`

const BottomContentDiv = styled.div`
    display: flex;
    width: 90%;
    background-color: white;
    color: #4D7EA8;
    margin: 30px auto;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
    /* padding-bottom: 15px; */
    margin-top: 70px;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        align-items: flex-start;

        .items {
            width: 45%;
            overflow: hidden;
        }
        p {
            margin-bottom: 5px;
        }
        h1 {
            margin-top: 5px;
        }

    }
`

const PictureTextContainerDiv = styled.div`
    width: 700px;
    height: 320px;
    background-color: white;
    margin-left: 50px;
    margin-top: 40px;
    border-radius: 160px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
    padding-right: 20px;
    color: #4D7EA8;
    @media (max-width: 800px) {
        flex-direction: column;
        width: 320px;
        height: 500px;
        background: none;
        box-shadow: none;
        margin-left: 0;
        padding-right: 0;
    }
`

function SingleHorse(props) {
    const id = props.match.params.id
    const horse = horses.find(horse => `${horse.id}` === id)
    return (
        <div>
            <HeaderContainerDiv>
                <PictureTextContainerDiv>
                    <HorsePictureDiv>
                        <HorsePictureImg src={`${horse.picture}`}/>
                    </HorsePictureDiv>
                    <h4>This is the best horse in this whole universe. You are not going to find anything faster than this horse. This is the best horse in this whole universe. You are not going to find anything faster than this horse. </h4>
                </PictureTextContainerDiv>
                <LineChartDiv>
                    <LineChart/>
                </LineChartDiv>
            </HeaderContainerDiv>
            <BottomContentDiv>
                <div className="items">
                    <p>Name</p>
                    <h1>{horse.name}</h1>
                </div>
                <div className="items">
                    <p>Total Races</p>
                    <h1>{horse.totalRaces}</h1>
                </div>
                <div className="items">
                    <p>Total PrizeMoney</p>
                    <h1>{horse.totalPrizeMoney}</h1>
                </div>
                <div className="items">
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
