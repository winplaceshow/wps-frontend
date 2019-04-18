import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { horses } from '../objects';

function SingleHorse(props) {
    const id = props.match.params.id
    const horse = horses.find(horse => `${horse.id}` === id)
    return (
        <div>
            <h1>{horse.name}</h1>
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
