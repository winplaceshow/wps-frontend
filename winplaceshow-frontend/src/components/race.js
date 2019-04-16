import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import { displayRaceData } from '../actions/index';

const Race = (props) => {
    console.log(props.match)
    const id = props.match.params.id
    const race = props.races.find(race => `${race.id}` === id)
    return (
        <Link to={`/protected${race.id}`}>Enter</Link>
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
