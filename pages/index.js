import { useArticle } from "../hooks/articles";
import FetchArticleForm from "../components/forms/FetchArticleForm/FetchArticleForm";
import { useState } from "react";
import { getBoxSizes } from "./api/boxes/sizes";
import Layout from "../components/layouts/Layout";
import HeadSection from "../components/layouts/HeadSection";
import Article from "../components/Article/Article";
import { getStaticImageUrl } from "./api/article";

const Home = ({ articleImageBaseUrl }) => {
  const { fetchArticle } = useArticle();
  const [article, setArticle] = useState(null);
  const handleSubmit = async (value) => {
    await fetchArticle(value)
      .then((response) => setArticle(response))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <HeadSection />
      <FetchArticleForm loading onSubmit={(value) => handleSubmit(value)} />
      {article && (
        <Article article={article} articleImageBaseUrl={articleImageBaseUrl} />
      )}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const articleImageBaseUrl = await getStaticImageUrl();
  return {
    props: {
      boxSizes: {
        ...getBoxSizes(),
      },
      articleImageBaseUrl,
    },
  };
};

export default Home;
