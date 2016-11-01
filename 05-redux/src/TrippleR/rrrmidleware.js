import { NAVIGATE_TO, reset } from "./rrrActions";

let reactRouterReduxMiddleware = store => next => action => {
  if (action.type === NAVIGATE_TO ) {
    window.setTimeout(() => {
      store.dispatch(reset());      
    }, 200);
  }
  return next(action);
}

export default reactRouterReduxMiddleware;
