import React from "react";
import { connect } from 'react-redux';
import Redirect from 'react-router/Redirect'

let TrippleRComponent = (props) => {
    let toPath = { pathname: props.navigateTo, state: { from: props.location }};
    let RRRComponent = props.navigateNow ? <Redirect to={toPath}/> : '';
    return <div>
        {RRRComponent}
    </div>
};
const state = (state, ownProps = {}) => {
  return {
    navigateNow: state.rrr.navigateNow,
    navigateTo: state.rrr.navigateTo
  };
};

export default connect(state)(TrippleRComponent);