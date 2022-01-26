export const fetchArticleById = async (id) => {
  const result = fetch(`/api/article/${id}`).then((response) =>
    response.json().then((result) => result)
  );
  return result;
};
