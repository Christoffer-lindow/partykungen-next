import { useDispatch, useStore } from "react-redux";
import {
  addFavouriteAction,
  removeFavouriteAction,
} from "../actions/favourites";

export const UseFavourites = () => {
  const dispatch = useDispatch();
  const { getState } = useStore();
  const addFavourite = (article) => dispatch(addFavouriteAction(article));
  const removeFavourite = (article) => dispatch(removeFavouriteAction(article));

  const getFavourites = getState().favourites.favourites;

  return { addFavourite, removeFavourite };
};
