import {
  ADD_FAVOURITE,
  INCREMENT_FAVOURITES,
  REMOVE_FAVOURITE,
} from "../constants/favourites";

const initialState = [];

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];

    case INCREMENT_FAVOURITES:
      return {
        ...state,
        quantity: (state.quantity += 1),
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: [
          ...state.filter((favourite) => favourite !== action.payload),
        ],
      };
    default:
      return state;
  }
};
