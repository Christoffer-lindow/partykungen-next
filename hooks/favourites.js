import { useDispatch, useStore } from "react-redux";
import {
  addFavouriteAction,
  removeFavouriteAction,
} from "../actions/favourites";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const { getState } = useStore();
  const addFavourite = (article) => dispatch(addFavouriteAction(article));
  const removeFavourite = (article) => dispatch(removeFavouriteAction(article));

  const favourites = getState().favourites.favourites;

  return { addFavourite, removeFavourite, favourites };
};
