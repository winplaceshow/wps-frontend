import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { displayRaceData } from '../actions/index';

class SearchRace extends React.Component {
    state = {
        date: '',
        city: ''
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    search = (e) => {
        e.preventDefault()
        this.props.displayRaceData(this.props.races, this.state.date, this.state.city)
        // .then(() => {
        //     this.props.history.push('/protected');
        // })
        this.setState({
            credentials: {
                date: '',
                city: ''
            }
        })
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <form>
                    <input
                        type="text"
                        name="date"
                        placeholder="date"
                        value={this.state.date}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="city"
                        value={this.state.city}
                        onChange={this.changeHandler}
                    />
                    <button onClick={this.search}>Login</button>
                </form>
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
    races: state.races,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchRace);
