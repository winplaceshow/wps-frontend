import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import { displayRaceData } from '../actions/index';

const Race = (props) => {
    console.log(props)
    // const id = props.match.params.id
    return (
        <h1>Whoa</h1>
    )
}

// export default Race;
function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ displayRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    races: state.races
})

export default connect(mapStateToProps, mapDispatchToProps)(Race);
