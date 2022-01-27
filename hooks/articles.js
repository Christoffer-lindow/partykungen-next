import { useDispatch } from "react-redux";
import { fetchArticleById } from "../actions/articles";

export const useArticle = () => {
  const dispatch = useDispatch();
  const fetchArticle = async (id) => dispatch(fetchArticleById(id));

  return { fetchArticle };
};
