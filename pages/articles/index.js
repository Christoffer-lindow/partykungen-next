import { useArticle } from "../../hooks/articles";
import FetchArticleForm from "../../components/forms/FetchArticleForm/FetchArticleForm";
import { useState } from "react";
import { getBoxSizes } from "../api/boxes/sizes";
import Layout from "../../components/layouts/Layout";
import HeadSection from "../../components/layouts/HeadSection";
import Article from "../../components/Article/Article";
import { getStaticImageUrl } from "../api/article";
import ArticleNavigation from "../../components/Article/ArticleNavigation";

const Articles = ({ articleImageBaseUrl, boxSizes }) => {
  const { fetchArticle, updateCurrentArticle, getCurrentArticle } =
    useArticle();
  const [article, setArticle] = useState(getCurrentArticle()?.article || null);
  const [requestError, setRequestError] = useState(null);
  const handleSubmit = async (value) => {
    await fetchArticle(value)
      .then((response) => {
        setArticle(response);
        setRequestError(null);
      })
      .catch((error) => setRequestError(error.message));
  };

  const handleUpdateArticle = (article) => {
    updateCurrentArticle(article);
    setArticle(article.article);
  };

  const breadCrumbs = [{ href: "articles", name: "Articles" }];

  return (
    <Layout breadCrumbs={breadCrumbs}>
      <HeadSection title={"Party king - Article sizing"} />
      <FetchArticleForm
        loading
        onSubmit={(value) => handleSubmit(value)}
        currentArticle={article}
        requestError={requestError}
      />
      <ArticleNavigation
        updateArticle={(article) => handleUpdateArticle(article)}
      />
      {article && (
        <Article
          article={article}
          articleImageBaseUrl={articleImageBaseUrl}
          boxSizes={boxSizes}
        />
      )}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      boxSizes: getBoxSizes(),
      articleImageBaseUrl: getStaticImageUrl(),
    },
  };
};

export default Articles;
