import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../constants/watchlist";
export const addToWatchlistAction = (article) => (dispatch) => {
  dispatch({
    type: ADD_TO_WATCHLIST,
    payload: article,
  });
};

export const removeFromWatchlistAction = (article) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_WATCHLIST,
    payload: article,
  });
};
