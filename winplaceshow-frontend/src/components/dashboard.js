import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import { displayRaceData } from '../actions/index';

class Dashboard extends React.Component{

    // componentDidMount() {
    //     this.props.displayRaceData(this.props.races)
    // }

    getRaceArray = () => {

    }

    render() {
        return(
            <div>
                {this.props.races.map((race, index) => (
                    <div key={index}>
                        <h1>{race.name}</h1>
                    </div>
                ))}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ displayRaceData }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    races: state.races
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
