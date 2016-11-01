let reactRouterReduxMiddleware = store => next => action => {
  if (action.type === "NAVIGATE_TO" ) {
    window.setTimeout(() => {
      store.dispatch({ type: "NAVIGATE_RESET" });      
    }, 200);
  }
  return next(action);
}

export default reactRouterReduxMiddleware;
