import { FETCH_ARTICLE, UPDATE_ARTICLE } from "../constants/articles";
export const fetchArticleById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/article/${id}`);
    const result = await response.json();

    if (response.status === 200) {
      dispatch({
        type: FETCH_ARTICLE,
        payload: result,
      });
      return result;
    }
    throw new Error(result.message);
  } catch (error) {
    throw error;
  }
};

export const updateArticle = (article) => (dispatch) =>
  dispatch({
    type: UPDATE_ARTICLE,
    payload: { id: article.id, article: article.article },
  });
