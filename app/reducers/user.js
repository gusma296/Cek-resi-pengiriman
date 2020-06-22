const initialState = {
  name: '',
  welcome: true,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.name,
        welcome: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        name: '',
        welcome: true,
      };
    default:
      return state;
  }
};

export default user;
