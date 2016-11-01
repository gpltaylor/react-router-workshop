import React from "react";
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect'

let TrippleRComponent = (props) => {
    let toPath = { pathname: props.navigateTo, state: { from: props.location }};

    return (
        <div>
            { props.navigateNow ? <Redirect 
                to={toPath}/> : '' }
        </div>
    )
}

/**
 * TODO: Allow ownProps to determine where state is stored
 * as there is a chance that the Reducer is not called rrr.
 */
const state = (state, ownProps = {}) => {
  return {
    navigateNow: state.rrr.navigateNow,
    navigateTo: state.rrr.navigateTo
  }
}

const mapDispatchToProps = (dispatch) => ({
    navigateComplete: () => {
        //dispatch({type: "NAVIGATE_RESET" });
    }
});

export default connect(state, mapDispatchToProps)(TrippleRComponent);