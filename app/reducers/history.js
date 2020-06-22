const initialState = [];
const history = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      const found = state.some((item) => item.resi === action.resi);
      if (!found) {
        return [
          {
            id: action.id,
            name: action.name,
            image: action.image,
            resi: action.resi,
          },
          ...state,
        ];
      } else {
        return state;
      }
      break;
    case 'CLEAR_HISTORY':
      return initialState;

    default:
      return state;
  }
};

export default history;
