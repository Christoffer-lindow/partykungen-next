import { FETCH_ARTICLE } from "../constants/articles";

const initialState = {
  articles: [],
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    default:
      return state;
  }
};
