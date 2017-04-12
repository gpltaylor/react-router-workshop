const initialState = {
  firstName: '',
  surname: '',
  age: ''
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_FORM_UPDATE":
      return Object.assign({}, state, { [action.key]: action.value });
    default:
      return state;
  }
}

export default registerReducer;