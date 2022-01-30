import { useDispatch, useStore } from "react-redux";
import { fetchArticleById, updateArticle } from "../actions/articles";

export const useArticle = () => {
  const dispatch = useDispatch();
  const { getState } = useStore();
  const fetchArticle = async (id) => dispatch(fetchArticleById(id));
  const getCurrentArticle = () => {
    const state = getState();
    return state.articles.currentArticle;
  };

  const articles = getState().articles.articles;

  const getArticleByName = (articleName) =>
    getState().articles.articles.find(
      (article) => article.article.name === articleName
    );

  const updateCurrentArticle = (article) => dispatch(updateArticle(article));

  const getArticleByHistoryId = (id) => {
    const state = getState();
    return state.articles.articles.find((article) => article.id === id);
  };

  return {
    fetchArticle,
    getCurrentArticle,
    getArticleByHistoryId,
    updateCurrentArticle,
    articles,
    getArticleByName,
  };
};
