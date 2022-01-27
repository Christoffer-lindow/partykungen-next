import { FETCH_ARTICLE, UPDATE_ARTICLE } from "../constants/articles";

const initialState = {
  articles: [],
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE:
      const article = {
        id: state.articles.length + 1,
        article: action.payload,
      };
      return {
        ...state,
        articles: [...state.articles, article],
        currentArticle: article,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        currentArticle: { ...action.payload },
      };
    default:
      return state;
  }
};
