import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../constants/watchlist";

const initialState = [];

export const watchlistItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WATCHLIST:
      return [
        ...state.filter((watchlistItem) => watchlistItem !== action.payload),
      ];
    default:
      return state;
  }
};
