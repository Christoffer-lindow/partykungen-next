import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../constants/favourites";

const initialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: {
          ...state.filter((favourite) => favourite !== action.payload),
        },
      };
    default:
      return state;
  }
};
