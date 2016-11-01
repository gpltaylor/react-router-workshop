import { NAVIGATE_TO, NAVIGATE_RESET } from "./rrrActions";

const initialState = {
    navigateNow: false,
    navigateTo: "/",
    navigateFrom: "/"
};

const rrrReducer = (state=initialState, action) => {
  if (action.type === NAVIGATE_TO) {
    return Object.assign({}, state, {navigateNow: true, navigateTo: action.navigateTo});
  }
  if (action.type === NAVIGATE_RESET) {
    return Object.assign({}, state, {navigateNow: false, navigateTo: '/'});   
  }

  return state;
}

export default rrrReducer;