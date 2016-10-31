import React from "react";
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect'

let RedirectorComponent = (props) => {
    let toPath = { pathname: props.navigateTo, state: { from: props.location }};
    if (props.navigateNow) {
        props.navigateComplete();
    }

    return (
        <div>
            { props.navigateNow ? <Redirect 
                to={toPath}/> : 'do nothing' }
        </div>
    )
}

const state = (state, ownProps = {}) => {
  return {
    navigateNow: state.navigateNow,
    navigateTo: state.navigateTo
  }
}

const mapDispatchToProps = (dispatch) => ({
    navigateComplete: () => {
        dispatch({type: "NAVIGATE_RESET" });
    }
});

export default connect(state, mapDispatchToProps)(RedirectorComponent);