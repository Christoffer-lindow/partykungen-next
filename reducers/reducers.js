import { combineReducers } from "redux";
import { articlesReducer } from "./articles";
import { favouritesReducer } from "./favourites";

const rootReducer = combineReducers({
  articles: articlesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
