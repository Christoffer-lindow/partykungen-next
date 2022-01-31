import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  addFavouriteAction,
  removeFavouriteAction,
} from "../actions/favourites";

export const useFavourites = () => {
  const [favouritesCount, setFavouriteCount] = useState(0);
  const dispatch = useDispatch();
  const { getState } = useStore();
  const addFavourite = (article) => {
    dispatch(addFavouriteAction(article));
    setFavouriteCount(favouritesCount + 1);
  };
  const removeFavourite = (article) => dispatch(removeFavouriteAction(article));

  const favourites = getState().favourites;

  return {
    addFavourite,
    removeFavourite,
    favourites,
    favouritesCount,
  };
};
