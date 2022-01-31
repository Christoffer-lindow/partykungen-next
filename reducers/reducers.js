import { combineReducers } from "redux";
import { articlesReducer } from "./articles";
import { watchlistItemsReducer } from "./watchlist";

const rootReducer = combineReducers({
  articles: articlesReducer,
  watchlist: watchlistItemsReducer,
});

export default rootReducer;
