import React from "react";
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect'

let RedirectorComponent = (props) => {
    let toPath = { pathname: props.navigateTo, state: { from: props.location }};
    return (
        <div>
            { props.navigateNow ? <Redirect 
                to={toPath}/> : 'do nothing' }
        </div>
    )
}

let navigate = () => {};

const state = (state, ownProps = {}) => {
  return {
    navigateNow: state.navigateNow,
    navigateTo: state.navigateTo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate
  }
}

export default connect(state, mapDispatchToProps)(RedirectorComponent);