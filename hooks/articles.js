const { useState } = require("react");
const { fetchArticleById } = require("../actions/articles");

export const useArticle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticle = async (id) => {
    setLoading(true);
    try {
      const article = await fetchArticleById(id);
      return article;
    } catch (error) {
      setError(error);
    }
  };

  return { fetchArticle, loading, error };
};
