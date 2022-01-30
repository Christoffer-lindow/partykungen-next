import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../constants/favourites";
export const addFavouriteAction = (article) => (dispatch) => {
  dispatch({
    type: ADD_FAVOURITE,
    payload: article,
  });
};

export const removeFavouriteAction = (article) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: article,
  });
};
