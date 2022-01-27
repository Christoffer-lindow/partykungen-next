import { FETCH_ARTICLE } from "../constants/articles";

const initialState = {
  articles: [],
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles,
          { id: state.articles.length + 1, article: action.payload },
        ],
      };
    default:
      return state;
  }
};
