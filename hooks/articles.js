import { useDispatch } from "react-redux";

import { useState } from "react";
import { fetchArticleById } from "../actions/articles";

export const useArticle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState(null);
  const dispatch = useDispatch();

  const fetchArticle = async (id) => {
    setLoading(true);
    try {
      const result = await dispatch(fetchArticleById(id));
      setArticle(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setArticle(null);
    }
    setLoading(false);
  };

  return { fetchArticle, loading, error, article };
};
