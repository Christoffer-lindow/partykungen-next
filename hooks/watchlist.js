import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  addToWatchlistAction,
  removeFromWatchlistAction,
} from "../actions/watchlist";

export const useWatchlist = () => {
  const [watchlistItemsCount, setWatchlistItemsCount] = useState(0);
  const dispatch = useDispatch();
  const { getState } = useStore();
  const addArticleToWatchlist = (article) => {
    dispatch(addToWatchlistAction(article));
    setWatchlistItemsCount(watchlistItemsCount + 1);
  };
  const removeArticleFromWatchlist = (article) =>
    dispatch(removeFromWatchlistAction(article));

  const watchlist = getState().watchlist;

  return {
    addArticleToWatchlist,
    removeArticleFromWatchlist,
    watchlist,
    watchlistItemsCount,
  };
};
